import { LogoWhite } from "@/assets";
import { Legal, NavItems, Socials } from "@/config/navbar";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className=" bg-primary w-full md:mt-12  gap-4 text-white">
            <div className="  md:max-w-[1440px] md:ml-auto flex flex-col gap-4 md:mr-auto p-3">
                <div className="flex font-bold text-lg items-center">
                    <LogoWhite width="50" height="40" />
                    <div className="text-3xl">
                        Concert<span className="text-black">Pal</span>
                    </div>
                </div>

                <div className=" pl-3 grid grid-cols-2 gap-12 ">
                    <div>
                        <h1 className="uppercase font-medium text-lg mt-3 tracking-wide">Quick Links</h1>
                        <ul className=" flex flex-col gap-4 mt-4 ">
                            {NavItems.map((item, index) => (
                                <li key={index} className=" opacity-80 font-normal">
                                    <Link href={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h1 className="uppercase font-medium text-lg mt-3 tracking-wide">Legal</h1>
                        <ul className=" flex flex-col gap-4 mt-4 ">
                            {Legal.map((item, index) => (
                                <li key={index} className=" opacity-80 font-normal">
                                    <Link href={item.link}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <p className=" mt-5">© 2024 ConcertPal io. All Rights Reserved.</p>
                    <div className="flex gap-5 items-center mt-5 md:mt-0">
                        {Socials.map((social, index) => (
                            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                                <social.icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
