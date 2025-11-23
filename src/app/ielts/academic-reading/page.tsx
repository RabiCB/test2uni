// Updated Academic Reading Page (Single Question per Test + Full Page Question View)

"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, FileText, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

type ReadingTest = {
  id: number
  title: string
  difficulty: string
  question: string
  timeLimit: number
  topics: string[]
  completed: boolean
  score: number | null
}

const readingTests: ReadingTest[] = [
  {
    id: 1,
    title: "Climate Change and Global Warming",
    difficulty: "Medium",
    question: "What is the primary cause of recent global temperature increases?",
    timeLimit: 60,
    topics: ["Environment", "Science"],
    completed: true,
    score: 8.5,
  },
  {
    id: 2,
    title: "The History of Ancient Civilizations",
    difficulty: "Hard",
    question: "Which factor contributed most to the rise of early civilizations?",
    timeLimit: 60,
    topics: ["History", "Culture"],
    completed: true,
    score: 7.5,
  },
  {
    id: 3,
    title: "Artificial Intelligence and Machine Learning",
    difficulty: "Hard",
    question: "What is a key difference between AI and traditional algorithms?",
    timeLimit: 60,
    topics: ["Technology", "Science"],
    completed: false,
    score: null,
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500/10 text-green-500 border-green-500/20"
    case "Medium":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
    case "Hard":
      return "bg-red-500/10 text-red-500 border-red-500/20"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function AcademicReadingPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTest, setSelectedTest] = useState<ReadingTest | null>(null)

  const testsPerPage = 6
  const totalPages = Math.ceil(readingTests.length / testsPerPage)
  const startIndex = (currentPage - 1) * testsPerPage
  const endIndex = startIndex + testsPerPage
  const currentTests = readingTests.slice(startIndex, endIndex)

  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))

  // -------------------------------------------------------
  // FULL PAGE QUESTION VIEW
  // -------------------------------------------------------
  if (selectedTest) {
    return (
      <div className="min-h-screen bg-background py-8 px-4 max-w-4xl mx-auto">
        <Button variant="ghost" onClick={() => setSelectedTest(null)} className="gap-2 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Questions List
        </Button>

        <Card className="border-border bg-card">
          <CardHeader>
            <Badge variant="outline" className={getDifficultyColor(selectedTest.difficulty)}>
              {selectedTest.difficulty}
            </Badge>

            <CardTitle className="text-2xl font-bold mt-4">
              Question {selectedTest.id}: {selectedTest.title}
            </CardTitle>

            <CardDescription className="flex gap-2 mt-2 flex-wrap">
              {selectedTest.topics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                >
                  {topic}
                </span>
              ))}
            </CardDescription>
          </CardHeader>

          <CardContent className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Question</h3>
            <p className="text-foreground text-base">{selectedTest.question}</p>

            <div className="mt-6 text-muted-foreground flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              {selectedTest.timeLimit} minutes
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // -------------------------------------------------------
  // TEST LIST PAGE
  // -------------------------------------------------------
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Academic Reading Practice Questions
              </h1>
            </div>

            <Badge variant="secondary" className="hidden sm:flex">
              {readingTests.length} Questions Available
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Available Tests</h2>
            <p className="text-sm text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, readingTests.length)} of {readingTests.length}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {currentTests.map((test) => (
              <Card key={test.id} className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className={getDifficultyColor(test.difficulty)}>
                          {test.difficulty}
                        </Badge>
                        {test.completed && (
                          <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                            Completed
                          </Badge>
                        )}
                      </div>

                      <CardTitle>
                        Test {test.id}: {test.title}
                      </CardTitle>

                      <CardDescription className="mt-1">
                        <div className="flex flex-wrap gap-2 mt-2">
                          {test.topics.map((topic) => (
                            <span
                              key={topic}
                              className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </CardDescription>
                    </div>

                    <Button className="gap-2" size="lg" onClick={() => setSelectedTest(test)}>
                      View Question <BookOpen className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{test.timeLimit} minutes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="gap-2 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="min-w-[40px]"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="gap-2 bg-transparent"
              >
                Next <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
