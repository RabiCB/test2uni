"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Video, FileText, Search, Clock, Star, Play, Download, BookmarkIcon } from "lucide-react"

const examCategories = [
  { id: "ielts", name: "IELTS", color: "bg-primary" },
  { id: "pte", name: "PTE", color: "bg-secondary" },
  { id: "toefl", name: "TOEFL", color: "bg-accent" },
  { id: "gre", name: "GRE", color: "bg-chart-1" },
  { id: "gmat", name: "GMAT", color: "bg-chart-2" },
]

const resourceTypes = [
  { id: "all", name: "All Resources", icon: BookOpen },
  { id: "tips", name: "Tips & Strategies", icon: Star },
  { id: "practice", name: "Practice Questions", icon: FileText },
  { id: "vocabulary", name: "Vocabulary", icon: BookOpen },
  { id: "videos", name: "Video Tutorials", icon: Video },
]

const sampleResources = [
  {
    id: 1,
    title: "IELTS Writing Task 1: Essential Tips for Academic Module",
    description: "Master the art of describing charts, graphs, and diagrams with proven strategies.",
    type: "tips",
    exam: "ielts",
    duration: "15 min read",
    difficulty: "Intermediate",
    bookmarked: false,
    rating: 4.8,
    downloads: 1250,
  },
  {
    id: 2,
    title: "PTE Speaking: Repeat Sentence Practice Set",
    description: "50 practice questions with audio recordings to improve your repeat sentence skills.",
    type: "practice",
    exam: "pte",
    duration: "45 min",
    difficulty: "Beginner",
    bookmarked: true,
    rating: 4.6,
    downloads: 890,
  },
  {
    id: 3,
    title: "TOEFL Vocabulary Builder: Academic Word List",
    description: "Essential academic vocabulary with definitions, examples, and pronunciation guides.",
    type: "vocabulary",
    exam: "toefl",
    duration: "30 min study",
    difficulty: "Advanced",
    bookmarked: false,
    rating: 4.9,
    downloads: 2100,
  },
  {
    id: 4,
    title: "GRE Quantitative Reasoning: Problem Solving Strategies",
    description: "Video tutorial covering key mathematical concepts and problem-solving techniques.",
    type: "videos",
    exam: "gre",
    duration: "25 min watch",
    difficulty: "Intermediate",
    bookmarked: true,
    rating: 4.7,
    downloads: 1680,
  },
  {
    id: 5,
    title: "GMAT Critical Reasoning: Question Types and Approaches",
    description: "Comprehensive guide to tackling different types of critical reasoning questions.",
    type: "tips",
    exam: "gmat",
    duration: "20 min read",
    difficulty: "Advanced",
    bookmarked: false,
    rating: 4.5,
    downloads: 950,
  },
  {
    id: 6,
    title: "IELTS Listening: Note-taking Techniques",
    description: "Learn effective note-taking strategies for the IELTS listening test.",
    type: "videos",
    exam: "ielts",
    duration: "18 min watch",
    difficulty: "Beginner",
    bookmarked: false,
    rating: 4.4,
    downloads: 1420,
  },
]

function ExamPrepDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedExam, setSelectedExam] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [resources, setResources] = useState(sampleResources)

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesExam = selectedExam === "all" || resource.exam === selectedExam
    const matchesType = selectedType === "all" || resource.type === selectedType

    return matchesSearch && matchesExam && matchesType
  })

  const toggleBookmark = (resourceId: number) => {
    setResources((prev) =>
      prev.map((resource) =>
        resource.id === resourceId ? { ...resource, bookmarked: !resource.bookmarked } : resource,
      ),
    )
  }

  const getResourceIcon = (type: string) => {
    const resourceType = resourceTypes.find((rt) => rt.id === type)
    return resourceType ? resourceType.icon : BookOpen
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Exam Preparation</h1>
              <p className="text-muted-foreground">Master your test with our comprehensive resources</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {filteredResources.length} Resources
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources, tips, practice questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedExam} onValueChange={setSelectedExam}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Exam" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Exams</SelectItem>
                  {examCategories.map((exam) => (
                    <SelectItem key={exam.id} value={exam.id}>
                      {exam.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {resourceTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Exam Category Pills */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedExam === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedExam("all")}
              className="rounded-full"
            >
              All Exams
            </Button>
            {examCategories.map((exam) => (
              <Button
                key={exam.id}
                variant={selectedExam === exam.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedExam(exam.id)}
                className="rounded-full"
              >
                {exam.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const ResourceIcon = getResourceIcon(resource.type)
            const examCategory = examCategories.find((cat) => cat.id === resource.exam)

            return (
              <Card key={resource.id} className="group hover:shadow-lg transition-all duration-200 border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg ${examCategory?.color || "bg-muted"} text-white`}>
                        <ResourceIcon className="h-4 w-4" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {examCategory?.name}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleBookmark(resource.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <BookmarkIcon className={`h-4 w-4 ${resource.bookmarked ? "fill-current text-primary" : ""}`} />
                    </Button>
                  </div>
                  <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {resource.duration}
                      </div>
                      <Badge className={getDifficultyColor(resource.difficulty)} variant="secondary">
                        {resource.difficulty}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          <span>{resource.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          <span>{resource.downloads}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        {resource.type === "videos" ? (
                          <>
                            <Play className="h-3 w-3 mr-1" />
                            Watch
                          </>
                        ) : (
                          <>
                            <BookOpen className="h-3 w-3 mr-1" />
                            Study
                          </>
                        )}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No resources found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>
    </div>
  )
}


export default ExamPrepDashboard;