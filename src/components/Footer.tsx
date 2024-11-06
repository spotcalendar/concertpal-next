import { Logo } from "@/assets";
import { Input } from "./ui/input";
import { Facebook, Instagram, Linkedin, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Component() {
    const quickLinks = [
        { name: "How it works", link: "/how-it-works" },
        { name: "Testimonials", link: "/testimonials" },
        { name: "Get help", link: "/help" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", link: "/privacy" },
        { name: "Terms & Condition", link: "/terms" },
    ];

    const socials = [
        { icon: Linkedin, link: "#" },
        { icon: Instagram, link: "#" },
        { icon: Facebook, link: "#" },
        { icon: MessageSquare, link: "#" },
    ];

    return (
        <footer className="w-full bg-[#113411] text-white py-12 mt-32">
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
                            <Input type="email" placeholder="Input email address" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" />
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
