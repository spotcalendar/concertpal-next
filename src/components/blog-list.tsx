"use client"

import { useState } from "react"
import { BlogCard } from "@/components/blog-card"
import type { Post } from "@/lib/blog"

interface BlogListProps {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  const [showAll, setShowAll] = useState(false)
  const INITIAL_POSTS_COUNT = 3

  const displayedPosts = showAll ? posts : posts.slice(0, INITIAL_POSTS_COUNT)
  const hasMorePosts = posts.length > INITIAL_POSTS_COUNT

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      {displayedPosts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
      
      {hasMorePosts && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4  px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  )
} 