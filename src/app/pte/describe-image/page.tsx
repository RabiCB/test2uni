"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import {
  Timer,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  XCircle,
  ImageIcon,
  ArrowLeft,
  ArrowRight,
  Home,
  Eye,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data for images to describe
const images = [
  {
    id: 1,
    url: "/modern-office-meeting.png",
    title: "Business Meeting",
    difficulty: "Easy",
    timeLimit: 40,
    keywords: ["meeting", "office", "business", "people", "discussion"],
  },
  {
    id: 2,
    url: "/city-skyline-at-sunset-with-traffic.png",
    title: "City Skyline",
    difficulty: "Medium",
    timeLimit: 40,
    keywords: ["city", "buildings", "skyline", "traffic", "sunset", "urban"],
  },
  {
    id: 3,
    url: "/complex-scientific-laboratory-with-equipment.png",
    title: "Scientific Laboratory",
    difficulty: "Hard",
    timeLimit: 40,
    keywords: ["laboratory", "science", "equipment", "research", "technology", "experiment"],
  },
  {
    id: 4,
    url: "/family-picnic-in-park-with-children-playing.png",
    title: "Family Picnic",
    difficulty: "Easy",
    timeLimit: 40,
    keywords: ["family", "picnic", "park", "children", "outdoor", "recreation"],
  },
  {
    id: 5,
    url: "/environmental-conservation-forest-restoration.png",
    title: "Environmental Conservation",
    difficulty: "Hard",
    timeLimit: 40,
    keywords: ["environment", "conservation", "forest", "nature", "sustainability", "restoration"],
  },
]

export default function DescribeImagePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [description, setDescription] = useState("")
  const [hasStarted, setHasStarted] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [feedback, setFeedback] = useState<{
    score: number
    strengths: string[]
    improvements: string[]
    keywordsCovered: number
  } | null>(null)
  const [completedImages, setCompletedImages] = useState<number[]>([])

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const currentImage = images[currentImageIndex]
  const progress = (completedImages.length / images.length) * 100

  // Timer effect
  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0 && hasStarted) {
      handleTimeUp()
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [isTimerRunning, timeLeft, hasStarted])

  const handleStartTimer = () => {
    setTimeLeft(currentImage.timeLimit)
    setIsTimerRunning(true)
    setHasStarted(true)
    setIsCompleted(false)
    setFeedback(null)
  }

  const handlePauseTimer = () => {
    setIsTimerRunning(false)
  }

  const handleResumeTimer = () => {
    if (timeLeft > 0) {
      setIsTimerRunning(true)
    }
  }

  const handleTimeUp = () => {
    setIsTimerRunning(false)
    setIsCompleted(true)
    generateFeedback()
  }

  const handleSubmit = () => {
    setIsTimerRunning(false)
    setIsCompleted(true)
    generateFeedback()
  }

  const generateFeedback = () => {
    // Simulate AI feedback based on description
    const wordCount = description.trim().split(/\s+/).length
    const keywordsCovered = currentImage.keywords.filter((keyword) =>
      description.toLowerCase().includes(keyword.toLowerCase()),
    ).length

    const baseScore = Math.min(90, Math.max(60, wordCount * 2))
    const keywordBonus = (keywordsCovered / currentImage.keywords.length) * 20
    const finalScore = Math.min(100, Math.round(baseScore + keywordBonus))

    const strengths = [] as any
    const improvements = [] as any

    if (wordCount >= 50) {
      strengths.push("Good detail and elaboration")
    } else {
      improvements.push("Add more descriptive details")
    }

    if (keywordsCovered >= currentImage.keywords.length * 0.6) {
      strengths.push("Covered key elements effectively")
    } else {
      improvements.push("Include more specific details about key elements")
    }

    if (description.includes("because") || description.includes("therefore") || description.includes("however")) {
      strengths.push("Used connecting words well")
    } else {
      improvements.push("Use more connecting words to link ideas")
    }

    setTimeout(() => {
      setFeedback({
        score: finalScore,
        strengths,
        improvements,
        keywordsCovered,
      })
    }, 1000)
  }

  const handleNextImage = () => {
    if (feedback && !completedImages.includes(currentImage.id)) {
      setCompletedImages([...completedImages, currentImage.id])
    }

    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
      resetState()
    }
  }

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
      resetState()
    }
  }

  const resetState = () => {
    setTimeLeft(0)
    setIsTimerRunning(false)
    setDescription("")
    setHasStarted(false)
    setIsCompleted(false)
    setFeedback(null)
  }

  const handleRetry = () => {
    resetState()
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Home className="w-4 h-4" />
                  Dashboard
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-bold text-foreground">Describe Image</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                {currentImageIndex + 1} of {images.length}
              </div>
              <Badge variant="secondary">{currentImage.difficulty}</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Your Progress</CardTitle>
            <CardDescription>
              {completedImages.length} of {images.length} images completed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="h-3" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  {currentImage.title}
                </CardTitle>
                <CardDescription>Study the image carefully and describe what you see</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={currentImage.url || "/placeholder.svg"}
                    alt={currentImage.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CardContent>
            </Card>

            {/* Timer Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="w-5 h-5" />
                  Timer
                </CardTitle>
                <CardDescription>You have {currentImage.timeLimit} seconds to describe the image</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">
                    {hasStarted ? formatTime(timeLeft) : formatTime(currentImage.timeLimit)}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {!hasStarted ? (
                      <Button onClick={handleStartTimer} className="gap-2">
                        <Play className="w-4 h-4" />
                        Start Timer
                      </Button>
                    ) : (
                      <>
                        {isTimerRunning ? (
                          <Button onClick={handlePauseTimer} variant="outline" className="gap-2 bg-transparent">
                            <Pause className="w-4 h-4" />
                            Pause
                          </Button>
                        ) : (
                          <Button onClick={handleResumeTimer} className="gap-2">
                            <Play className="w-4 h-4" />
                            Resume
                          </Button>
                        )}
                        <Button onClick={handleRetry} variant="outline" className="gap-2 bg-transparent">
                          <RotateCcw className="w-4 h-4" />
                          Retry
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Description Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Your Description
                </CardTitle>
                <CardDescription>
                  Describe the image in detail. Include what you see, colors, actions, and context.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Start describing the image here..."
                  className="min-h-[200px] resize-none"
                  disabled={!hasStarted || isCompleted}
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-muted-foreground">
                    {description.trim().split(/\s+/).filter(Boolean).length} words
                  </div>
                  {hasStarted && !isCompleted && (
                    <Button onClick={handleSubmit} disabled={!description.trim()}>
                      Submit Description
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Feedback Section */}
            {feedback && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {feedback.score >= 80 ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-orange-600" />
                    )}
                    Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">{feedback.score}%</div>
                      <div className="text-sm text-muted-foreground">Overall Score</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">
                        {feedback.keywordsCovered}/{currentImage.keywords.length}
                      </div>
                      <div className="text-sm text-muted-foreground">Key Elements</div>
                    </div>
                  </div>

                  {feedback.strengths.length > 0 && (
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Strengths:</h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                        {feedback.strengths.map((strength, index) => (
                          <li key={index}>• {strength}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {feedback.improvements.length > 0 && (
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Areas for Improvement:</h4>
                      <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                        {feedback.improvements.map((improvement, index) => (
                          <li key={index}>• {improvement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            onClick={handlePreviousImage}
            disabled={currentImageIndex === 0}
            variant="outline"
            className="gap-2 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            Image {currentImageIndex + 1} of {images.length}
          </div>

          <Button
            onClick={handleNextImage}
            disabled={currentImageIndex === images.length - 1 || !feedback}
            className="gap-2"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
