import { ArrowRightRed, LogoWhite } from "@/assets";
import { Legal, NavItems, Socials } from "@/config/navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className=" bg-primary mt-12 md:p-8 w-full   text-white ">
            <div className="flex md:justify-between   md:max-w-[1315px] md:m-auto p-4 md:p-0 md:flex-row flex-col md:items-center">
                <div className="flex md:flex-row flex-wrap flex-col-reverse mt-12 md:mt-0 items-center gap-6 xl:gap-12 md:gap-6">
                    <div className="flex flex-col gap-4 justify-center items-center text-center">
                        <Link href={"https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja"} className="flex md:hidden md:text-sm lg:text-lg bg-white p-4 rounded-full text-primary gap-3 font-bold items-center justify-center">
                            Install Extension <ArrowRightRed width="20" height="18" />{" "}
                        </Link>
                        <div className="flex flex-col gap-12  w-full justify-center items-center">
                            <Link href={"https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja"} className=" hidden md:flex xl:hidden md:w-72 md:text-lg lg:w-96  xl:text-sm bg-white p-4 rounded-full text-primary gap-3 font-bold items-center justify-center">
                                Install Extension <ArrowRightRed width="20" height="21" />
                            </Link>
                            <h1 className=" font-bold lg:text-4xl text-2xl">SAVE ON CONCERTS!</h1>
                            <div className="flex items-center  gap-3 md:gap-1">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center font-bold gap-2">
                                        <LogoWhite width="40" height="30" />
                                        <h1>
                                            Concert<span className=" text-black">Pal</span>
                                        </h1>
                                    </div>
                                </div>
                                <Link href={"https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja"} className=" hidden md:text-sm lg:text-lg bg-white p-4 rounded-full text-primary gap-3 font-bold w-52 items-center justify-center">
                                    Install Extension <ArrowRightRed width="20" height="21" />
                                </Link>
                                <span className=" text-[8.8px]  md:text-[9px]">Copyright © 2024 ConcertPal. All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href={"https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja"} className=" hidden xl:flex md:text-sm lg:text-lg bg-white p-4 rounded-full text-primary gap-3 font-bold items-center justify-center">
                    Install Extension <ArrowRightRed width="20" height="21" />
                </Link>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-3 ">
                    <div className="flex flex-col items-left mt-9 lg:mt-0">
                        <h2>QUICK LINKS</h2>
                        <ul className="flex flex-col gap-4 mt-4 font-light">
                            {NavItems.map((item, _) => (
                                <Link href={item.link} key={item.link}>
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-left mt-9 lg:mt-0">
                        <h2>LEGAL</h2>
                        <ul className="flex flex-col gap-4 mt-4 font-light">
                            {Legal.map((item, _) => (
                                <Link href={item.link} key={item.name}>
                                    {item.name}
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col items-left mt-9 lg:mt-0">
                        <h2>SOCIALS</h2>
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
