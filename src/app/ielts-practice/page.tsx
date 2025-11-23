"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Headphones, Mic, PenTool, Target } from "lucide-react"
import Link from "next/link"


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



  
function Page() {

  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-balance">IELTS Practice Dashboard</h1>
            <p className="text-muted-foreground mt-2">Track your progress and improve your skills</p>
          </div>
        </div>

        {/* Practice Modules */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Available Practice Modules</CardTitle>
            <CardDescription className="text-muted-foreground">Choose a module to start practicing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Academic Reading", count: 50, icon: BookOpen,link:"/ielts/academic-reading" },
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

                    <Link  key={index} href={module.link || "#"} >
                  <div
                    
                    className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer group"
                  >
                    <Icon className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-card-foreground">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">{module.count} exercises</p>
                  </div>
                  </Link>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Page