"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"
import ReadAloudContentComponent from "./read-aloud-content"
import { urls } from "@/lib/constants"

const queryClient = new QueryClient()

const fetchQuestionById = async (id: number) => {
  const res = await fetch(`${urls.server}/api/readaloud/${id}`)
  if (!res.ok) throw new Error("Failed to fetch question")
  return res.json()
}

export default function ReadAloudPageWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingFallback />}>
        <ReadAloudContent />
      </Suspense>
    </QueryClientProvider>
  )
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#4CAF50] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-muted-foreground">Loading question...</p>
      </div>
    </div>
  )
}

type Stage = "preparation" | "beeping" | "recording" | "completed"

function ReadAloudContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentId = Number.parseInt(searchParams.get("id") || "2", 10)

  const [stage, setStage] = useState<Stage>("preparation")
  const [countdown, setCountdown] = useState(35)
  const [recordingTime, setRecordingTime] = useState(40)
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState<string | null>(null)
  const [showLoader, setShowLoader] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const beepAudioRef = useRef<HTMLAudioElement | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const {
    data: question,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["readAloudQuestion", currentId],
    queryFn: () => fetchQuestionById(currentId),
    staleTime: 5 * 60 * 1000,
  })

  const recordingProgress = ((40 - recordingTime) / 40) * 100

  // Beep preparation
  useEffect(() => {
    const audio = new Audio("/beep.mp3")
    beepAudioRef.current = audio
    return () => {
      beepAudioRef.current?.pause()
      beepAudioRef.current = null
    }
  }, [])

  // Countdown
  useEffect(() => {
    if (stage === "preparation" && countdown > 0) {
      timerRef.current = setTimeout(() => setCountdown(countdown - 1), 1000)
    } else if (stage === "preparation" && countdown === 0) {
      playBeepAndStartRecording()
    }
    return () => clearTimeout(timerRef.current!)
  }, [stage, countdown])

  // Recording timer
  useEffect(() => {
    if (stage === "recording" && recordingTime > 0) {
      timerRef.current = setTimeout(() => setRecordingTime(recordingTime - 1), 1000)
    } else if (stage === "recording" && recordingTime === 0) {
      handleStopRecording()
    }
    return () => clearTimeout(timerRef.current!)
  }, [stage, recordingTime])

  const playBeepAndStartRecording = async () => {
    setStage("beeping")
    beepAudioRef.current?.play()
    setTimeout(() => handleStartRecording(), 300)
  }

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data)
      }

      mediaRecorder.onstop = () => {
        stream.getTracks().forEach((t) => t.stop())
        const blob = new Blob(chunksRef.current, { type: "audio/webm" })
        setAudioURL(URL.createObjectURL(blob))
        setStage("completed")
      }

      mediaRecorder.start()
      setIsRecording(true)
      setStage("recording")
      setRecordingTime(40)
    } catch (err) {
      alert("Microphone access denied")
      console.error(err)
    }
  }

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const handleRestart = () => {
    setStage("preparation")
    setCountdown(35)
    setRecordingTime(40)
    setAudioURL(null)
    setIsRecording(false)
  }

  const handleSkip = () => {
    if (stage === "preparation") {
      setCountdown(0)
      playBeepAndStartRecording()
    }
  }

  const handlePrevious = () => {
    if (currentId > 2) {
      setShowLoader(true)
      setTimeout(() => {
        router.push(`/pte/read-aloud?id=${currentId - 1}`)
        handleRestart()
        setShowLoader(false)
      }, 500)
    }
  }

  const handleNext = () => {
    setShowLoader(true)
    setTimeout(() => {
      router.push(`/pte/read-aloud?id=${currentId + 1}`)
      handleRestart()
      setShowLoader(false)
    }, 500)
  }

  if (isLoading ) {
    return <LoadingFallback />
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </header>
        <main className="my-10 max-w-screen-lg mx-auto px-4">
          <p className="text-red-500">Error: {(error as Error).message}</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="text-sm text-muted-foreground">Question {currentId}</div>
          </div>
        </div>
      </header>

      <main className="my-10 max-w-screen-lg mx-auto px-4">
        <h2 className="text-center my-4 text-foreground text-balance">
          Look at the text below. You have 35 seconds to read aloud as naturally and clearly as possible.
        </h2>

        <section className="flex flex-col mt-4 items-center justify-center">
          <main className="max-md:w-full md:max-w-[700px] w-full">
            <div className="border border-border p-6 rounded-md min-h-40 w-full my-4 bg-card">
              {/* Preparation Stage */}
              {stage === "preparation" && (
                <>
                  <h2 className="text-foreground text-xl font-semibold mb-4">Recording will start in {countdown}s</h2>
                  <div className="flex items-center justify-center my-4">
                    <button
                      onClick={handleSkip}
                      className="bg-[#4CAF50] px-4 py-2 text-white rounded-md hover:bg-[#45a049] transition-colors"
                    >
                      Skip
                    </button>
                  </div>
                </>
              )}

              {/* Recording Stage */}
              {(stage === "beeping" || stage === "recording") && (
                <>
                  <h2 className="mb-4 text-foreground text-xl font-semibold">
                    {stage === "beeping" ? "Get ready..." : `Recording: ${recordingTime}s remaining`}
                  </h2>
                  {stage === "recording" && isRecording && (
                    <>
                      <div className="w-full border border-border h-4 rounded-sm mb-4">
                        <div
                          style={{ width: `${recordingProgress}%` }}
                          className="bg-[#4CAF50] h-full transition-all duration-300"
                        ></div>
                      </div>
                      <div className="flex justify-center">
                        <button
                          onClick={handleStopRecording}
                          className="bg-red-600 px-4 py-2 text-white rounded-md hover:bg-red-700 transition-colors"
                        >
                          Stop Recording
                        </button>
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Completed Stage */}
              {stage === "completed" && audioURL && (
                <>
                  <h2 className="mb-4 text-foreground text-xl font-semibold">Recorded Audio</h2>
                  <audio controls src={audioURL} className="w-full mb-4" />
                </>
              )}

              <div className="bg-muted/50 p-4 rounded-md my-4">
                <p className="leading-relaxed text-foreground">{question.passage}</p>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={handleRestart}
                  className="cursor-pointer border border-border px-4 py-2 text-white bg-[#4CAF50] rounded-md hover:bg-[#45a049] transition-colors"
                >
                  Restart
                </button>

                <div className="flex gap-4 items-center">
                  <button
                    onClick={handlePrevious}
                    disabled={currentId === 2}
                    className="cursor-pointer flex disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed gap-1.5 items-center border border-border px-4 py-2 text-foreground rounded-md hover:bg-muted/50 transition-colors"
                  >
                    Previous
                  </button>

                  <button
                    onClick={handleNext}
                    className="cursor-pointer flex gap-1.5 items-center bg-primary px-4 py-2 text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            <audio src="/beep.mp3" ref={beepAudioRef} className="hidden" />
          </main>
        </section>
      </main>
    </div>
  )
}
