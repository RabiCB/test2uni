export type University = {
  id: number
  name: string
  slug: string
  country: string
  city: string
  ranking: number
  tuitionMin :number
  tuitionMax :number
  acceptanceRate: number | null
  studentCount: number
  establishedYear: number
  description: string
  programs: string[]
  applicationDeadline: string
  requirements: {
    gpa: number
    sat: [number, number]
    toefl: number
    ielts: number
  }
  website: string
  bookmarked: boolean
  image?: string
}