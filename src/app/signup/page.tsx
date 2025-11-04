"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Target, Mail, Lock, User } from "lucide-react"
import Link from "next/link"


export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [userId, setUserId] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Signup form submit
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
      headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong")
      } else {
        setUserId(data.userId)
        setOtpSent(true)
      }
    } catch (err) {
      setError("Server error")
    } finally {
      setLoading(false)
    }
  }

  // OTP verification submit
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!otp) return setError("Enter OTP")

    setLoading(true)
    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      })

      const data = await res.json()

      if (!res.ok) setError(data.error || "OTP verification failed")
      else alert("Account verified! You can now login.")
    } catch (err) {
      setError("Server error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
            <Target className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Create your account</h1>
          <p className="text-muted-foreground">Start your PTE preparation journey today</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign up for free</CardTitle>
            <CardDescription>
              {otpSent
                ? "Enter the OTP sent to your email"
                : "Get started with your personalized learning experience"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            {!otpSent ? (
              <form className="space-y-4" onSubmit={handleSignup}>
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-foreground">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a strong password"
                      className="pl-10"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label htmlFor="confirm-password" className="text-sm font-medium text-foreground">
                    Confirm password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Re-enter your password"
                      className="pl-10"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Creating account..." : "Create account"}
                </Button>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={handleVerifyOtp}>
                <div className="space-y-2">
                  <label htmlFor="otp" className="text-sm font-medium text-foreground">
                    OTP
                  </label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter the OTP"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Verifying..." : "Verify OTP"}
                </Button>
              </form>
            )}

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link href="/login" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
