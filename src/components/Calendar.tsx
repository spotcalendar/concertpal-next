

const Calendar = () => {
  return (
    <div>
      
    </div>
  )
}

export default Calendar

// import { useState, useEffect, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Clock, MapPin, RefreshCw } from "lucide-react"
// import { Button } from "@/components/ui/button"

// interface Event {
//   id: string
//   title: string
//   venue: string
//   date: string
//   image: string
// }

// const events: Event[] = [
//   {
//     id: "1",
//     title: "Harry Styles with Blood Orange",
//     venue: "Madison Square Garden",
//     date: "21 Aug 2022, 1:30 am",
//     image: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     id: "2",
//     title: "Lollapalooza (4 Day Pass)",
//     venue: "Grant Park",
//     date: "29 Jul 2022, 5:28 am",
//     image: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     id: "3",
//     title: "Shawn Mendes with Dermot Kennedy",
//     venue: "TD Garden",
//     date: "21 Aug 2022, 1:30 am",
//     image: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     id: "4",
//     title: "Demi Lovato",
//     venue: "Illinois State Fairgrounds",
//     date: "14 Aug 2022, 1:30 am",
//     image: "/placeholder.svg?height=80&width=80",
//   },
// ]

// export default function NotificationPopups() {
//   const [visibleEvents, setVisibleEvents] = useState<Event[]>([])
//   const [isPlaying, setIsPlaying] = useState(true)
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null)
//   const currentIndexRef = useRef(0)

//   const showNextNotification = () => {
//     if (currentIndexRef.current < events.length) {
//       // Add new notification to the beginning of the array
//       setVisibleEvents((prev) => [events[currentIndexRef.current], ...prev])
//       currentIndexRef.current += 1

//       if (isPlaying && currentIndexRef.current < events.length) {
//         timeoutRef.current = setTimeout(showNextNotification, 1500)
//       }
//     }
//   }

//   const resetNotifications = () => {
//     setVisibleEvents([])
//     currentIndexRef.current = 0
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current)
//     }

//     setIsPlaying(true)
//     timeoutRef.current = setTimeout(showNextNotification, 500)
//   }

//   useEffect(() => {
//     timeoutRef.current = setTimeout(showNextNotification, 500)

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current)
//       }
//     }
//   }, [])

//   return (
//     <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-md mb-8">
//         <Button onClick={resetNotifications} className="w-full" variant="outline">
//           Reset Notifications
//         </Button>
//       </div>

//       <div className="relative w-full max-w-md h-[500px]">
//         <AnimatePresence>
//           {visibleEvents.map((event, index) => (
//             <motion.div
//               key={event.id}
//               initial={{
//                 opacity: 0,
//                 y: -50,
//                 scale: 0.9,
//                 zIndex: 100,
//               }}
//               animate={{
//                 opacity: index === 0 ? 1 : 1 - index * 0.15,
//                 y: index * 70,
//                 scale: 1 - index * 0.03,
//                 zIndex: 100 - index,
//                 transition: {
//                   type: "spring",
//                   stiffness: 400,
//                   damping: 30,
//                 },
//               }}
//               exit={{
//                 opacity: 0,
//                 scale: 0.9,
//                 transition: { duration: 0.2 },
//               }}
//               className="absolute top-0 left-0 right-0 bg-white rounded-xl shadow-lg p-4 flex items-center gap-4 border border-gray-100"
//             >
//               <div className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
//                 <img src={event.image || "/placeholder.svg"} alt={event.title} className="h-full w-full object-cover" />
//               </div>

//               <div className="flex-1 min-w-0">
//                 <h3 className="font-semibold text-lg truncate">{event.title}</h3>
//                 <div className="flex items-center text-gray-500 mt-1">
//                   <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
//                   <span className="text-sm truncate">{event.venue}</span>
//                 </div>
//                 <div className="flex items-center text-gray-500 mt-1">
//                   <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
//                   <span className="text-sm">{event.date}</span>
//                 </div>
//               </div>

//               <Button
//                 variant="outline"
//                 className="flex-shrink-0 bg-green-50 text-green-600 border-green-100 hover:bg-green-100 hover:text-green-700"
//               >
//                 <RefreshCw className="h-4 w-4 mr-2" />
//                 Sync Event
//               </Button>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }


