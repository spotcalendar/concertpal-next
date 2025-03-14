import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Concertpal.io - Find Cheap Concert Tickets & Track Live Shows in US",
    description: "Find the cheapest concert tickets across all major ticketing platforms. Track your favorite artists, get price alerts, and never miss live shows in the US. Compare prices from Ticketmaster, StubHub, SeatGeek and more.",
    keywords: "concert tickets, live shows, cheap concert tickets, ticket comparison, US concerts, music events, live music, concert deals, ticket alerts, Ticketmaster, StubHub, SeatGeek, concert tracking, music festivals, concert price alerts, music concerts",
    openGraph: {
        title: "Concertpal.io - Find Cheap Concert Tickets & Track Live Shows",
        description: "Find the cheapest concert tickets across all major ticketing platforms. Track your favorite artists and never miss live shows.",
        type: "website",
        locale: "en_US",
        url: "https://concertpal.io",
        siteName: "Concertpal.io",
        images: [{ 
            url: "https://pbs.twimg.com/profile_banners/1809055783319203840/1724206113/1500x500",
            width: 1500,
            height: 500,
            alt: "Concertpal.io Banner"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Concertpal.io - Find Cheap Concert Tickets & Track Live Shows",
        description: "Find the cheapest concert tickets across all major ticketing platforms. Track your favorite artists and never miss live shows.",
        images: ["https://pbs.twimg.com/profile_banners/1809055783319203840/1724206113/1500x500"],
        creator: "@concertpal_io"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: "verification_code", // Add your Google Search Console verification code
    },
    alternates: {
        canonical: "https://concertpal.io"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
                <StructuredData />
            </head>
            <body className={`${inter.className} flex flex-col  min-h-screen max-w-[2500px] m-auto`} suppressHydrationWarning>
                <Navbar />
                <ScrollToTop />
                <main className=" overflow-x-hidden" suppressHydrationWarning>
                    <Toaster />
                    {children}
                </main>
                <Script defer src="https://cloud.umami.is/script.js" data-website-id="7e52c10d-bf54-4078-88e9-529fce4a4981"></Script>
                <Footer />
            </body>
        </html>
    );
}
