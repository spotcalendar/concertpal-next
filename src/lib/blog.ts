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

// Helper function to fetch from GitHub with error handling
async function fetchFromGitHub(fileName: string): Promise<string> {
  const response = await fetch(
    `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${fileName}`
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
    return posts
      .filter((post): post is Post => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error("Failed to fetch blog posts:", error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<Post | null> {
  try {
    const fileName = `${slug}.mdx`
    const content = await fetchFromGitHub(fileName)
    return parseMDXContent(content, slug)
  } catch (error) {
    console.error(`Failed to fetch blog post ${slug}:`, error)
    return null
  }
}
