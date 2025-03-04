import { Instrument_Serif, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({ weight: "400", subsets: ["latin"], variable: "--font-inter" });
const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.variable} ${instrument.variable}`} lang="en">
      <body className="font-sans">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
