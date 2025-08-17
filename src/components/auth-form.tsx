"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Chrome } from "lucide-react"

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Netherlands",
  "Sweden",
  "New Zealand",
  "Singapore",
  "Other",
]

const exams = ["IELTS", "PTE", "TOEFL", "GRE", "GMAT", "SAT", "Other"]

const destinations = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Netherlands",
  "Sweden",
  "New Zealand",
  "Singapore",
  "Other",
]

interface AuthFormProps {
  onAuthSuccess?: () => void
}

export function AuthForm({ onAuthSuccess }: AuthFormProps) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    country: "",
    targetExam: "",
    targetDestination: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSignUp) {
      setShowOnboarding(true)
    } else {
      // Handle sign in
      console.log("Sign in:", formData)
      onAuthSuccess?.()
    }
  }

  const handleOnboardingComplete = () => {
    console.log("Onboarding complete:", formData)
    onAuthSuccess?.()
  }

  if (showOnboarding) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome to Test2Uni!</CardTitle>
          <CardDescription>Let's personalize your experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="country">Your Country</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, country: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetExam">Target Exam</Label>
            <Select
              value={formData.targetExam}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, targetExam: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Which exam are you preparing for?" />
              </SelectTrigger>
              <SelectContent>
                {exams.map((exam) => (
                  <SelectItem key={exam} value={exam}>
                    {exam}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetDestination">Study Destination</Label>
            <Select
              value={formData.targetDestination}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, targetDestination: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Where do you want to study?" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map((destination) => (
                  <SelectItem key={destination} value={destination}>
                    {destination}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleOnboardingComplete}
            className="w-full"
            disabled={!formData.country || !formData.targetExam || !formData.targetDestination}
          >
            Complete Setup
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{isSignUp ? "Create Account" : "Welcome Back"}</CardTitle>
        <CardDescription>
          {isSignUp ? "Start your journey to international education" : "Sign in to continue your preparation"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={isSignUp ? "signup" : "signin"} className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin" onClick={() => setIsSignUp(false)}>
              Sign In
            </TabsTrigger>
            <TabsTrigger value="signup" onClick={() => setIsSignUp(true)}>
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full bg-transparent">
              <Chrome className="mr-2 h-4 w-4" />
              Google
            </Button>
            <Button variant="outline" className="w-full bg-transparent">
              <Phone className="mr-2 h-4 w-4" />
              Phone
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
