"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Search,
  MapPin,
  DollarSign,
  Calendar,
  Users,
  BookmarkIcon,
  ExternalLink,
  GraduationCap,
  Award,
  Clock,
} from "lucide-react"
import Link from "next/link"

const countries = [
  "All Countries",
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
]

const studyLevels = ["All Levels", "Bachelor's", "Master's", "PhD", "Certificate", "Diploma"]

const subjects = [
  "All Subjects",
  "Computer Science",
  "Engineering",
  "Business",
  "Medicine",
  "Law",
  "Arts & Humanities",
  "Social Sciences",
  "Natural Sciences",
  "Mathematics",
]

const sampleUniversities = [
  {
    id: 1,
    name: "Stanford University",
    country: "United States",
    city: "Stanford, CA",
    ranking: 3,
    tuitionRange: [65000, 66000],
    acceptanceRate: 4.0,
    studentCount: 18446,
    establishedYear: 1885,
    description:
      "A leading research university known for its entrepreneurial character and excellence in engineering, business, and liberal arts.",
    programs: ["Computer Science", "Engineering", "Business", "Medicine"],
    applicationDeadline: "January 2, 2025",
    requirements: { gpa: 3.9, sat: [1440, 1570], toefl: 100, ielts: 7.0 },
    website: "https://www.stanford.edu",
    bookmarked: false,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Stanfordquad.jpg?width=1200",
  },
  {
    id: 2,
    name: "University of Oxford",
    country: "United Kingdom",
    city: "Oxford",
    ranking: 1,
    tuitionRange: [35000, 45000],
    acceptanceRate: 16.0,
    studentCount: 24000,
    establishedYear: 1096,
    description:
      "The oldest university in the English-speaking world, renowned for its academic excellence and historic traditions.",
    programs: ["Law", "Medicine", "Arts & Humanities", "Social Sciences"],
    applicationDeadline: "October 15, 2024",
    requirements: { gpa: 3.8, sat: [1400, 1500], toefl: 110, ielts: 7.5 },
    website: "https://www.ox.ac.uk",
    bookmarked: true,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Radcliffe%20Camera.jpg?width=1200",
  },
  {
    id: 3,
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto, ON",
    ranking: 18,
    tuitionRange: [25000, 60000],
    acceptanceRate: 43.0,
    studentCount: 102431,
    establishedYear: 1827,
    description:
      "Canada's top university, offering world-class education with a diverse international community.",
    programs: ["Engineering", "Computer Science", "Business", "Medicine"],
    applicationDeadline: "January 13, 2025",
    requirements: { gpa: 3.5, sat: [1300, 1450], toefl: 89, ielts: 6.5 },
    website: "https://www.utoronto.ca",
    bookmarked: false,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/University%20College%2C%20University%20of%20Toronto.jpg?width=1200",
  },
  {
    id: 4,
    name: "Australian National University",
    country: "Australia",
    city: "Canberra, ACT",
    ranking: 27,
    tuitionRange: [30000, 45000],
    acceptanceRate: null,
    studentCount: 17380,
    establishedYear: 1946,
    description:
      "Australia's national university, leading in research and offering exceptional programs across all disciplines.",
    programs: ["Natural Sciences", "Engineering", "Social Sciences", "Arts & Humanities"],
    applicationDeadline: "December 31, 2024",
    requirements: { gpa: 3.3, sat: [1250, 1400], toefl: 80, ielts: 6.5 },
    website: "https://www.anu.edu.au",
    bookmarked: true,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Chifley%20library%20at%20anu.JPG?width=1200",
  },
  {
    id: 5,
    name: "Technical University of Munich",
    country: "Germany",
    city: "Munich",
    ranking: 50,
    tuitionRange: [0, 500],
    acceptanceRate: 8.0,
    studentCount: 52931,
    establishedYear: 1868,
    description:
      "One of Europe's top technical universities, renowned for engineering, technology, and natural sciences.",
    programs: ["Engineering", "Computer Science", "Natural Sciences", "Mathematics"],
    applicationDeadline: "July 15, 2024",
    requirements: { gpa: 3.2, sat: [1200, 1350], toefl: 88, ielts: 6.5 },
    website: "https://www.tum.de",
    bookmarked: false,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/TUM%20Main%20Building%20New.jpg?width=1200",
  },
  {
    id: 6,
    name: "National University of Singapore",
    country: "Singapore",
    city: "Singapore",
    ranking: 11,
    tuitionRange: [20000, 30000],
    acceptanceRate: 5.0,
    studentCount: 35908,
    establishedYear: 1905,
    description:
      "Asia's leading global university, known for its innovative approach to education and research excellence.",
    programs: ["Engineering", "Computer Science", "Business", "Medicine"],
    applicationDeadline: "February 28, 2025",
    requirements: { gpa: 3.6, sat: [1350, 1500], toefl: 92, ielts: 7.0 },
    website: "https://www.nus.edu.sg",
    bookmarked: false,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/OpenSpace-NationalUniversityofSingapore-20080108.jpg?width=1200",
  },
];



