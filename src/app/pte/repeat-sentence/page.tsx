"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Play, Square, RotateCcw, ChevronLeft, ChevronRight, SkipForward } from "lucide-react"
import Link from "next/link"

// Sample questions for repeat sentence
const sampleQuestions = [
  {
    id: 1,
    text: "The quick brown fox jumps over the lazy dog.",
    audioUrl: "/placeholder-audio.mp3",
    duration: 3.5,
  },
  {
    id: 2,
    text: "Climate change represents one of the most significant challenges facing humanity today.",
    audioUrl: "/placeholder-audio.mp3",
    duration: 5.2,
  },
  {
    id: 3,
    text: "The implementation of sustainable development practices requires comprehensive collaboration between governmental institutions and private sector organizations.",
    audioUrl: "/placeholder-audio.mp3",
    duration: 8.1,
  },
  {
    id: 4,
    text: "Artificial intelligence and machine learning technologies are revolutionizing various industries.",
    audioUrl: "/placeholder-audio.mp3",
    duration: 6.3,
  },
  {
    id: 5,
    text: "The biodiversity of tropical rainforests contributes significantly to global ecological stability.",
    audioUrl: "/placeholder-audio.mp3",
    duration: 7.8,
  },
  {
    id: 6,
    text: "Economic globalization has transformed international trade and financial markets.",
    audioUrl: "/placeholder-audio.mp3",
    duration: 5.5,
  },
  {
    id: 7,
    text: "Renewable energy sources are essential for reducing carbon emissions and combating climate change.",
    audioUrl: "/placeholder-audio.mp3",
    duration: 6.8,
  },
  {
    id: 8,
    text: "The human brain contains approximately 86 billion neurons that communicate through synapses.",
    audioUrl: "/placeholder-audio.mp3",
    duration: 6.0,
  },
]

