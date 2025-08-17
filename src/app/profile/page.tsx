"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, Edit, LogOut, Award, Target, Globe, BookOpen } from "lucide-react"

const userProfile = {
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  country: "India",
  targetExam: "IELTS",
  targetDestination: "Canada",
  studyGoal: "Master's in Computer Science",
  joinDate: "January 2024",
  avatar: "/placeholder.svg?height=80&width=80",
}

const achievements = [
  { name: "Week Warrior", description: "7-day study streak", icon: Award, earned: true },
  { name: "Resource Master", description: "Completed 20+ resources", icon: BookOpen, earned: true },
  { name: "Progress Pro", description: "80% overall progress", icon: Target, earned: false },
  { name: "University Hunter", description: "Saved 10+ universities", icon: Globe, earned: false },
]

export default function ProfilePage() {


  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Profile</h1>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-6">
        {/* Profile Info */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                <AvatarFallback className="text-lg">
                  {userProfile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-xl">{userProfile.name}</CardTitle>
                <CardDescription>{userProfile.email}</CardDescription>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary">{userProfile.targetExam}</Badge>
                  <Badge variant="outline">{userProfile.targetDestination}</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Study Goals */}
        <Card>
          <CardHeader>
            <CardTitle>Study Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Current Location</label>
                <p className="font-semibold">{userProfile.country}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Target Exam</label>
                <p className="font-semibold">{userProfile.targetExam}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Study Destination</label>
                <p className="font-semibold">{userProfile.targetDestination}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Study Goal</label>
                <p className="font-semibold">{userProfile.studyGoal}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Your learning milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-lg border ${
                      achievement.earned ? "bg-primary/5 border-primary/20" : "bg-muted/50 border-border opacity-60"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${achievement.earned ? "bg-primary/10" : "bg-muted"}`}>
                      <Icon className={`h-5 w-5 ${achievement.earned ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{achievement.name}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Account Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Settings className="h-4 w-4 mr-2" />
              Account Settings
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
            <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 bg-transparent">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">Member since {userProfile.joinDate}</div>
      </main>
    </div>
  )
}
