"use client"

import { useState, useEffect, Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, BookOpen, Users, Trophy, Clock, MapPin, GraduationCap } from "lucide-react"
import { hitServerApi } from "@/lib/useServerApi"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { University } from "@/lib/type"

interface PageProps {
  searchParams?: {
    q?: string
    category?: string
    page?: string
  }
}

// Mock data for search results
const mockResults = {
  courses: [
    {
      id: 1,
      title: "PTE Speaking Fundamentals",
      description: "Master the basics of PTE speaking tasks with comprehensive practice modules",
      category: "Speaking",
      difficulty: "Beginner",
      duration: "2 hours",
      students: 1250,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Advanced Describe Image Techniques",
      description: "Advanced strategies for describing complex images in PTE Academic",
      category: "Speaking",
      difficulty: "Advanced",
      duration: "1.5 hours",
      students: 890,
      rating: 4.9,
    },
    {
      id: 3,
      title: "Repeat Sentence Mastery",
      description: "Perfect your repeat sentence skills with AI-powered feedback",
      category: "Speaking",
      difficulty: "Intermediate",
      duration: "3 hours",
      students: 2100,
      rating: 4.7,
    },
  ],
  practice: [
    {
      id: 4,
      title: "Daily Speaking Challenge",
      description: "30-day speaking improvement program with daily exercises",
      category: "Practice",
      type: "Challenge",
      participants: 5600,
      completion: 78,
    },
    {
      id: 5,
      title: "Mock Test Series",
      description: "Full-length PTE practice tests with detailed scoring",
      category: "Practice",
      type: "Test",
      participants: 3200,
      completion: 65,
    },
  ],
  resources: [
    {
      id: 6,
      title: "PTE Scoring Guide",
      description: "Comprehensive guide to understanding PTE Academic scoring",
      category: "Resource",
      type: "Guide",
      downloads: 12500,
    },
    {
      id: 7,
      title: "Common Mistakes to Avoid",
      description: "Top 20 mistakes students make in PTE and how to avoid them",
      category: "Resource",
      type: "Article",
      downloads: 8900,
    },
  ],
}

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredResults, setFilteredResults] = useState(mockResults)
  const [universities, setUniversities] = useState<University[]>([])
  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true)

  const params = useSearchParams()
  const q = params.get("q")
  const category = params.get("category")

  useEffect(() => {
    if (q) {
      setSearchQuery(q)
    }
    if (category) {
      setSelectedCategory(category)
    }
    setInitialLoading(false)
  }, [params])

  useEffect(() => {
    if (!searchQuery) {
      setUniversities([])
      return
    }

    const timer = setTimeout(async () => {
      setLoading(true)
      try {
        const data = await hitServerApi(`/api/universities/search?q=${searchQuery}`)
        setUniversities(data?.universities || [])
      } catch (error) {
        console.error("Error fetching universities:", error)
        setUniversities([])
      } finally {
        setLoading(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  useEffect(() => {
    const filtered = {
      courses: mockResults.courses.filter(
        (item) =>
          (selectedCategory === "all" || selectedCategory === "courses") &&
          (searchQuery === "" ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())),
      ),
      practice: mockResults.practice.filter(
        (item) =>
          (selectedCategory === "all" || selectedCategory === "practice") &&
          (searchQuery === "" ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())),
      ),
      resources: mockResults.resources.filter(
        (item) =>
          (selectedCategory === "all" || selectedCategory === "resources") &&
          (searchQuery === "" ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())),
      ),
    }
    setFilteredResults(filtered)
  }, [searchQuery, selectedCategory])

  const categories = [
    {
      id: "all",
      label: "All Results",
      count:
        mockResults.courses.length + mockResults.practice.length + mockResults.resources.length + universities.length,
    },
    { id: "universities", label: "Universities", count: universities.length },
    { id: "courses", label: "Courses", count: mockResults.courses.length },
    { id: "practice", label: "Practice", count: mockResults.practice.length },
    { id: "resources", label: "Resources", count: mockResults.resources.length },
  ]

  const totalResults =
    filteredResults.courses.length +
    filteredResults.practice.length +
    filteredResults.resources.length +
    (selectedCategory === "all" || selectedCategory === "universities" ? universities.length : 0)

  const SkeletonCard = () => (
    <Card className="animate-pulse">
      <CardContent className="p-6">
        <div className="h-6 bg-muted rounded mb-3"></div>
        <div className="h-4 bg-muted rounded mb-2"></div>
        <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
        <div className="flex gap-4 mb-4">
          <div className="h-4 bg-muted rounded w-20"></div>
          <div className="h-4 bg-muted rounded w-24"></div>
          <div className="h-4 bg-muted rounded w-16"></div>
        </div>
        <div className="h-10 bg-muted rounded w-32"></div>
      </CardContent>
    </Card>
  )

  if (initialLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="h-8 bg-muted rounded w-96 mb-2 animate-pulse"></div>
            <div className="h-4 bg-muted rounded w-full max-w-2xl animate-pulse"></div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="h-12 bg-muted rounded animate-pulse"></div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <div className="h-6 bg-muted rounded w-24 animate-pulse"></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-10 bg-muted rounded animate-pulse"></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Search PTE Resources & Universities</h1>
          <p className="text-muted-foreground">
            Find courses, practice materials, resources, and universities to improve your PTE score
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for universities, courses, practice tests, or resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
              {loading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "ghost"}
                        className="w-full justify-between"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <span>{category.label}</span>
                        <Badge variant="secondary">{category.count}</Badge>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-muted-foreground">
                {totalResults} results found {searchQuery && `for "${searchQuery}"`}
              </p>
            </div>

            <div className="space-y-8">
              {(selectedCategory === "all" || selectedCategory === "universities") && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Universities ({loading ? "..." : universities.length})
                  </h2>
                  {loading ? (
                    <div className="grid gap-4">
                      {[1, 2, 3].map((i) => (
                        <SkeletonCard key={i} />
                      ))}
                    </div>
                  ) : universities.length > 0 ? (
                    <div className="grid gap-4">
                      {universities.map((uni: University, index) => (
                        <Link key={index} href={`/university/${uni.slug}`} passHref>
                          <Card key={`${uni.name}-${index}`} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                              <h3 className="text-lg font-semibold text-foreground mb-3">{uni.name}</h3>
                              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                                <p className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 flex-shrink-0" />
                                  {uni.city}, {uni.country}
                                </p>
                                <p className="flex items-center gap-2">
                                  <Users className="w-4 h-4 flex-shrink-0" />
                                  {uni.studentCount.toLocaleString()} students
                                </p>
                                <p className="flex items-center gap-2">
                                  <BookOpen className="w-4 h-4 flex-shrink-0" />
                                  {uni.programs.length} programs available
                                </p>
                              </div>
                              <Button className="bg-primary hover:bg-primary/90">View University</Button>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  ) : searchQuery && !loading ? (
                    <Card>
                      <CardContent className="p-6 text-center text-muted-foreground">
                        No universities found for "{searchQuery}"
                      </CardContent>
                    </Card>
                  ) : null}
                </div>
              )}

              {/* Courses Section */}
              {filteredResults.courses.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Courses ({filteredResults.courses.length})
                  </h2>
                  <div className="grid gap-4">
                    {filteredResults.courses.map((course) => (
                      <Card key={course.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                            <Badge variant="outline">{course.difficulty}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">{course.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {course.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {course.students.toLocaleString()} students
                            </div>
                            <div className="flex items-center gap-1">
                              <Trophy className="h-4 w-4" />
                              {course.rating}/5
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button className="bg-primary hover:bg-primary/90">Start Course</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {totalResults === 0 && !loading && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search terms or filters to find what you're looking for.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MainSearchPage = () => {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <SearchPage />
    </Suspense>
  )
}

export default MainSearchPage
