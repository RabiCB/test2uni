"use client"


import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card'
import { MapPin, Award, Users, BookmarkIcon,  Clock, ExternalLink, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { use } from 'react'

const Page = ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
    
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



const router=useRouter()

 const { slug } = use(params)

const selectedUniversity = sampleUniversities[Number(slug) - 1] || sampleUniversities[0]



  return (
  
  
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div >
            
                <Button  onClick={()=>{
                    router.back()
                }} variant="ghost" className="mb-2">
              ← Back to Universities
            
            </Button>
        
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">{selectedUniversity.name}</h1>
                <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {selectedUniversity.city}, {selectedUniversity.country}
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    World Ranking #{selectedUniversity.ranking}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {selectedUniversity.studentCount.toLocaleString()} students
                  </div>
                </div>
              </div>
              <Button
                variant={selectedUniversity.bookmarked ? "default" : "outline"}
               
              >
                <BookmarkIcon className={`h-4 w-4 mr-2 ${selectedUniversity.bookmarked ? "fill-current" : ""}`} />
                {selectedUniversity.bookmarked ? "Saved" : "Save"}
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <img
                src={selectedUniversity.image || "/placeholder.svg"}
                alt={selectedUniversity.name}
                className="w-full h-64 object-cover rounded-lg"
              />

              <Card>
                <CardHeader>
                  <CardTitle>About the University</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{selectedUniversity.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Established: {selectedUniversity.establishedYear}</span>
                    <span>•</span>
                    <span>Acceptance Rate: {selectedUniversity.acceptanceRate}%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {selectedUniversity.programs.map((program) => (
                      <Badge key={program}  variant="secondary">
                        {program}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Admission Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Academic Requirements</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>Minimum GPA: {selectedUniversity.requirements.gpa}</li>
                        <li>
                          SAT Score: {selectedUniversity.requirements.sat[0]}-{selectedUniversity.requirements.sat[1]}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">English Proficiency</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>TOEFL: {selectedUniversity.requirements.toefl}+</li>
                        <li>IELTS: {selectedUniversity.requirements.ielts}+</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tuition (Annual)</span>
                    <span className="font-semibold">{selectedUniversity.tuitionRange}matTui</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Application Deadline</span>
                    <span className="font-semibold">{selectedUniversity.applicationDeadline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">World Ranking</span>
                    <span className="font-semibold">#{selectedUniversity.ranking}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Student Body</span>
                    <span className="font-semibold">{selectedUniversity.studentCount.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Important Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-semibold">Application Deadline</p>
                        <p className="text-sm text-muted-foreground">{selectedUniversity.applicationDeadline}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button className="w-full" asChild>
                  <a href={selectedUniversity.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Official Website
                  </a>
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Virtual Tour
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  
  
}

export default Page