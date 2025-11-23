import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Award, Globe, GraduationCap, FileText, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const exams = [
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    icon: Globe,
    description: "Most widely recognized English proficiency test for education and immigration",
    modules: ["Listening", "Reading", "Writing", "Speaking"],
    duration: "2h 45m",
    score: "Band 0-9",
    color: "from-blue-500 to-blue-600",
    available: true,
    href: "/",
  },
  {
    name: "PTE",
    fullName: "Pearson Test of English",
    icon: GraduationCap,
    description: "Computer-based English test for study abroad and immigration",
    modules: ["Speaking & Writing", "Reading", "Listening"],
    duration: "2h",
    score: "10-90",
    color: "from-purple-500 to-purple-600",
    available: true,
    href: "/read-aloud",
  },
  {
    name: "TOEFL",
    fullName: "Test of English as a Foreign Language",
    icon: BookOpen,
    description: "American English test widely accepted by universities worldwide",
    modules: ["Reading", "Listening", "Speaking", "Writing"],
    duration: "3h",
    score: "0-120",
    color: "from-green-500 to-green-600",
    available: false,
    href: null,
  },
  {
    name: "Duolingo",
    fullName: "Duolingo English Test",
    icon: Award,
    description: "Quick, affordable online English test gaining university acceptance",
    modules: ["Literacy", "Comprehension", "Conversation", "Production"],
    duration: "1h",
    score: "10-160",
    color: "from-emerald-500 to-emerald-600",
    available: false,
    href: null,
  },
  {
    name: "Cambridge",
    fullName: "Cambridge English Qualifications",
    icon: FileText,
    description: "Suite of exams including FCE, CAE, and CPE for different proficiency levels",
    modules: ["Reading & Use of English", "Writing", "Listening", "Speaking"],
    duration: "Varies",
    score: "Grade A-C",
    color: "from-orange-500 to-orange-600",
    available: false,
    href: null,
  },
  {
    name: "OET",
    fullName: "Occupational English Test",
    icon: CheckCircle2,
    description: "English test for healthcare professionals seeking registration abroad",
    modules: ["Listening", "Reading", "Writing", "Speaking"],
    duration: "3h",
    score: "Grade A-E",
    color: "from-red-500 to-red-600",
    available: false,
    href: null,
  },
]

export default function ExamsPage() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Choose Your Exam</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Select from our comprehensive collection of English proficiency tests and start your practice journey
          </p>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => {
            const Icon = exam.icon
            const CardWrapper = exam.available && exam.href ? Link : "div"
            const cardProps = exam.available && exam.href ? { href: exam.href } : {}

            return (
              <Card  key={exam.name} {...cardProps}>
                <Card
                  className={`border-border bg-card h-full transition-all ${
                    exam.available
                      ? "hover:border-primary/50 hover:shadow-lg cursor-pointer"
                      : "opacity-60 cursor-not-allowed"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${exam.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      {exam.available ? (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                          Available
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-2xl text-card-foreground">{exam.name}</CardTitle>
                    <CardDescription className="text-sm font-medium text-muted-foreground">
                      {exam.fullName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{exam.description}</p>

                    <div className="space-y-3 pt-3 border-t border-border">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium text-card-foreground">{exam.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Score Range:</span>
                        <span className="font-medium text-card-foreground">{exam.score}</span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-sm text-muted-foreground">Modules:</span>
                        <div className="flex flex-wrap gap-2">
                          {exam.modules.map((module) => (
                            <span
                              key={module}
                              className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                            >
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Card>
            )
          })}
        </div>

        {/* Info Section */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-card-foreground">Why Practice with Us?</CardTitle>
            <CardDescription className="text-muted-foreground">
              Comprehensive test preparation at your fingertips
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Authentic Practice</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Real exam-style questions and formats to prepare you for test day
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Track Progress</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Monitor your improvement with detailed analytics and score tracking
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Expert Content</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Curated by test prep experts to match official exam standards
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
