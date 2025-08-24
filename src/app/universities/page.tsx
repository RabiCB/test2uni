// app/universities/page.tsx
import UniversityDatabase from "@/components/university-database"
import { hitServerApi } from "@/lib/useServerApi"
import Link from "next/link"
import type { Metadata } from "next"
import ExampleClientComponent from "@/components/filter"

export const metadata: Metadata = {
  title: "Universities - Explore & Sort",
  description: "Browse universities with sorting and pagination",
  openGraph: {
    title: "Universities - Explore & Sort",
    description: "Browse universities with sorting and pagination",
  },
  twitter: {
    title: "Universities - Explore & Sort",
    description: "Browse universities with sorting and pagination",
  },
}

type Props = {
  searchParams?: {
    page?: string
    sort?: string // e.g., "name_asc" or "ranking_desc"
  }
}

export default async function UniversitiesPage({
searchParams,
}
:{
  searchParams:Promise<{page: number}>}) {
  
    const {page }=await searchParams

  // Fetch data from server
  const data = await hitServerApi(`/api/universities?page=${page}`)
  console.log(data)
  const universities = data?.universities ?? []
  const totalPages = data?.totalPages ?? 1 // Changed from data?.pagination?.totalPages
  const isNextPage = Number(page) < totalPages

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = []
    pageNumbers.push(1)
    if (page > 3) pageNumbers.push("...")
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      pageNumbers.push(i)
    }
    if (page < totalPages - 2) pageNumbers.push("...")
    if (!pageNumbers.includes(totalPages)) pageNumbers.push(totalPages)
    return pageNumbers
  }

const handleSortPageChange=()=>{
  console.log("ss")
}

const sortBy = "name_asc"
 // Default sorting

  const nextPage = page + 1
  const prevPage = page - 1

  return (
    <section className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Universities</h1>
      {/* <ExampleClientComponent/> */}

      {/* Sorting Controls */}
      <div className="flex gap-4 mb-6">
        <Link
          href={`/universities/?page=1&sort=name_asc`}
          className={`px-3 py-1 rounded ${sortBy === "name_asc" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Name Asc
        </Link>
       
      </div>

      {/* University List (Child component only receives data) */}
      <UniversityDatabase data={universities} />

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {page > 1 && (
          <Link href={`/universities/?page=${prevPage}`}>
            <button className="px-4 py-2 bg-gray-300 rounded">Prev</button>
          </Link>
        )}

        <div className="flex gap-2">
          {getPageNumbers().map((num, idx) => (
            <Link key={idx} href={`/universities/?page=${num}`}>
              <span
                className={`px-3 py-1 rounded cursor-pointer ${
                  num === page ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                {num}
              </span>
            </Link>
          ))}
        </div>

        {isNextPage && (
          <Link href={`/universities/?page=${nextPage}${handleSortPageChange()}`}>
            <button className="px-4 py-2 bg-gray-300 rounded">Next</button>
          </Link>
        )}
      </div>
    </section>
  )
}