import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Mic, ImageIcon, FileText, Clock, Trophy, Target, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function PTEDashboard() {
  const practiceModules = [
    {
      id: "repeat-sentence",
      title: "Repeat Sentence",
      description: "Listen and repeat sentences accurately",
      icon: Mic,
      difficulty: "Medium",
      duration: "15 min",
      completed: 12,
      total: 20,
      color: "bg-primary",
    },
    {
      id: "describe-image",
      title: "Describe Image",
      description: "Describe images in detail within time limit",
      icon: ImageIcon,
      difficulty: "Hard",
      duration: "20 min",
      completed: 8,
      total: 15,
      color: "bg-secondary",
    },
    {
      id: "read-aloud",
      title: "Read Aloud",
      description: "Read text passages with proper pronunciation",
      icon: BookOpen,
      difficulty: "Easy",
      duration: "10 min",
      completed: 15,
      total: 18,
      color: "bg-accent",
    },
    {
      id: "essay-writing",
      title: "Essay Writing",
      description: "Write essays on given topics",
      icon: FileText,
      difficulty: "Hard",
      duration: "30 min",
      completed: 5,
      total: 10,
      color: "bg-chart-1",
    },
  ]

  const recentScores = [
    { module: "Repeat Sentence", score: 85, date: "2024-01-15" },
    { module: "Describe Image", score: 78, date: "2024-01-14" },
    { module: "Read Aloud", score: 92, date: "2024-01-13" },
  ]

  const overallProgress = 65

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">PTE Practice Hub</h1>
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
          <p className="text-muted-foreground text-lg">Continue your PTE preparation journey</p>
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

        {/* Practice Modules Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Practice Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceModules.map((module) => {
              const IconComponent = module.icon
              const progressPercentage = Math.round((module.completed / module.total) * 100)

              return (
                <Card key={module.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
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
                      <Link href={`/${module.id}`}>
                        <Button className="w-full" variant={progressPercentage === 100 ? "secondary" : "default"}>
                          {progressPercentage === 100 ? "Review" : "Continue"}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
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
