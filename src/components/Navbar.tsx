import Image from "next/image";
import React from "react";
import { logo, menu, arrowRightWhite } from "@/assets";
import { NavItems } from "@/config/navbar";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className=" sticky top-0 backdrop-blur-sm z-[70]">
            <div className="flex p-4 justify-between items-center md:max-w-[1315px] md:m-auto">
                <Link href={"/"}>
                    <Image src={logo} height={150} width={150} alt="logo" priority></Image>
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
                        Install <Image src={arrowRightWhite} height={20} width={20} alt="arrow-right" />
                    </Link>
                </div>
                <Image src={menu} alt="menu-icon" height={26} width={26} className=" lg:hidden" />
            </div>
            <hr className=" bg-primary h-1 w-full" />
        </nav>
    );
};

export default Navbar;
