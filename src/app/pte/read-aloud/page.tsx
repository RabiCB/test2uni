"use client"

import { useState, useEffect, useRef } from "react"

// Sample Read Aloud questions
const readAloudQuestions = [
  {
    id: 1,
    text: "The sun is the star at the center of our solar system. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The sun radiates this energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.",
  },
  {
    id: 2,
    text: "Buildings are a response to the climate. They are built to provide a healthy, and comfortable environment. However, these conditioned environments demand resources in energy and materials, which are both limited in supply, to build and operate.",
  },
  {
    id: 3,
    text: "Artificial intelligence has revolutionized numerous industries by enabling machines to perform tasks that typically require human intelligence. From healthcare diagnostics to autonomous vehicles, AI systems are becoming increasingly sophisticated and integrated into our daily lives.",
  },
  {
    id: 4,
    text: "The Great Barrier Reef, located off the coast of Australia, is the world's largest coral reef system. Composed of over 2,900 individual reefs and 900 islands, it stretches for over 2,300 kilometers and supports a diverse ecosystem of marine life.",
  },
  {
    id: 5,
    text: "Renewable energy sources such as solar, wind, and hydroelectric power are becoming increasingly important in the global effort to reduce carbon emissions. These sustainable alternatives to fossil fuels offer the potential to meet our energy needs while minimizing environmental impact.",
  },
]

type Stage = "preparation" | "beeping" | "recording" | "completed"

export default function ReadAloudPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1)
  const [stage, setStage] = useState<Stage>("preparation")
  const [countdown, setCountdown] = useState(35)
  const [recordingTime, setRecordingTime] = useState(40)
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState<string | null>(null)
  const [goToQuestionValue, setGoToQuestionValue] = useState("")
  const [selectedQuestion, setSelectedQuestion] = useState(10)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const beepAudioRef = useRef<HTMLAudioElement | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const currentQuestion = readAloudQuestions[currentQuestionIndex]
  const totalQuestions = 120
  const recordingProgress = ((40 - recordingTime) / 40) * 100

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Prepare beep
  useEffect(() => {
    const audio = new Audio("/beep.mp3")
    beepAudioRef.current = audio
    return () => {
      if (beepAudioRef.current) beepAudioRef.current.pause()
      beepAudioRef.current = null
    }
  }, [])

  // Countdown logic
  useEffect(() => {
    if (stage === "preparation" && countdown > 0) {
      timerRef.current = setTimeout(() => setCountdown(countdown - 1), 1000)
    } else if (stage === "preparation" && countdown === 0) {
      playBeepAndStartRecording()
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [stage, countdown])

  // Recording timer logic
  useEffect(() => {
    if (stage === "recording" && recordingTime > 0) {
      timerRef.current = setTimeout(() => setRecordingTime(recordingTime - 1), 1000)
    } else if (stage === "recording" && recordingTime === 0) {
      handleStopRecording()
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [stage, recordingTime])

  const playBeepAndStartRecording = async () => {
    setStage("beeping")
    beepAudioRef.current?.play()
    setTimeout(() => {
      handleStartRecording()
    }, 300)
  }

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data)
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
      alert("Microphone access denied. Please check permissions.")
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
    if (currentQuestionIndex > 0) {
      setIsLoading(true)
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1)
        handleRestart()
        setIsLoading(false)
      }, 500)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < readAloudQuestions.length - 1) {
      setIsLoading(true)
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        handleRestart()
        setIsLoading(false)
      }, 500)
    }
  }

  if (isLoading) {
    return (
      <main className="my-10 max-md:my-12 w-full md:max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="relative w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-[#4CAF50] rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-600">Loading question...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="my-10 max-md:my-12 w-full md:max-w-screen-lg mx-auto">
      <h2 className="text-center my-4">
        Look at the text below. In the 35 seconds, you must read this text aloud as naturally and clearly as possible.
        You have 35 seconds to read aloud.
      </h2>

      <section className="flex flex-col mt-4 items-center justify-center">
        <main className="max-md:w-full md:max-w-[700px] w-full">
          <div className="border p-6 rounded-md min-h-40 w-full my-4 max-h-96">
            {/* Preparation Stage */}
            {stage === "preparation" && (
              <>
                <h2>Recording will start in {countdown}</h2>
                <div className="flex items-center justify-center my-4">
                  <button onClick={handleSkip} className="bg-[#4CAF50] px-4 py-2 text-white rounded-md">
                    Skip
                  </button>
                </div>
              </>
            )}

            {/* Recording Stage */}
            {(stage === "beeping" || stage === "recording") && (
              <>
                <h2 className="mb-4">
                  {stage === "beeping" ? "Get ready..." : `Recording: ${recordingTime}s remaining`}
                </h2>
                {stage === "recording" && isRecording && (
                  <>
                    <div className="w-full border h-4 rounded-sm mb-4">
                      <div
                        style={{ width: `${recordingProgress}%` }}
                        className="bg-[#4CAF50] h-full transition-all duration-300"
                      ></div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={handleStopRecording}
                        className="bg-red-600 px-4 py-2 text-white rounded-md"
                      >
                        Stop
                      </button>
                    </div>
                  </>
                )}
              </>
            )}

            {/* Completed Stage → Show Audio Player */}
            {stage === "completed" && audioURL && (
              <>
                <h2 className="mb-4">Recored Audio</h2>
                <audio controls src={audioURL} className="w-full mb-4" />
              </>
            )}

            <div className="bg-gray-50 p-4 rounded-md my-4">
              <p className="leading-relaxed">{currentQuestion.text}</p>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={handleRestart}
                className="cursor-pointer border px-4 py-2 text-white bg-[#4CAF50] rounded-md"
              >
                Restart
              </button>

              <div className="flex gap-4 items-center">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="cursor-pointer flex disabled:bg-gray-500 disabled:text-white disabled:cursor-not-allowed gap-1.5 items-center border px-4 py-2 text-black rounded-md"
                >
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentQuestionIndex === readAloudQuestions.length - 1}
                  className="cursor-pointer flex disabled:bg-slate-800 disabled:cursor-not-allowed gap-1.5 items-center bg-black px-4 py-2 text-white rounded-md"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          <audio src="/beep.mp3" ref={beepAudioRef} />
        </main>
      </section>
    </main>
  )
}
