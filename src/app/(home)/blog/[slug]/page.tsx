import { getBlogPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, Clock, User } from "lucide-react";
import BackButton from "@/components/ui/back-button";

// Enable caching for 1 hour
export const revalidate = 3600;

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;

    if (!slug) {
        notFound();
    }

    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    // Estimate reading time (assuming average reading speed of 200 words per minute)
    const wordCount = post.content.split(" ").length;
    const readingTime = Math.ceil(wordCount / 250);

    return (
        <><div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center ">
        <article className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-12">
            {/* Hero Section */}
            <div className="relative space-y-6 text-center">
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-3xl" />
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight  text-teal-900">{post.title}</h1>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-medium">{readingTime} min read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className=" p-4  rounded-lg prose-base md:prose-lg prose-li:list-disc  mb-8  prose-pre:bg-gray-400 dark:prose-pre:bg-gray-800 prose-pre:px-3 prose-pre:text-gray-900 dark:prose-pre:text-white dark:prose-p:text-white  prose-h1:decoratin-slate-600 ">
              <MDXRemote source={post.content} />
            </div>
          </div>
        </article>
      </div><BackButton /></>
        
    );
}
