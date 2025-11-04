import {
  GraduationCap,
  Globe,
  BookOpen,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Mic,
  FileText,
  Target,
  BarChart3,
  Award,
  Zap,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { Metadata } from "next"
import Dashboard from "@/components/user/User"
import { link } from "fs"

export const metadata: Metadata = {
  title: "Test2Uni - IELTS, PTE, TOEFL Practice & Study Materials | Free Test Prep",
  description:
    "Master IELTS, PTE, TOEFL with 10,000+ practice questions, mock tests, and study materials. Free test preparation platform with AI-powered feedback. Find top universities worldwide.",
  keywords: [
    "IELTS practice",
    "PTE practice test",
    "TOEFL preparation",
    "English test prep",
    "study abroad",
    "IELTS mock test",
    "PTE study material",
    "TOEFL practice questions",
    "English proficiency test",
    "test preparation online",
    "IELTS speaking practice",
    "PTE repeat sentence",
    "TOEFL writing practice",
    "university search",
    "study materials",
    "free practice tests",
    "English language test",
    "test prep platform",
    "IELTS reading practice",
    "PTE describe image",
  ],
  openGraph: {
    title: "Test2Uni - IELTS, PTE, TOEFL Practice & Study Materials",
    description:
      "Free test preparation platform with 10,000+ practice questions for IELTS, PTE, TOEFL. AI-powered feedback, mock tests, and university search.",
    url: "https://test2uni.com",
    siteName: "Test2Uni",
    images: [
      {
        url: "https://test2uni.com/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Test2Uni - IELTS PTE TOEFL Practice Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "EGqlIIK13bo6vgrndF5kT3HDjEDWtEDpoyvbFr5yYDE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Test2Uni - IELTS, PTE, TOEFL Practice & Study Materials",
    description: "Master English proficiency tests with 10,000+ practice questions, mock tests, and AI feedback.",
    images: ["https://test2uni.com/images/banner.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
}

export default function HomePage() {
  const testPrepModules = [
    {
      name: "IELTS",
      description: "International English Language Testing System",
      modules: ["Speaking", "Writing", "Reading", "Listening"],
      questions: "3,500+",
      color: "bg-blue-500",
      link: "/ielts",
    },
    {
      name: "PTE",
      description: "Pearson Test of English Academic",
      modules: ["Speaking", "Writing", "Reading", "Listening"],
      questions: "4,200+",
      color: "bg-primary",
      link:'pte-practice'
    },
    {
      name: "TOEFL",
      description: "Test of English as a Foreign Language",
      modules: ["Speaking", "Writing", "Reading", "Listening"],
      questions: "2,800+",
      color: "bg-purple-500",
      link:"tofel-practice"
    },
  ]

  const practiceFeatures = [
    {
      icon: Mic,
      title: "Speaking Practice",
      description: "AI-powered speech recognition and feedback",
      tests: "IELTS, PTE, TOEFL",
    },
    {
      icon: FileText,
      title: "Writing Tasks",
      description: "Essay writing with automated scoring",
      tests: "IELTS, PTE, TOEFL",
    },
    {
      icon: BookOpen,
      title: "Reading Comprehension",
      description: "Timed passages with detailed explanations",
      tests: "IELTS, PTE, TOEFL",
    },
    {
      icon: Target,
      title: "Listening Practice",
      description: "Audio exercises with transcripts",
      tests: "IELTS, PTE, TOEFL",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <main>
       
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left side - Hero content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                    Free IELTS, PTE & TOEFL Practice
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    Master Your English Tests,
                    <span className="text-primary block">Achieve Your Dreams</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Prepare for IELTS, PTE, TOEFL with 10,000+ practice questions, AI-powered feedback, mock tests, and
                    study materials. Find your perfect university abroad.
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Questions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/signup">
                    <Button size="lg" className="text-base w-full sm:w-auto">
                      Start Free Practice
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/search">
                    <Button variant="outline" size="lg" className="text-base bg-transparent w-full sm:w-auto">
                      <Globe className="mr-2 h-4 w-4" />
                      Find Universities
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right side - Visual content */}
              <div className="lg:pl-8 space-y-6">
                {/* Hero Image */}
                <div className="relative">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 border border-border flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/modern-university-study.png"
                      alt="Students preparing for IELTS PTE TOEFL tests"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Real exam-like practice questions</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">AI-powered feedback & scoring</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Track progress with detailed analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Test Preparation Modules */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Complete Test Preparation Platform
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Practice for IELTS, PTE, and TOEFL with comprehensive study materials and mock tests
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {testPrepModules.map((test, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${test.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{test.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{test.description}</p>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Practice Questions</span>
                        <span className="font-semibold text-primary">{test.questions}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {test.modules.map((module, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {module}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link href={`/${test.link}`}>
                      <Button className="w-full">Start {test.name} Practice</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Comprehensive Study Materials & Practice
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to excel in your English proficiency tests
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {practiceFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {feature.tests}
                      </Badge>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Everything You Need to Succeed</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools and resources designed to help you achieve your international education goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">AI-Powered Feedback</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Get instant, detailed feedback on your speaking and writing with our advanced AI technology.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Speech recognition & pronunciation</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Grammar & vocabulary analysis</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Personalized improvement tips</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Mock Tests & Scoring</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Take full-length mock tests with real exam conditions and get accurate score predictions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Timed practice tests</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Accurate score predictions</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Detailed performance reports</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Progress Tracking</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Monitor your preparation progress with detailed analytics and personalized study recommendations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Performance analytics dashboard</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Study streaks & achievements</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Personalized study plans</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-secondary/10">
                      <Globe className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">University Database</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Explore over 1,000 universities worldwide with detailed information about programs and requirements.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>1,000+ global universities</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Advanced filtering & search</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span>Application tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Study Materials</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Access comprehensive study guides, tips, strategies, and video tutorials for all test sections.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Detailed study guides</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Video tutorials & tips</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Exam strategies & techniques</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Community Support</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Join a community of 50,000+ students preparing for their English proficiency tests.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Discussion forums</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Study groups & partners</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Expert guidance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of students who achieved their dreams with Test2Uni
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {`"Test2Uni helped me improve my IELTS score from 6.5 to 8.0! The practice questions were exactly like
                    the real exam."`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">SA</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Sarah Ahmed</div>
                      <div className="text-xs text-muted-foreground">IELTS 8.0 - University of Toronto</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {`"The PTE practice modules with AI feedback helped me score 85. The repeat sentence and describe image sections were perfect!"`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-secondary">RK</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Raj Kumar</div>
                      <div className="text-xs text-muted-foreground">PTE 85 - Stanford University</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {`"Amazing TOEFL preparation! The mock tests and progress tracking kept me motivated throughout my journey."`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">ML</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Maria Lopez</div>
                      <div className="text-xs text-muted-foreground">TOEFL 110 - University of Melbourne</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Start Your Test Preparation?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join 50,000+ students who have successfully prepared for IELTS, PTE, and TOEFL with Test2Uni. Start
                practicing for free today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" className="text-base w-full sm:w-auto">
                    Start Free Practice
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/search">
                  <Button variant="outline" size="lg" className="text-base bg-transparent w-full sm:w-auto">
                    <Globe className="mr-2 h-4 w-4" />
                    Explore Universities
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Test2Uni</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your pathway to international education success with comprehensive IELTS, PTE, and TOEFL preparation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Test Preparation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/repeat-sentence" className="hover:text-foreground">
                    IELTS Practice
                  </Link>
                </li>
                <li>
                  <Link href="/repeat-sentence" className="hover:text-foreground">
                    PTE Practice
                  </Link>
                </li>
                <li>
                  <Link href="/describe-image" className="hover:text-foreground">
                    TOEFL Practice
                  </Link>
                </li>
                <li>
                  <Link href="/analytics" className="hover:text-foreground">
                    Mock Tests
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/search" className="hover:text-foreground">
                    University Search
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Study Materials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Blog & Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Test2Uni. All rights reserved. IELTS, PTE, TOEFL practice platform for international students.
          </div>
        </div>
      </footer>
    </div>
  )
}
