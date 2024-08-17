import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Concertpal.io - Never miss your favorite artists' concerts again.",
    description: "Never miss your favorite artists' concerts again.",
    openGraph: { images: [{ url: "https://concertpal.io/og-image.png" }] },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex flex-col  min-h-screen max-w-[1800px] m-auto`}>
                <Navbar />
                <main className=" overflow-x-hidden">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
