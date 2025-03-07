"use client";
import Chrome from "@/assets/chrome";
import Link from "next/link";

export default function BlogFooter() {
  return (
    <div className="w-full flex justify-center">
      <div className="border-t-2 border-solid w-full max-w-[800px] border-gray-400 text-white min-h-[200px] flex flex-col items-center justify-center px-4 pt-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Liked the blog?
        </h2>
        <p className="max-w-2xl text-lg mb-8 text-foreground">
          If you enjoyed reading this post, grab the extension now and start saving money effortlessly! 💰✨
        </p>
        <Link 
          href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja" 
          className="bg-primary hover:scale-105 transition-all text-white font-semibold text-xl p-4 rounded-2xl px-7 flex items-center gap-3"
        >
          <Chrome />
          Add to Chrome - It&apos;s Free!
        </Link>
      </div>
    </div>
  );
}
