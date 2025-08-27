

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, DollarSign, Calendar, Users, BookmarkIcon, GraduationCap } from "lucide-react"
import Link from "next/link"
import { University } from "@/lib/type"
import ExampleClientComponent from "./filter"





function formatTuition(range: number[]) {
  if (range[0] === 0 && range[1] <= 1000) return "Free/Low cost"
  return `$${range[0].toLocaleString()} - $${range[1].toLocaleString()}`
}
function formatDateDMY(isoDate:string) {
  const date = new Date(isoDate);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
}





export default function UniversityDatabase({data}:{
  data:University[]
}) {
  



  const universities = data || []



  

  return (
    <div className="min-h-screen bg-background">
      
      

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities?.map((university: University) => (
            <Link href={`/university/${university.slug}`} key={university.id}>
              <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border">
                <div className="relative">
                  <img
                    src={"/images/unidefault.jpg"}
                    alt={university.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <BookmarkIcon
                      className={`h-4 w-4 ${university.bookmarked ? "fill-current text-primary" : ""}`}
                    />
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
                        <span>${university.tuitionMin} - {university.tuitionMax}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span>{university.studentCount.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span>Deadline: {formatDateDMY(university.applicationDeadline)}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {university.programs.slice(0, 3).map((program: string) => (
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

        {universities.length === 0 && (
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
