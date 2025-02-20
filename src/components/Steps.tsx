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
                <Tabs defaultValue="Compare" className="flex w-full max-w-[1150px] flex-col items-center py-8 p-0">
                    <TabsList className=" rounded-xl md:rounded-lg border-2 border-primary   bg-white py-6 md:py-7 px-0">
                        <TabsTrigger className="font-semibold  min-w-[100px] duration-100 ease-in-out  text-xs md:text-lg py-4  px-8 md:px-16  rounded-lg text-primary" value="Compare">
                            Compare
                        </TabsTrigger>
                        <TabsTrigger className="font-semibold  min-w-[100px]  duration-100 ease-in-out  text-xs md:text-lg py-4 px-4 md:px-16   rounded-lg text-primary" value="Track">
                            Track
                        </TabsTrigger>
                        <TabsTrigger className="font-semibold  min-w-[100px]   duration-100 ease-in-out  text-xs md:text-lg py-4 px-4 md:px-16  rounded-lg text-primary" value="Deal-Reveal">
                            Deal Reveal
                        </TabsTrigger>
                        <TabsTrigger className="font-semibold  min-w-[100px]  duration-100 ease-in-out  text-xs md:text-lg py-4 px-4 md:px-16   rounded-lg text-primary" value="Notify">
                            Notify
                        </TabsTrigger>
                    </TabsList>
                    <div className="min-h-fit w-full max-w-[1200px] md:min-h-[600px]">
                        <TabsContent value="Compare" className="flex flex-col text-gray-300 ">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <div className="mt-12 md:mt-0  w-full flex text-center justify-center items-center flex-col">
                                    <p className="text-gray-700 py-4 font-medium text-center max-w-[900px] leading-7">Find the best price for any ticket. Just click any seat while you’re browsing a concert and ConcertPal will check its price on every ticketing website, then link you straight to the cheapest one.</p>

                                    <div className="mt-5 bg-white shadow-xl p-4 rounded-lg ">
                                        <Image src={"https://dt8dif07ddviy.cloudfront.net/compare.png"} width={1000} alt="step 1" height={500} className="rounded-2xl" />
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="Track" className="flex flex-col text-gray-300">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <div className=" w-full  mt-7  md:mt-0 flex text-center justify-center items-center flex-col">
                                    <p className="text-gray-700 py-4 font-medium text-center max-w-[900px] leading-7">Toggle the switch, and ConcertPal will track your seat&apos;s price, monitor fluctuations across ticketing sites, and display historical price trends, ensuring you get the best deal available.</p>{" "}
                                    <div className="mt-5 bg-white shadow-xl p-4 rounded-lg ">
                                        <Image src={"https://dt8dif07ddviy.cloudfront.net/track.png"} width={1000} alt="step 1" height={500} className="rounded-2xl" />
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="Deal-Reveal" className="flex flex-col text-gray-300 ">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <div className="mt-12 md:mt-0  w-full flex text-center justify-center items-center flex-col">
                                    <p className="text-gray-700  font-medium text-center max-w-[900px] leading-7 ">Gain an insider advantage on presales before they begin. ConcertPal reveals ticket prices, demand trends, and purchase limits ahead of any presale, helping you secure the best deal.</p>
                                    <div className="mt-5 bg-white shadow-xl p-4 rounded-lg ">
                                        <Image src={"https://dt8dif07ddviy.cloudfront.net/deal.png"} width={1000} alt="step 1" height={500} className="rounded-2xl" />
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="Notify" className="flex flex-col text-gray-300">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <div className=" w-full  mt-7  md:mt-0 flex text-center justify-center items-center flex-col">
                                    <p className="text-gray-700 py-0 font-medium text-center max-w-[900px] leading-7">Never miss a price drop again! ConcertPal will alert you whenever a ticket you&apos;re tracking experiences a significant price reduction, ensuring you get the best deal.</p>
                                    <div className="mt-5 bg-white shadow-xl p-4 rounded-lg ">
                                        <Image src={"https://dt8dif07ddviy.cloudfront.net/noti.png"} width={1000} alt="step 1" height={500} className="rounded-2xl" />
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>
                    </div>
                </Tabs>
            </motion.div>
        </AnimatePresence>
    );
};

export default Steps;

//test
