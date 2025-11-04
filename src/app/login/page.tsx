"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Target, Mail, Lock } from "lucide-react"
import Link from "next/link"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import type { Metadata } from "next"


export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Login failed")
      } else {
        // Save token in cookie
        Cookies.set("token", data.token, { expires: 7 }) // expires in 7 days
        router.push("/") // redirect to protected page
      }
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to continue your PTE preparation</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>Enter your credentials to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <form className="space-y-4" onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="you@example.com" className="pl-10" required
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-foreground">Password</label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">Forgot password?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="Enter your password" className="pl-10" required
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-foreground">Remember me for 30 days</label>
              </div>
             
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
              </Button>
             \
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link href="/signup" className="text-primary font-medium hover:underline">Sign up for free</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
