// app/universities/page.tsx
import UniversityDatabase from "@/components/university-database"
import { hitServerApi } from "@/lib/useServerApi"

import Pagination from "@/components/Pagination"
import { PageProps } from "../../../.next/types/app/page"



type Props = {
  searchParams?: {
    page?: string
   
  }
}

export default async function UniversitiesPage(
 { searchParams }: PageProps
) {
 
 const params = await searchParams

  const page = parseInt((params?.page as string) || "1", 10)
  const data = await hitServerApi(`/api/universities?page=${page}`)
  const universities = data?.universities ?? []
  const totalPages = data?.pagination?.totalPages ?? 1 as number
  


  return (
    <section className=" py-8">
     <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Explore Universities</h1>
        <p className="text-lg text-gray-600 ">
          Browse our comprehensive university database, discover top institutions,
          and find the perfect place to start your academic journey. Easily sort
          and navigate through universities with simple pagination.
        </p>
      </div>

    
      <UniversityDatabase data={universities} />

      <Pagination totalPages={totalPages}/>
    </section>
  )
}
