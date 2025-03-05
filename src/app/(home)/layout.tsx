import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Concertpal.io - Never miss your favorite artist's concerts again.",
  description: "Never miss your favorite artist's concerts again.",
  openGraph: {
    images: [
      { url: "https://pbs.twimg.com/profile_banners/1809055783319203840/1724206113/1500x500" },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`flex flex-col  min-h-screen max-w-[2500px] m-auto`}
        suppressHydrationWarning
      >
        <Navbar session={session} />
        <ScrollToTop />
        <main className=" overflow-x-hidden" suppressHydrationWarning>
          <Toaster />
          {children}
        </main>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="7e52c10d-bf54-4078-88e9-529fce4a4981"
        ></Script>
        <Footer />
      </body>
    </html>
  );
}
