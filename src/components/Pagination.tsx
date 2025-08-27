"use client"


import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Pagination = ({totalPages}:{
    totalPages:number
}) => {
    const searchParams = useSearchParams()
 
  const page =Number( searchParams?.get('page'))
  
       
    
      const isNextPage = true
    
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
    <>
    <div className="flex items-center justify-center gap-4 mt-8">
        {page > 1 && (
          <Link href={`/universities/?page=${page - 1}`}>
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
    </>
  )
}

export default Pagination