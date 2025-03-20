"use client";

import { ArrowRight, Linkedin, Loader, Twitter } from "lucide-react";

import { Logo } from "@/assets";
import Toast from "@/utils/toast";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/input";
export default function Component() {
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // State for error message

    const quickLinks = [
        { name: "How it works", link: "#" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Get help", link: "#" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Terms & Conditions", link: "/terms-and-conditions" },
    ];

    const socials = [
        { icon: Linkedin, link: "https://www.linkedin.com/company/concertpal/" },
        { icon: Twitter, link: "https://x.com/concertpalio" },
    ];

    // Email validation function
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleClick = async () => {
        if (!isValidEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        try {
            setIsLoading(true);
            setErrorMessage("");
            const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
            const endpoint = `${BASE_URL}/assist/help`;
            const res = await axios.post(endpoint, {
                email,
            });
            if (res.status === 200) {
                setIsSent(true);
                setEmail("");
                Toast.SuccessshowToast("Email received successfully!");
            }
        } catch (err) {
            console.error("Error sending webhook:", err);
            setErrorMessage("Failed to send the message. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    // Handle Enter key press to trigger handleClick
    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            handleClick();
        }
    };

    return (
        <footer className="w-full bg-[#09332B] text-white py-16">
            <div className="container mx-auto px-4  max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Logo and Tagline Section */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-2">
                            <Logo />
                            <span className="text-2xl font-bold">
                                <span>Concert</span>
                                <span>Pal</span>
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-4xl font-bold leading-tight text-[#D3F4EF]">
                            Your automatic shopping
                            <br />
                            assistant for Concerts!
                        </h2>
                    </div>

                    {/* Links Section */}
                    <div className="md:col-span-3 space-y-4">
                        <Link href="/privacy-policy" className="flex items-center gap-2 hover:text-[#D3F4EF] transition-colors">
                            <ArrowRight className="h-5 w-5 text-[#D3F4EF]" />
                            <span>Privacy Policy</span>
                        </Link>
                        <Link href="/terms-and-conditions" className="flex items-center gap-2 hover:text-[#D3F4EF] transition-colors">
                            <ArrowRight className="h-5 w-5 text-[#D3F4EF]" />
                            <span>Terms & Conditions</span>
                        </Link>
                        <Link href="#footer" className="flex items-center gap-2 hover:text-[#D3F4EF] transition-colors">
                            <ArrowRight className="h-5 w-5 text-[#D3F4EF]" />
                            <span>Get help</span>
                        </Link>
                    </div>

                    {/* Help Section */}
                    <div className="md:col-span-4 space-y-4 ">
                        <h3 className="text-2xl font-semibold">Need Help?</h3>
                        <div className="flex  overflow-hidden  ">
                            <Input
                                type="email"
                                placeholder="Input email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={handleKeyDown} // Listen for Enter key press
                                className="flex-1 px-4 py-2 bg-[#116557] text-white placeholder:text-[#a5f0e4] outline-none rounded-l-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                            <button type="submit" onClick={handleClick} disabled={isLoading} className="px-4 bg-[#D3F4EF] text-black font-medium rounded-r-lg hover:bg-[#b3e5df] transition-colors py-2">
                                {isLoading ? <Loader className="animate-spin" /> : isSent ? "Sent" : "Send"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-6 border-t border-[#116557] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#D3F4EF]">© 2024 ConcertPal io. All Rights Reserved</p>
                    <div className="flex gap-4">
                        <Link href="https://www.linkedin.com/company/concertpal/" target="_blank" rel="noopener noreferrer" className="text-[#D3F4EF] hover:text-white transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="https://x.com/concertpalio" target="_blank" rel="noopener noreferrer" className="text-[#D3F4EF] hover:text-white transition-colors">
                            <Twitter className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
