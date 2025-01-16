"use client";
import { useState } from "react";
import { Logo } from "@/assets";
import { Input } from "./ui/input";
import axios from "axios";
import { AlertTriangle, Facebook, Instagram, Linkedin, Loader, MessageSquare, Twitter } from "lucide-react";
import Link from "next/link";
import Toast from "@/utils/toast";

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
        { name: "Terms & Condition", link: "/terms-and-conditions" },
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
        <footer className="w-full bg-gray-950/90 text-white py-12 md:mt-32" id="footer">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="">
                                <Logo />
                            </div>
                            <span className="text-2xl font-bold">
                                <span className="text-primary-foreground">Concert</span>
                                <span>Pal</span>
                            </span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold uppercase mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.link} className="text-gray-300 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold uppercase mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.link} className="text-gray-300 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Need help?</h3>
                        <div className="space-y-4">
                            <div className="flex">
                                <Input
                                    type="email"
                                    placeholder="Input email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={handleKeyDown} // Listen for Enter key press
                                    className="border-white/20 rounded-tl-md rounded-br-none border-none rounded-tr-none rounded-tb-md text-black placeholder:text-gray-400 outline-none ring-none"
                                />
                                <button onClick={handleClick} className="bg-[#085E40] px-2 py-2 text-sm rounded-br-md rounded-tr-md min-w-[60px] flex justify-center items-center">
                                    {isLoading ? <Loader className="animate-spin" /> : isSent ? "Sent" : "Send"}
                                </button>
                            </div>
                            {errorMessage && (
                                <p className="text-red-500 text-sm mt-2 flex justify-start items-center gap-1">
                                    <AlertTriangle /> {errorMessage}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-300">© 2024 ConcertPal io. All Rights Reserved.</p>
                    <div className="flex items-center space-x-4">
                        {socials.map((social, index) => (
                            <Link key={index} href={social.link} className="text-gray-300 hover:text-white transition-colors">
                                <social.icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
