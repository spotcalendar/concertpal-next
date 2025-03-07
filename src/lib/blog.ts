import matter from "gray-matter"

export interface Post {
  slug: string
  title: string
  description: string
  author: string
  date: string
  content: string
}

const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO || "default/repo";
const GITHUB_BRANCH = process.env.NEXT_PUBLIC_GITHUB_BRANCH || "main";
const mdxFiles = process.env.NEXT_PUBLIC_MDX_FILES ? process.env.NEXT_PUBLIC_MDX_FILES.split(",") : [];


// Cache for blog posts
const postsCache = new Map<string, Post>()
const allPostsCache = new Map<string, Post[]>()

// Helper function to fetch from GitHub with error handling
async function fetchFromGitHub(fileName: string): Promise<string> {
  const response = await fetch(
    `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${fileName}`,
    { next: { revalidate: 3600 } } // Cache for 1 hour
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch ${fileName}: ${response.statusText}`)
  }

  return response.text()
}

// Helper function to parse MDX content
function parseMDXContent(content: string, slug: string): Post {
  const { data: frontmatter, content: mdxContent } = matter(content)

  return {
    slug,
    title: frontmatter.title || "Untitled",
    description: frontmatter.description || "",
    author: frontmatter.author || "Anonymous",
    date: frontmatter.date
      ? new Date(frontmatter.date).toISOString()
      : new Date().toISOString(),
    content: mdxContent,
  }
}

export async function getBlogPosts(): Promise<Post[]> {
  // Check cache first
  const cacheKey = "all-posts"
  const cachedPosts = allPostsCache.get(cacheKey)
  if (cachedPosts) {
    return cachedPosts
  }

  try {
    const posts = await Promise.all(
      mdxFiles.map(async (fileName) => {
        try {
          const content = await fetchFromGitHub(fileName)
          const slug = fileName.replace(/\.mdx$/, "")
          return parseMDXContent(content, slug)
        } catch (error) {
          console.error(`Failed to fetch ${fileName}:`, error)
          return null
        }
      })
    )

    // Filter out null results and sort by date
    const validPosts = posts
      .filter((post): post is Post => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    // Update cache
    allPostsCache.set(cacheKey, validPosts)
    return validPosts
  } catch (error) {
    console.error("Failed to fetch blog posts:", error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<Post | null> {
  // Check cache first
  const cachedPost = postsCache.get(slug)
  if (cachedPost) {
    return cachedPost
  }

  try {
    const fileName = `${slug}.mdx`
    const content = await fetchFromGitHub(fileName)
    const post = parseMDXContent(content, slug)

    // Update cache
    postsCache.set(slug, post)
    return post
  } catch (error) {
    console.error(`Failed to fetch blog post ${slug}:`, error)
    return null
  }
}