function UniversityDatabase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [selectedLevel, setSelectedLevel] = useState("All Levels")
  const [selectedSubject, setSelectedSubject] = useState("All Subjects")
  const [tuitionRange, setTuitionRange] = useState([0, 70000])
  const [universities, setUniversities] = useState(sampleUniversities)
  const [selectedUniversity, setSelectedUniversity] = useState<(typeof sampleUniversities)[0] | null>(null)

  const filteredUniversities = universities.filter((university) => {
    const matchesSearch =
      university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.programs.some((program) => program.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCountry = selectedCountry === "All Countries" || university.country === selectedCountry
    const matchesSubject =
      selectedSubject === "All Subjects" || university.programs.some((program) => program === selectedSubject)
    const matchesTuition =
      university.tuitionRange[0] >= tuitionRange[0] && university.tuitionRange[1] <= tuitionRange[1]

    return matchesSearch && matchesCountry && matchesSubject && matchesTuition
  })

  const toggleBookmark = (universityId: number) => {
    setUniversities((prev) =>
      prev.map((university) =>
        university.id === universityId ? { ...university, bookmarked: !university.bookmarked } : university,
      ),
    )
  }

  const formatTuition = (range: number[]) => {
    if (range[0] === 0 && range[1] <= 1000) return "Free/Low cost"
    return `$${range[0].toLocaleString()} - $${range[1].toLocaleString()}`
  }

  

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Universities</h1>
              <p className="text-muted-foreground">Discover your perfect university abroad</p>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {filteredUniversities.length} Universities
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search universities, cities, or programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Study Level" />
              </SelectTrigger>
              <SelectContent>
                {studyLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="space-y-2">
              <label className="text-sm font-medium">Annual Tuition Range</label>
              <div className="px-3">
                <Slider
                  value={tuitionRange}
                  onValueChange={setTuitionRange}
                  max={70000}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>${tuitionRange[0].toLocaleString()}</span>
                  <span>${tuitionRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* University Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((university) => (
            <Link href={`/university/${university.id}`} key={university.id}>
            <Card
              key={university.id}
              className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border"
              onClick={() => setSelectedUniversity(university)}
            >
              <div className="relative">
                <img
                  src={university.image || "/placeholder.svg"}
                  alt={university.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleBookmark(university.id)
                  }}
                  className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <BookmarkIcon className={`h-4 w-4 ${university.bookmarked ? "fill-current text-primary" : ""}`} />
                </Button>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{university.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {university.city}, {university.country}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    #{university.ranking}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{university.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3 text-muted-foreground" />
                      <span>{formatTuition(university.tuitionRange)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-muted-foreground" />
                      <span>{university.studentCount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span>Deadline: {university.applicationDeadline}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {university.programs.slice(0, 3).map((program) => (
                      <Badge key={program} variant="secondary" className="text-xs">
                        {program}
                      </Badge>
                    ))}
                    {university.programs.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{university.programs.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No universities found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default UniversityDatabase