// app/universities/page.tsx
import UniversityDatabase from "@/components/university-database"
import { hitServerApi } from "@/lib/useServerApi"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Universities - Explore & Sort",
  description: "Browse universities with sorting and pagination",
}

type Props = {
  searchParams?: {
    page?: string
    sort?: string // e.g., "name_asc" or "ranking_desc"
  }
}

export default async function UniversitiesPage({ searchParams }: Props) {
  // ✅ Parse page number safely
  const page = Number(searchParams?.page) || 1
  const sortBy = searchParams?.sort || "name_asc"

  // Fetch data from server
  const data = await hitServerApi(`/api/universities?page=${page}`)
  const universities = data?.universities ?? []
  const totalPages = data?.pagination?.totalPages ?? 1
  const isNextPage = page < totalPages

  // ✅ Page number generator
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = []
    const delta = 2

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= page - delta && i <= page + delta)) {
        pageNumbers.push(i)
      } else if (pageNumbers[pageNumbers.length - 1] !== "...") {
        pageNumbers.push("...")
      }
    }
    return pageNumbers
  }

  return (
    <section className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Universities</h1>

      {/* Sorting Controls */}
      <div className="flex gap-4 mb-6">
        <Link
          href={`/universities/?page=1&sort=name_asc`}
          className={`px-3 py-1 rounded ${sortBy === "name_asc" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Name Asc
        </Link>
        <Link
          href={`/universities/?page=1&sort=ranking_desc`}
          className={`px-3 py-1 rounded ${sortBy === "ranking_desc" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Ranking Desc
        </Link>
      </div>

      {/* University List */}
      <UniversityDatabase data={universities} />

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {page > 1 && (
          <Link href={`/universities/?page=${page - 1}&sort=${sortBy}`}>
            <button className="px-4 py-2 bg-gray-300 rounded">Prev</button>
          </Link>
        )}

        <div className="flex gap-2">
          {getPageNumbers().map((num, idx) =>
            num === "..." ? (
              <span key={idx} className="px-3 py-1">
                ...
              </span>
            ) : (
              <Link key={idx} href={`/universities/?page=${num}`}>
                <span
                  className={`px-3 py-1 rounded cursor-pointer ${
                    num === page ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {num}
                </span>
              </Link>
            )
          )}
        </div>

        {isNextPage && (
          <Link href={`/universities/?page=${page + 1}`}>
            <button className="px-4 py-2 bg-gray-300 rounded">Next</button>
          </Link>
        )}
      </div>
    </section>
  )
}
