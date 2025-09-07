// "use client"

// import Speech from '@/components/speech'
// import React, { useState, useEffect } from 'react'


// // Example array of PTE Read Aloud questions
// const questionsReadAloud = [
//   {
//     id: "q1",
//     number: "1",
//     question: "Global warming is one of the most urgent environmental issues of our time.",
//     image: undefined,
//   },
//   {
//     id: "q2",
//     number: "2",
//     question: "The rapid growth of technology has transformed the way we communicate daily.",
//     image: undefined,
//   },
//   {
//     id: "q3",
//     number: "3",
//     question: "Education plays a critical role in shaping the future of a society.",
//     image: undefined,
//   },
//   {
//     id: "q4",
//     number: "4",
//     question: "Renewable energy sources, such as solar and wind power, are essential for sustainability.",
//     image: undefined,
//   },
//   {
//     id: "q5",
//     number: "5",
//     question: "Artificial intelligence is changing the landscape of modern industries rapidly.",
//     image: undefined,
//   },
//   {
//     id: "q6",
//     number: "6",
//     question: "Learning multiple languages can enhance cognitive abilities and career opportunities.",
//     image: undefined,
//   },
//   {
//     id: "q7",
//     number: "7",
//     question: "Climate change affects ecosystems and biodiversity worldwide.",
//     image: undefined,
//   },
//   {
//     id: "q8",
//     number: "8",
//     question: "Healthy lifestyle choices contribute significantly to long-term well-being.",
//     image: undefined,
//   },
//   {
//     id: "q9",
//     number: "9",
//     question: "Globalization has led to increased cultural exchange and economic interdependence.",
//     image: undefined,
//   },
//   {
//     id: "q10",
//     number: "10",
//     question: "Innovation and creativity are crucial drivers of economic growth in the 21st century.",
//     image: undefined,
//   },
// ];


// const Speaking = () => {
//   const [countdown, setCountdown] = useState<number>(35)
//   const [recordStartedTime, setRecordStartedTime] = useState<number>(0)
//   const [enteredPage, setEnteredPage] = useState<number | null>(null)

//   const params = new URLSearchParams(window.location.search)
//   const qn = parseInt(params.get('q') || '1', 10)

//   // Get question from array
//   const data = questionsReadAloud.find((q) => Number(q.number) === qn) || questionsReadAloud[0]
//   const totalQuestion = questionsReadAloud.length

//   const handleGoToQuestion = () => {
//     if (!enteredPage) return
//     if (enteredPage > totalQuestion) {
//       alert(`Sorry we have only ${totalQuestion} questions`)
//       return
//     }
//     window.location.href = `/readaloud?q=${enteredPage}`
//   }

//   const handlePageChangeFromSelect = (pageNumber: number | string) => {
//     window.location.href = `/readaloud?q=${pageNumber}`
//   }

//   const getPages = () => Array.from({ length: totalQuestion }, (_, i) => i + 1)

//   return (
//     <>
//       <h2 className="text-center my-4">
//         Look at the text below. In 35 seconds, you must read this text aloud as naturally and clearly as possible.
//       </h2>

//       <section className="flex flex-col mt-4 items-center justify-center">
//         <Speech
      
//           practicetime={35}
//           giventime={35}
//           countdown={countdown}
//           setRecordstartedTime={setRecordStartedTime as any} 
//           recordstartedtime={recordStartedTime}
//           qn={qn}
//           data={questionsReadAloud as any}
//           setCountdown={setCountdown as any}
//           isloading={false}
//           totalquestion={totalQuestion}
//         />

//         <div className="flex gap-4 items-center md:border px-2 md:fixed bottom-2 justify-center max-md:flex-col">
//           <input
//             type="number"
//             placeholder="Question number"
//             className="border text-sm px-4 py-2 outline-none rounded-lg"
//             onChange={(e) => setEnteredPage(parseInt(e.target.value))}
//           />

//           <button
//             disabled={!enteredPage}
//             onClick={handleGoToQuestion}
//             className="my-2 disabled:bg-slate-800 disabled:cursor-not-allowed bg-black px-4 py-1.5 rounded-lg text-sm text-white"
//           >
//             Go to Question
//           </button>

//           <div className="text-sm">Total Questions: {totalQuestion}</div>
//           <div className="text-sm">Active Question number: {data.number}</div>

//           <select
//             value={qn}
//             onChange={(e) => handlePageChangeFromSelect(e.target.value)}
//             className="px-4 py-1.5 outline-none border rounded-lg"
//           >
//             {getPages().map((d) => (
//               <option key={d} value={d}>
//                 {d}
//               </option>
//             ))}
//           </select>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Speaking


import React from 'react'

const Speaking = () => {
  return (
    <div>Speaking</div>
  )
}

export default Speaking