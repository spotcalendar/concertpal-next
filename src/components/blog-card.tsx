"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, Calendar, User } from "lucide-react";
import type { Post } from "@/lib/blog";
import Link from "next/link";
import { useState, useMemo } from "react";

interface BlogCardProps {
    post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
    const [isLoading, setIsLoading] = useState(false);

    // Memoize formatted date and reading time calculations
    const { formattedDate, readingTime } = useMemo(() => {
        const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });

        // Estimate reading time (assuming average reading speed of 250 words per minute)
        const wordCount = post.content.split(" ").length;
        const readingTime = Math.ceil(wordCount / 250);

        return { formattedDate, readingTime };
    }, [post.date, post.content]);

    const handleClick = () => {
        setIsLoading(true);
    };

    return (
        <Link href={`/blog/${post.slug}`} className="block" onClick={handleClick}>
            <Card className="group overflow-hidden w-full max-w-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl border-border mb-9">
                <CardHeader className="space-y-2 pb-3">
                    <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-tight">{post.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 pt-0">
                    <CardDescription className="text-muted-foreground text-base md:text-lg leading-relaxed">{post.description}</CardDescription>

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
                                        <div className="w-full px-8">
                                            <div className="w-5 h-5 border-4 text-green-700 text-sm animate-spin border-gray-300 flex items-center justify-center border-t-green-700 rounded-full"></div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        Read More
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
    );
}
