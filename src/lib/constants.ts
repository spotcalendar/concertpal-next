import { Instagram, Twitter, Youtube } from "lucide-react";

export const supportedProviders = [
    {
        name: "Ticketmaster",
        image: `https:/${process.env.NEXT_PUBLIC_CDN_DIST}/ticketmaster.png`,
        link: "https://www.ticketmaster.com/",
    },
    {
        name: "Stubhub",
        image: `https:/${process.env.NEXT_PUBLIC_CDN_DIST}/stubhub.png`,
        link: "https://www.stubhub.com/",
    },
    {
        name: "SeatGeek",
        image: `https:/${process.env.NEXT_PUBLIC_CDN_DIST}/seatgeek.png`,
        link: "https://seatgeek.com/",
    },
    {
        name: "VividSeats",
        image: `https:/${process.env.NEXT_PUBLIC_CDN_DIST}/vividseats.png`,
        link: "https://www.vividseats.com/",
    },
    {
        name: "Viagogo",
        image: `https:/${process.env.NEXT_PUBLIC_CDN_DIST}/viagogo.png`,
        link: "https://www.viagogo.com/",
    },
];
export const NavItems = [
    {
        name: "How it works",
        link: "#steps",
    },
    {
        name: "Testimonials",
        link: "/#testimonials",
    },
    {
        name: "Get help",
        link: "#footer",
    },
];

export const Legal = [
    {
        name: "Privacy Policy",
        link: "/privacy-policy",
    },
    {
        name: "Terms & Conditions",
        link: "/terms-and-conditions",
    },
];

export const Socials = [
    {
        name: "Twitter",
        link: "https://x.com/ConcertPalio",
        icon: Twitter,
    },
    {
        name: "Instagram",
        link: "#",
        icon: Instagram,
    },
    {
        name: "Youtube",
        link: "#",
        icon: Youtube,
    },
];
