// app/university/[slug]/page.tsx
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { hitServerApi } from '@/lib/useServerApi'
import { formatDateDMY } from '@/lib/utils'
import { MapPin, Award, Users, BookmarkIcon, Clock, ExternalLink, Calendar } from 'lucide-react'
import type { Metadata } from 'next'
import { cache } from 'react'
const getUniversity = cache(async (slug: string) => {
  return hitServerApi(`/api/universities/${slug}`)
})

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
  const {university:uni} = await getUniversity(slug)
  return {
    title: `${uni.name} - Test2Uni`,
    description: uni.description ?? "Explore university details on Test2Uni",
    openGraph: {
      title: `${uni.name} - Test2Uni`,
      description: uni.description,
      images: [uni.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${uni.name} - Test2Uni`,
      description: uni.description,
      images: [uni.image],
    },
    alternates: {
      canonical: `https://test2uni.com/university/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const { university: selectedUniversity } = await getUniversity(slug)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div>
          <Button variant="ghost" className="mb-2">← Back to Universities</Button>
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
                  {selectedUniversity?.studentCount?.toLocaleString()} students
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
              src={selectedUniversity.image ?? "/images/unidefault.jpg"}
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
                  {selectedUniversity?.programs?.map((program: string) => (
                    <Badge key={program} variant="secondary" className="text-sm">
                      {program}
                    </Badge>
                  ))}
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
                  <span className="font-semibold">${selectedUniversity.tuitionMin} - ${selectedUniversity.tuitionMax}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Application Deadline</span>
                  <span className="font-semibold">{formatDateDMY(selectedUniversity.applicationDeadline)}</span>
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
                      <p className="text-sm text-muted-foreground">{formatDateDMY(selectedUniversity.applicationDeadline)}</p>
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
