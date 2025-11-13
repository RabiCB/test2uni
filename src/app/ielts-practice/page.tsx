"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Headphones, Mic, PenTool, TrendingUp, Clock, Target, Award } from "lucide-react"
import { hitServerApi } from "@/lib/useServerApi"
import { useQuery } from "@tanstack/react-query"



const skillsData = [
  {
    name: "Listening",
    icon: Headphones,
    progress: 75,
    score: 7.5,
    testsCompleted: 12,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Reading",
    icon: BookOpen,
    progress: 82,
    score: 8.0,
    testsCompleted: 15,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Writing",
    icon: PenTool,
    progress: 68,
    score: 7.0,
    testsCompleted: 8,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Speaking",
    icon: Mic,
    progress: 71,
    score: 7.5,
    testsCompleted: 10,
    color: "from-orange-500 to-orange-600",
  },
]


const recentActivity = [
  { test: "Reading Practice Test 15", score: 8.5, date: "2 hours ago" },
  { test: "Listening Mock Exam", score: 7.5, date: "1 day ago" },
  { test: "Speaking Task 2", score: 7.0, date: "2 days ago" },
  { test: "Writing Task 1", score: 7.5, date: "3 days ago" },
]



  
export default function IELTSDashboard() {

  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-balance">IELTS Practice Dashboard</h1>
            <p className="text-muted-foreground mt-2">Track your progress and improve your skills</p>
          </div>
          {/* <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start New Test
          </Button> */}
        </div>

        {/* Stats Overview */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Total Practice Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">48.5 hrs</div>
              <p className="text-xs text-muted-foreground mt-1">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Tests Completed</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">45</div>
              <p className="text-xs text-muted-foreground mt-1">Across all sections</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-card-foreground">Average Score</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-card-foreground">7.5</div>
              <p className="text-xs text-muted-foreground mt-1">Target: 8.0</p>
            </CardContent>
          </Card>
        </div> */}

        {/* Skills Progress */}
        {/* <div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Skills Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.map((skill) => {
              const Icon = skill.icon
              return (
                <Card key={skill.name} className="border-border bg-card hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-card-foreground">{skill.score}</span>
                    </div>
                    <CardTitle className="text-card-foreground">{skill.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {skill.testsCompleted} tests completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-card-foreground font-medium">{skill.progress}%</span>
                      </div>
                      <Progress value={skill.progress} className="h-2" />
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      Practice Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div> */}

   

        {/* Practice Modules */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Available Practice Modules</CardTitle>
            <CardDescription className="text-muted-foreground">Choose a module to start practicing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Academic Reading", count: 50, icon: BookOpen },
                { title: "General Reading", count: 45, icon: BookOpen },
                { title: "Task 1 Writing", count: 30, icon: PenTool },
                { title: "Task 2 Writing", count: 35, icon: PenTool },
                { title: "Part 1 Speaking", count: 40, icon: Mic },
                { title: "Part 2 Speaking", count: 38, icon: Mic },
                { title: "Listening Practice", count: 60, icon: Headphones },
                { title: "Mock Exams", count: 20, icon: Target },
              ].map((module, index) => {
                const Icon = module.icon
                return (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer group"
                  >
                    <Icon className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-card-foreground">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.count} exercises</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
