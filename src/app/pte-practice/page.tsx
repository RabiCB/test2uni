import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Mic,
  ImageIcon,
  FileText,
  Clock,
  Trophy,
  Target,
  BarChart3,
  Headphones,
  MessageSquare,
  ListOrdered,
  CheckSquare,
  Volume2,
  PenTool,
  BookMarked,
  Shuffle,
  Home,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PTE Practice Dashboard | Complete PTE Academic Test Preparation",
  description:
    "Access comprehensive PTE Academic practice modules including Speaking, Writing, Reading, and Listening sections. Practice with AI-powered feedback and track your progress.",
  keywords: [
    "PTE practice dashboard",
    "PTE Academic preparation",
    "PTE speaking practice",
    "PTE writing practice",
    "PTE reading practice",
    "PTE listening practice",
    "PTE mock test",
    "PTE test preparation",
  ],
  openGraph: {
    title: "PTE Practice Dashboard | Complete Test Preparation",
    description: "Master all PTE Academic sections with our comprehensive practice dashboard",
    type: "website",
  },
}

export default function PTEDashboard() {
  const speakingModules = [
    {
      id: "read-aloud",
      title: "Read Aloud",
      description: "Read text passages with proper pronunciation and fluency",
      icon: BookOpen,
      difficulty: "Medium",
      duration: "30-40 sec",
      completed: 15,
      total: 25,
      color: "bg-primary",
      available: true,
    },
    {
      id: "repeat-sentence",
      title: "Repeat Sentence",
      description: "Listen and repeat sentences accurately",
      icon: Mic,
      difficulty: "Medium",
      duration: "15 sec",
      completed: 12,
      total: 20,
      color: "bg-primary",
      available: false,
    },
    {
      id: "describe-image",
      title: "Describe Image",
      description: "Describe images in detail within time limit",
      icon: ImageIcon,
      difficulty: "Hard",
      duration: "40 sec",
      completed: 8,
      total: 15,
      color: "bg-secondary",
      available: false,
    },
    {
      id: "retell-lecture",
      title: "Re-tell Lecture",
      description: "Listen to a lecture and retell it in your own words",
      icon: MessageSquare,
      difficulty: "Hard",
      duration: "40 sec",
      completed: 5,
      total: 12,
      color: "bg-accent",
      available: false,
    },
    {
      id: "answer-short-question",
      title: "Answer Short Question",
      description: "Answer questions with one or a few words",
      icon: MessageSquare,
      difficulty: "Easy",
      duration: "10 sec",
      completed: 20,
      total: 30,
      color: "bg-chart-1",
      available: false,
    },
  ]

  const writingModules = [
    {
      id: "summarize-written-text",
      title: "Summarize Written Text",
      description: "Write a one-sentence summary of a passage",
      icon: FileText,
      difficulty: "Medium",
      duration: "10 min",
      completed: 6,
      total: 10,
      color: "bg-primary",
      available: false,
    },
    {
      id: "essay-writing",
      title: "Write Essay",
      description: "Write a 200-300 word essay on a given topic",
      icon: PenTool,
      difficulty: "Hard",
      duration: "20 min",
      completed: 5,
      total: 10,
      color: "bg-secondary",
      available: false,
    },
  ]

  const readingModules = [
    {
      id: "reading-multiple-choice-single",
      title: "Multiple Choice (Single)",
      description: "Choose one correct answer from multiple options",
      icon: CheckSquare,
      difficulty: "Medium",
      duration: "2 min",
      completed: 10,
      total: 15,
      color: "bg-primary",
      available: false,
    },
    {
      id: "reading-multiple-choice-multiple",
      title: "Multiple Choice (Multiple)",
      description: "Choose all correct answers from multiple options",
      icon: CheckSquare,
      difficulty: "Hard",
      duration: "2 min",
      completed: 8,
      total: 15,
      color: "bg-secondary",
      available: false,
    },
    {
      id: "reorder-paragraphs",
      title: "Re-order Paragraphs",
      description: "Arrange text boxes in the correct order",
      icon: Shuffle,
      difficulty: "Hard",
      duration: "2 min",
      completed: 7,
      total: 12,
      color: "bg-accent",
      available: false,
    },
    {
      id: "reading-fill-blanks",
      title: "Fill in the Blanks",
      description: "Drag words to fill in the missing words in a text",
      icon: BookMarked,
      difficulty: "Medium",
      duration: "2 min",
      completed: 12,
      total: 18,
      color: "bg-chart-1",
      available: false,
    },
  ]

  const listeningModules = [
    {
      id: "summarize-spoken-text",
      title: "Summarize Spoken Text",
      description: "Write a summary of a lecture or interview",
      icon: Headphones,
      difficulty: "Hard",
      duration: "10 min",
      completed: 4,
      total: 8,
      color: "bg-primary",
      available: false,
    },
    {
      id: "listening-multiple-choice-multiple",
      title: "Multiple Choice (Multiple)",
      description: "Choose all correct answers after listening",
      icon: CheckSquare,
      difficulty: "Medium",
      duration: "2 min",
      completed: 9,
      total: 15,
      color: "bg-secondary",
      available: false,
    },
    {
      id: "listening-fill-blanks",
      title: "Fill in the Blanks",
      description: "Type missing words while listening",
      icon: BookMarked,
      difficulty: "Medium",
      duration: "2 min",
      completed: 11,
      total: 18,
      color: "bg-accent",
      available: false,
    },
    {
      id: "highlight-correct-summary",
      title: "Highlight Correct Summary",
      description: "Choose the paragraph that best summarizes the recording",
      icon: ListOrdered,
      difficulty: "Medium",
      duration: "2 min",
      completed: 8,
      total: 12,
      color: "bg-chart-1",
      available: false,
    },
    {
      id: "select-missing-word",
      title: "Select Missing Word",
      description: "Choose the word that completes the recording",
      icon: Volume2,
      difficulty: "Easy",
      duration: "1 min",
      completed: 14,
      total: 20,
      color: "bg-chart-2",
      available: false,
    },
    {
      id: "highlight-incorrect-words",
      title: "Highlight Incorrect Words",
      description: "Identify words that differ from the recording",
      icon: BookMarked,
      difficulty: "Medium",
      duration: "2 min",
      completed: 10,
      total: 15,
      color: "bg-chart-3",
      available: false,
    },
    {
      id: "write-from-dictation",
      title: "Write from Dictation",
      description: "Type the sentence you hear",
      icon: PenTool,
      difficulty: "Medium",
      duration: "1 min",
      completed: 16,
      total: 25,
      color: "bg-chart-4",
      available: false,
    },
  ]

  const allModules = [...speakingModules, ...writingModules, ...readingModules, ...listeningModules]
  const totalCompleted = allModules.reduce((sum, module) => sum + module.completed, 0)
  const totalExercises = allModules.reduce((sum, module) => sum + module.total, 0)
  const overallProgress = Math.round((totalCompleted / totalExercises) * 100)

  const recentScores = [
    { module: "Repeat Sentence", score: 85, date: "2024-01-15" },
    { module: "Describe Image", score: 78, date: "2024-01-14" },
    { module: "Read Aloud", score: 92, date: "2024-01-13" },
  ]

  const renderModuleCard = (module: (typeof speakingModules)[0]) => {
    const IconComponent = module.icon
    const progressPercentage = Math.round((module.completed / module.total) * 100)

    return (
      <Card
        key={module.id}
        className={`hover:shadow-lg transition-shadow ${!module.available ? "opacity-60" : "cursor-pointer"} group`}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div
              className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center ${module.available ? "group-hover:scale-110" : ""} transition-transform`}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col items-end gap-1">
              <Badge
                variant={
                  module.difficulty === "Easy"
                    ? "secondary"
                    : module.difficulty === "Medium"
                      ? "default"
                      : "destructive"
                }
              >
                {module.difficulty}
              </Badge>
              {!module.available && (
                <Badge variant="outline" className="text-xs">
                  Coming Soon
                </Badge>
              )}
            </div>
          </div>
          <CardTitle className="text-lg">{module.title}</CardTitle>
          <CardDescription className="text-sm">{module.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              {module.duration}
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>
                  {module.completed}/{module.total}
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
            {module.available ? (
              <Link href={`/pte/${module.id}`}>
                <Button className="w-full" variant={progressPercentage === 100 ? "secondary" : "default"}>
                  {progressPercentage === 100 ? "Review" : "Continue"}
                </Button>
              </Link>
            ) : (
              <Button className="w-full bg-transparent" variant="outline" disabled>
                Coming Soon
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold text-foreground">PTE Practice Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="gap-1">
                <Trophy className="w-3 h-3" />
                Level 3
              </Badge>
              <div className="text-sm text-muted-foreground">Overall Progress: {overallProgress}%</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back!</h2>
          <p className="text-muted-foreground text-lg">Continue your PTE Academic preparation journey</p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Your Progress
            </CardTitle>
            <CardDescription>Track your improvement across all modules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span>{overallProgress}%</span>
                </div>
                <Progress value={overallProgress} className="h-2" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {recentScores.map((score, index) => (
                  <div key={index} className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">{score.score}</div>
                    <div className="text-sm text-muted-foreground">{score.module}</div>
                    <div className="text-xs text-muted-foreground">{score.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Speaking Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Speaking</h3>
              <p className="text-sm text-muted-foreground">Practice your speaking skills with AI feedback</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {speakingModules.map(renderModuleCard)}
          </div>
        </div>

        {/* Writing Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <PenTool className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Writing</h3>
              <p className="text-sm text-muted-foreground">Improve your writing with structured practice</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{writingModules.map(renderModuleCard)}</div>
        </div>

        {/* Reading Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Reading</h3>
              <p className="text-sm text-muted-foreground">Enhance your reading comprehension skills</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {readingModules.map(renderModuleCard)}
          </div>
        </div>

        {/* Listening Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-chart-1 rounded-lg flex items-center justify-center">
              <Headphones className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Listening</h3>
              <p className="text-sm text-muted-foreground">Sharpen your listening and comprehension abilities</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {listeningModules.map(renderModuleCard)}
          </div>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Jump into practice or review your performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Mic className="w-4 h-4" />
                Start Speaking Practice
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <FileText className="w-4 h-4" />
                Take Mock Test
              </Button>
              <Link href="/analytics">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <BarChart3 className="w-4 h-4" />
                  View Detailed Analytics
                </Button>
              </Link>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Trophy className="w-4 h-4" />
                Achievement Gallery
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
