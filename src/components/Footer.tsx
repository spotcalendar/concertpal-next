import { ArrowRightRed, LogoWhite } from "@/assets";
import { Legal, NavItems, Socials } from "@/config/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className=" bg-primary mt-12 md:p-8 md:px-20 text-white md:mb-4 md:rounded-xl">
            <div className="flex md:justify-between md:flex-wrap p-4 md:p-0 md:flex-row flex-col md:items-center">
                <div className="flex md:flex-row flex-col-reverse mt-12 md:mt-0 items-center gap-6 md:gap-12">
                    <div className="flex flex-col gap-12 justify-center items-center text-center">
                        <Link href={"https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja"} className="flex md:hidden md:text-sm lg:text-lg bg-white p-4 rounded-full text-primary gap-3 font-bold items-center justify-center">
                            Install Extension <ArrowRightRed width="20" height="21" />{" "}
                        </Link>
                        <h1 className=" font-bold md:text-4xl text-2xl">SAVE ON CONCERTS!</h1>
                        <div className="flex items-center gap-3">
                            <LogoWhite width="120" height="30" />
                            <span className=" text-[9px]  md:text-sm">Copyright © 2024 ConcertPal. All rights reserved.</span>
                        </div>
                    </div>
                </div>
                <Link href={"https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja"} className=" hidden md:flex md:text-sm lg:text-lg bg-white p-4 rounded-full text-primary gap-3 font-bold items-center justify-center">
                    Install Extension <ArrowRightRed width="20" height="21" />
                </Link>
                <div className="grid lg:grid-cols-3 gap-7 md:gap-12 grid-cols-2 ">
                    <div className="flex flex-col items-left mt-9 lg:mt-0">
                        <h2>QUICK LINKS:</h2>
                        <ul className="flex flex-col gap-4 mt-4 font-light">
                            {NavItems.map((item, _) => (
                                <Link href={item.link} key={item.link}>
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-left mt-9 lg:mt-0">
                        <h2>LEGAL:</h2>
                        <ul className="flex flex-col gap-4 mt-4 font-light">
                            {Legal.map((item, _) => (
                                <Link href={item.link} key={item.name}>
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-left mt-9 lg:mt-0">
                        <h2>SOCIALS:</h2>
                        <ul className="flex flex-col gap-4 mt-4 font-light">
                            {Socials.map((item, _) => (
                                <Link href={item.link} key={item.name} target="_blank">
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
