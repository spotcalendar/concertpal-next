"use client";

import { ArrowRightRed } from "@/assets";
import Toast from "@/utils/toast";
import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
const NeedHelp = () => {
    const [isSendMessage, setIsSendMessage] = useState<boolean>(false);
    const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const handleSendMessage = async () => {
        if (message.length <= 0) {
            Toast.ErrorShowToast("Issue should be greater than 1 character");
            return;
        }
        setIsSendingMessage(true);
        try {
            const req = await axios.post("/api/contact-us", { message: message });
            const res = req.data;
            console.log(res);
            setIsSendMessage(true);
            setMessage("");
            Toast.SuccessshowToast(res?.response?.data?.message || "Issue received!");
            setTimeout(() => {
                setIsSendMessage(false);
            }, 3000);
        } catch (error: any) {
            console.error("Error sending email:", error);
            Toast.ErrorShowToast(error?.response?.data?.error || "Error sending issue!");
        } finally {
            setIsSendingMessage(false);
        }
    };
    return (
        <div className=" mt-12 mb-20 flex  flex-col md:gap-8 gap-4 w-full md:px-12 px-4 m-auto lg:w-[69%] lg:m-auto" id="get-help">
            <h1 className="text-primary text-3xl font-bold mb-8 text-center md:mt-12">Need help?</h1>
            <span className=" text-lg font-medium">Tell us more and we’ll try to find the best solution for you:</span>
            <div className="flex items-center md:flex-row gap-4 w-full justify-center flex-col-reverse">
                <div className="border-2 border-primary w-full rounded-lg p-2 flex gap-3 justify-between items-center">
                    <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder={isSendMessage ? "Thank You" : "Describe Your Issue"} className=" w-full placeholder:text-primary focus:outline-none focus:border-none text-primary" />
                    <div onClick={handleSendMessage}>
                        {isSendingMessage ? (
                            <ClipLoader color="#EB1F50" size={20} />
                        ) : (
                            <div className=" cursor-pointer">
                                <ArrowRightRed width="20" height="21" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeedHelp;