export default function RepeatSentencePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [countdown, setCountdown] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [hasRecorded, setHasRecorded] = useState(false)
  const [goToQuestion, setGoToQuestion] = useState("")

  const countdownRef = useRef<NodeJS.Timeout | null>(null)
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)

  const currentQuestion = sampleQuestions[currentQuestionIndex]
  const totalQuestions = sampleQuestions.length

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current)
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current)
    }
  }, [])

  // Handle audio playback
  const handlePlayAudio = () => {
    setIsPlaying(true)
    setTimeout(() => {
      setIsPlaying(false)
      startCountdown()
    }, currentQuestion.duration * 1000)
  }

  // Start countdown before recording
  const startCountdown = () => {
    setCountdown(3)
    countdownRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          if (countdownRef.current) clearInterval(countdownRef.current)
          startRecording()
          return null
        }
        return prev - 1
      })
    }, 1000)
  }

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      mediaRecorder.start()
      setIsRecording(true)
      setRecordingTime(0)

      recordingTimerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1)
      }, 1000)

      mediaRecorder.ondataavailable = () => {
        setHasRecorded(true)
      }
    } catch (error) {
      console.error("Error accessing microphone:", error)
    }
  }

  // Stop recording
  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop())
      setIsRecording(false)
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current)
    }
  }

  // Restart question
  const handleRestart = () => {
    setCountdown(null)
    setIsPlaying(false)
    setIsRecording(false)
    setRecordingTime(0)
    setHasRecorded(false)
    if (countdownRef.current) clearInterval(countdownRef.current)
    if (recordingTimerRef.current) clearInterval(recordingTimerRef.current)
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop())
    }
  }

  // Skip to next question
  const handleSkip = () => {
    handleRestart()
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  // Navigate to previous question
  const handlePrevious = () => {
    handleRestart()
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  // Navigate to next question
  const handleNext = () => {
    handleRestart()
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  // Go to specific question
  const handleGoToQuestion = () => {
    const questionNum = Number.parseInt(goToQuestion)
    if (questionNum >= 1 && questionNum <= totalQuestions) {
      handleRestart()
      setCurrentQuestionIndex(questionNum - 1)
      setGoToQuestion("")
    }
  }

  const recordingProgress = Math.min((recordingTime / 40) * 100, 100)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/pte-dashboard" className="text-primary hover:text-primary/80 font-medium">
              ← Back to Dashboard
            </Link>
            <h1 className="text-xl font-bold text-foreground">Repeat Sentence</h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Instructions */}
        <Card className="mb-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6">
            <h2 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Instructions</h2>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              You will hear a sentence. Please repeat the sentence exactly as you hear it. You will hear the sentence
              only once.
            </p>
          </CardContent>
        </Card>

        {/* Main Practice Area */}
        <Card className="mb-6">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* Status Display */}
              <div className="text-center min-h-[120px] flex flex-col items-center justify-center">
                {!isPlaying && !countdown && !isRecording && !hasRecorded && (
                  <div className="space-y-4">
                    <div className="text-lg text-muted-foreground">Click play to begin</div>
                    <Button onClick={handlePlayAudio} size="lg" className="gap-2 h-14 px-8">
                      <Play className="w-6 h-6" />
                      Play Audio
                    </Button>
                  </div>
                )}

                {isPlaying && (
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">Playing Audio...</div>
                    <div className="text-muted-foreground">Listen carefully</div>
                  </div>
                )}

                {countdown !== null && (
                  <div className="space-y-2">
                    <div className="text-6xl font-bold text-primary">{countdown}</div>
                    <div className="text-muted-foreground">Get ready to speak...</div>
                  </div>
                )}

                {isRecording && (
                  <div className="space-y-4 w-full max-w-md">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="text-2xl font-bold text-red-500">Recording...</div>
                    </div>
                    <div className="space-y-2">
                      <Progress value={recordingProgress} className="h-2" />
                      <div className="text-center text-sm text-muted-foreground">{recordingTime}s / 40s</div>
                    </div>
                  </div>
                )}

                {hasRecorded && !isRecording && (
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-600">Recording Complete!</div>
                    <div className="text-muted-foreground">Your response has been recorded</div>
                  </div>
                )}
              </div>

              {/* Control Buttons */}
              <div className="flex items-center gap-3">
                <Button
                  onClick={handleSkip}
                  variant="outline"
                  size="lg"
                  disabled={isPlaying || isRecording}
                  className="gap-2 bg-transparent"
                >
                  <SkipForward className="w-5 h-5" />
                  Skip
                </Button>

                {isRecording && (
                  <Button onClick={handleStopRecording} variant="destructive" size="lg" className="gap-2">
                    <Square className="w-5 h-5" />
                    Stop
                  </Button>
                )}

                <Button
                  onClick={handleRestart}
                  variant="outline"
                  size="lg"
                  disabled={!hasRecorded && !isRecording}
                  className="gap-2 bg-transparent"
                >
                  <RotateCcw className="w-5 h-5" />
                  Restart
                </Button>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3 pt-4">
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  size="lg"
                  disabled={currentQuestionIndex === 0 || isPlaying || isRecording}
                  className="gap-2 bg-transparent"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </Button>

                <Button
                  onClick={handleNext}
                  variant="default"
                  size="lg"
                  disabled={currentQuestionIndex === totalQuestions - 1 || isPlaying || isRecording}
                  className="gap-2"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Navigation */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  min="1"
                  max={totalQuestions}
                  value={goToQuestion}
                  onChange={(e) => setGoToQuestion(e.target.value)}
                  placeholder="Question #"
                  className="w-32"
                />
                <Button onClick={handleGoToQuestion} variant="outline">
                  Go to Question
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Question <span className="font-bold text-foreground">{currentQuestionIndex + 1}</span> of{" "}
                  <span className="font-bold text-foreground">{totalQuestions}</span>
                </div>
                <select
                  value={currentQuestionIndex}
                  onChange={(e) => {
                    handleRestart()
                    setCurrentQuestionIndex(Number.parseInt(e.target.value))
                  }}
                  className="px-3 py-2 border rounded-md bg-background"
                >
                  {sampleQuestions.map((_, index) => (
                    <option key={index} value={index}>
                      Question {index + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
