"use client";
import Image from "next/image";
import React, { useState } from "react";
import { NavItems } from "@/lib/constants";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo, MenuIcon } from "@/assets";
import ArrowRightWhite from "@/assets/Arrow-right-white";
import { motion } from "framer-motion";
import { FullLogo } from "@/assets/logo";
const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState<boolean>(false);
    return (
        <nav className=" sticky top-0 backdrop-blur-sm bg-background z-[70]">
            <div className="flex relative p-4 justify-between items-center md:max-w-[1440px] md:m-auto">
                <Link href={"/"}>
                    <FullLogo width="180px" height="50px" />
                </Link>
                <ul className=" hidden lg:flex items-center gap-12 justify-between lg:mr-14">
                    {NavItems.map((item, i) => (
                        <Link href={item.link} key={i} className=" uppercase text-primary font-semibold">
                            {item.name}
                        </Link>
                    ))}
                </ul>
                <motion.div whileHover={{ scale: 1.1 }} className="hidden lg:flex gap-7 items-center">
                    <Link href={"https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja"} target="_blank" className=" rounded-xl bg-primary text-white px-6 py-2 flex items-center gap-2">
                        Install
                    </Link>
                </motion.div>
                <div className="lg:hidden" onClick={() => setOpenNavbar(!openNavbar)}>
                    <Menu size={38} className="text-primary" />
                </div>

                <div className={`fixed lg:hidden bg-white w-full h-screen left-0 right-0 ease-in-out duration-300 ${openNavbar ? "top-0" : "-top-[3000px]"}`}>
                    <div className="flex justify-between items-center p-3">
                        <Link href={"/"}>
                            <Logo width="180px" height="50px" />
                        </Link>
                        <X size={35} onClick={() => setOpenNavbar(!openNavbar)} className="text-primary" />
                    </div>
                    <hr className=" bg-primary h-1 w-full" />
                    <ul className="flex flex-col  gap-8 p-4 font-bold mt-12 justify-between">
                        {NavItems.map((item, i) => (
                            <Link href={item.link} key={i} onClick={() => setOpenNavbar(!openNavbar)}>
                                {item.name}
                            </Link>
                        ))}
                        <Link href={"https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja"} target="_blank" className=" text-center justify-center  rounded-full bg-primary text-white px-6 py-2 flex items-center gap-2">
                            Install <ArrowRightWhite width="20" height="15" />
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
