
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Star, MapPin, Calendar } from "lucide-react"

const savedResources = [
  {
    id: 1,
    title: "IELTS Writing Task 1: Essential Tips",
    type: "tips",
    exam: "IELTS",
    progress: 100,
    rating: 4.8,
  },
  {
    id: 2,
    title: "PTE Speaking: Repeat Sentence Practice",
    type: "practice",
    exam: "PTE",
    progress: 75,
    rating: 4.6,
  },
]

const savedUniversities = [
  {
    id: 1,
    name: "University of Oxford",
    country: "United Kingdom",
    city: "Oxford",
    ranking: 1,
    deadline: "October 15, 2024",
    matchScore: 95,
  },
  {
    id: 2,
    name: "Australian National University",
    country: "Australia",
    city: "Canberra, ACT",
    ranking: 27,
    deadline: "December 31, 2024",
    matchScore: 88,
  },
]

export default function SavedPage() {
  

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Saved Items</h1>
              <p className="text-muted-foreground">Your bookmarked resources and universities</p>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {savedResources.length + savedUniversities.length} Items
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="resources" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="resources">Study Resources</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
          </TabsList>

          <TabsContent value="resources" className="space-y-4">
            {savedResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{resource.exam}</Badge>
                        <Badge variant="secondary">{resource.type}</Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4 fill-current text-red-500" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current text-yellow-500" />
                        <span>{resource.rating}</span>
                      </div>
                      <span>Progress: {resource.progress}%</span>
                    </div>
                    <Button size="sm">Continue</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="universities" className="space-y-4">
            {savedUniversities.map((university) => (
              <Card key={university.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{university.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {university.city}, {university.country}
                        </span>
                        <Badge variant="outline">#{university.ranking}</Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4 fill-current text-red-500" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Deadline: {university.deadline}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current text-yellow-500" />
                        <span>{university.matchScore}% match</span>
                      </div>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
