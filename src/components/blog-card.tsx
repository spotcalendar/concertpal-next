"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Clock, Calendar, User } from "lucide-react"
import type { Post } from "@/lib/blog";
import Link from "next/link"
import { useState, useMemo } from "react"

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  // Memoize formatted date and reading time calculations
  const { formattedDate, readingTime } = useMemo(() => {
    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })

    // Estimate reading time (assuming average reading speed of 250 words per minute)
    const wordCount = post.content.split(" ").length
    const readingTime = Math.ceil(wordCount / 250)

    return { formattedDate, readingTime }
  }, [post.date, post.content])

  const handleClick = () => {
    setIsLoading(true)
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block" onClick={handleClick}>
      <Card className="group overflow-hidden w-full max-w-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl border-border mb-9">
        <CardHeader className="space-y-2 pb-3">
          <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">
            {post.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 pt-0">
          <CardDescription className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {post.description}
          </CardDescription>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-border">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 sm:mb-0">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg group-hover:overflow-visible">
              <button className="relative z-10 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2">
                {isLoading ? (
                  <>
                    <svg aria-hidden="true" className="w-4 h-4 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    Read More
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>     
        </CardContent>
      </Card>
    </Link>
  )
}