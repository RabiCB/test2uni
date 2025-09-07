"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Mic, RefreshCcw } from "lucide-react"

// Example repeat-sentence pool
const sentences = [
  "The lecture on climate change will begin at ten o'clock.",
  "New regulations will improve the safety of public transport.",
  "The professor discussed the impact of social media on communication.",
  "Please submit your assignments before the end of this week.",
  "Economic growth depends on innovation and strong infrastructure.",
]

export default function PTERepeatSentencePanel() {
  const [index, setIndex] = useState(0)
  const [recording, setRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const [audioURL, setAudioURL] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const recorder = new MediaRecorder(stream)
      let chunks: BlobPart[] = []

      recorder.ondataavailable = (e) => chunks.push(e.data)
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" })
        setAudioURL(URL.createObjectURL(blob))
      }

      recorder.start()
      setMediaRecorder(recorder)
      setRecording(true)

      // auto-stop after 10s
      setTimeout(() => {
        if (recorder.state === "recording") {
          recorder.stop()
          setRecording(false)
        }
      }, 10000)
    } catch (err) {
      alert("Microphone access denied")
    }
  }

  // Stop recording manually
  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop()
      setRecording(false)
    }
  }

  // Move to next sentence
  const nextSentence = () => {
    const nextIndex = (index + 1) % sentences.length
    setIndex(nextIndex)
    setAudioURL(null)
    setProgress(((nextIndex + 1) / sentences.length) * 100)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card className="shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">PTE Repeat Sentence Practice</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Progress */}
          <Progress value={progress} className="h-2" />

          {/* Sentence prompt */}
          <div className="bg-muted p-4 rounded-lg text-center text-lg">
            {sentences[index]}
          </div>

          {/* Controls */}
          <div className="flex gap-4 justify-center">
            {!recording ? (
              <Button onClick={startRecording}>
                <Mic className="h-4 w-4 mr-2" /> Start Recording
              </Button>
            ) : (
              <Button onClick={stopRecording} variant="destructive">
                Stop
              </Button>
            )}

            <Button onClick={nextSentence} variant="outline">
              <RefreshCcw className="h-4 w-4 mr-2" /> Next
            </Button>
          </div>

          {/* Playback */}
          {audioURL && (
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground mb-2">Your Recording:</p>
              <audio controls src={audioURL} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
