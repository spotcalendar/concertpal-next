"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Logo, Compare } from "@/assets";
const Steps = () => {
    return (
        <AnimatePresence>
            <motion.div id="how-it-works" className="z-50 flex w-full  items-center justify-center p-4 px-3 pt-10 font-base text-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
                <Tabs defaultValue="spotify-login" className="flex w-full max-w-[1150px] flex-col items-center py-8 p-0">
                    <TabsList className=" rounded-xl md:rounded-lg border-2 border-primary   bg-white py-6 md:py-7 px-0">
                        <TabsTrigger className="font-semibold  min-w-[100px] duration-100 ease-in-out  text-xs md:text-lg py-4  px-8 md:px-16  rounded-lg text-primary" value="spotify-login">
                            Compare
                        </TabsTrigger>
                        <TabsTrigger className="font-semibold  min-w-[100px]   duration-100 ease-in-out  text-xs md:text-lg py-4 px-4 md:px-16  rounded-lg text-primary" value="locale-info">
                            Track
                        </TabsTrigger>
                        <TabsTrigger className="font-semibold  min-w-[100px]  duration-100 ease-in-out  text-xs md:text-lg py-4 px-4 md:px-16   rounded-lg text-primary" value="connect-google">
                            Notify
                        </TabsTrigger>
                    </TabsList>
                    <div className="min-h-fit w-full max-w-[1200px] md:min-h-[600px]">
                        <TabsContent value="spotify-login" className="flex flex-col text-gray-300 ">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <div className="mt-12 md:mt-0  w-full flex text-center justify-center items-center flex-col">
                                    <div className="mt-5 bg-white shadow-xl p-4 rounded-lg ">
                                        <Image src={"https://dt8dif07ddviy.cloudfront.net/compare.png"} width={1000} alt="step 1" height={500} className="rounded-2xl" />
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="locale-info" className="flex flex-col text-gray-300">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <div className=" w-full  mt-7  md:mt-0 flex text-center justify-center items-center flex-col">
                                    <div className="mt-5 bg-white shadow-xl p-4 rounded-lg ">
                                        <Image src={"https://dt8dif07ddviy.cloudfront.net/track.png"} width={1000} alt="step 1" height={500} className="rounded-2xl" />
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="connect-google" className="flex flex-col text-gray-300">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <div className=" w-full  mt-7  md:mt-0 flex text-center justify-center items-center flex-col">
                                    <div className="mt-5 bg-white shadow-xl p-4 rounded-lg ">
                                        <Image src={"https://dt8dif07ddviy.cloudfront.net/noti.png"} width={1000} alt="step 1" height={500} className="rounded-2xl" />
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="event-fetch" className="flex flex-col text-gray-300">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <Logo /> <span>Finally, ConcertCal searches among various ticket sellers to find the best prices for you. Enjoy the thrill of live music without breaking the bank, with the best deals on tickets for your favorite artists&apos; events.</span>
                                <motion.img src="/Step4.png" className="md:mt-10 rounded-2xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.4 }} />
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="calendar-update" className="flex flex-col text-gray-300">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <Logo />

                                <span>Get notified when prices decrease. Always stay on top of when the lowest prices appear</span>
                                <motion.img src="/Step5.png" className="md:mt-10 rounded-2xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.4 }} />
                            </motion.div>
                        </TabsContent>
                    </div>
                </Tabs>
            </motion.div>
        </AnimatePresence>
    );
};

export default Steps;
