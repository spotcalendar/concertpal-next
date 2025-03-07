import { BlogList } from '@/components/blog-list'
import { getBlogPosts } from '@/lib/blog'
import React from 'react'

export default async function Page() {
  // Fetch all blog posts data
  const posts = await getBlogPosts()
  return (
    <>
      {/* Main container with top padding */}
      <div className="pt-14">
        {/* Page title */}
        <h1 className="text-4xl font-bold mb-8 flex justify-center items-center">Blog Posts</h1>
        <BlogList posts={posts} />
      </div>
    </>
  )
}
