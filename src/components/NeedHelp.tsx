"use client";
import { arrowRightRed } from "@/assets";
import Image from "next/image";
import React from "react";

const NeedHelp = () => {
    const [isSendMessage, setIsSendMessage] = React.useState(false);
    const handleSendMessage = () => {
        setIsSendMessage(!isSendMessage);
    };
    return (
        <div className=" mt-12 flex  flex-col md:gap-8 gap-4 w-full md:px-12 px-4 m-auto lg:w-[90%] lg:m-auto" id="get-help">
            <h1 className="text-primary text-3xl font-bold mb-8 text-center md:mt-12">NEED HELP?</h1>
            <span className=" text-lg font-medium">Tell us more and we’ll try to find the best solution for you.</span>
            <div className="flex items-center md:flex-row gap-4 w-full justify-center flex-col-reverse">
                <div className="border-2 border-primary w-full rounded-lg p-2 flex gap-3 justify-between items-center">
                    <input type="text" placeholder="Describe Your Issue" className=" placeholder:text-primary w-[90%] focus:outline-none focus:border-none text-primary" />
                    <Image src={arrowRightRed} alt="arrow-right" onClick={handleSendMessage}></Image>
                </div>
                {isSendMessage && <span className="text-primary">Sent</span>}
            </div>
        </div>
    );
};

export default NeedHelp;
