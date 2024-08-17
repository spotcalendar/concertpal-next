"use client";
import Image from "next/image";
import React, { useState } from "react";
import { NavItems } from "@/config/navbar";
import Link from "next/link";
import { X } from "lucide-react";
import { Logo, MenuIcon } from "@/assets";
import ArrowRightWhite from "@/assets/Arrow-right-white";
const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState<boolean>(false);
    return (
        <nav className=" sticky top-0 backdrop-blur-sm bg-white z-[70]">
            <div className="flex relative p-4 justify-between items-center md:max-w-[1315px] md:m-auto">
                <Link href={"/"}>
                    <Logo width="150" height="30" />
                </Link>
                <ul className=" hidden lg:flex items-center gap-12 justify-between">
                    {NavItems.map((item, i) => (
                        <Link href={item.link} key={i} className=" uppercase text-primary">
                            {item.name}
                        </Link>
                    ))}
                </ul>
                <div className="hidden lg:flex gap-7 items-center">
                    <Link href={"/login"} className=" border border-primary text-primary rounded-full text-center px-6 py-2">
                        Log In
                    </Link>
                    <Link href={"/install"} className=" rounded-full bg-primary text-white px-6 py-2 flex items-center gap-2">
                        Install <ArrowRightWhite width="20" height="15" />
                    </Link>
                </div>
                <div className=" lg:hidden" onClick={() => setOpenNavbar(!openNavbar)}>
                    <MenuIcon width="28" height="28" />
                </div>

                <div className={`fixed lg:hidden bg-white w-full h-screen left-0 right-0 duration-200 ${openNavbar ? "top-0" : "-top-[3000px]"}`}>
                    <div className="flex justify-between items-center p-3">
                        <Link href={"/"}>
                            <Logo />
                        </Link>
                        <X size={35} onClick={() => setOpenNavbar(!openNavbar)} className=" text-primary" />
                    </div>
                    <hr className=" bg-primary h-1 w-full" />
                    <ul className="flex flex-col  gap-8 p-4 font-bold mt-12 justify-between">
                        {NavItems.map((item, i) => (
                            <Link href={item.link} key={i} onClick={() => setOpenNavbar(!openNavbar)}>
                                {item.name}
                            </Link>
                        ))}

                        <Link href={"/login"} className=" border border-primary text-primary rounded-full text-center px-6 py-2">
                            Log In
                        </Link>
                        <Link href={"/install"} className=" text-center justify-center  rounded-full bg-primary text-white px-6 py-2 flex items-center gap-2">
                            Install <ArrowRightWhite width="20" height="15" />
                        </Link>
                    </ul>
                </div>
            </div>

            <hr className=" bg-primary h-1 w-full" />
        </nav>
    );
};

export default Navbar;
