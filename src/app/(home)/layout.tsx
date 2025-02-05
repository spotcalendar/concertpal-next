import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Concertpal.io - Never miss your favorite artist's concerts again.",
    description: "Never miss your favorite artist's concerts again.",
    openGraph: { images: [{ url: "https://pbs.twimg.com/profile_banners/1809055783319203840/1724206113/1500x500" }] },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
