"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Logo, Compare } from "@/assets";
const Steps = () => {
    return (
        <AnimatePresence>
            <motion.div className="z-50 flex w-full  items-center justify-center p-4 px-3 pt-10 font-base text-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }}>
                <Tabs defaultValue="spotify-login" className="flex w-full max-w-[1150px] flex-col items-center py-8">
                    <TabsList className=" rounded-full border-2 border-primary bg-transparent p-0 ">
                        <TabsTrigger className="font-medium text-xs md:text-lg py-3 md:py-1 px-4  uppercase  rounded-full text-primary" value="spotify-login">
                            Compare
                        </TabsTrigger>
                        <TabsTrigger className="font-medium text-xs md:text-lg  py-3 md:py-1 px-4 uppercase rounded-full text-primary" value="locale-info">
                            Track
                        </TabsTrigger>
                        <TabsTrigger className="font-medium text-xs md:text-lg py-3 md:py-1 px-4 uppercase rounded-full text-primary" value="connect-google">
                            {" "}
                            Notify
                        </TabsTrigger>
                    </TabsList>
                    <div className="min-h-[500px] w-full max-w-[1200px] md:min-h-[600px]">
                        <TabsContent value="spotify-login" className="flex flex-col text-gray-300 ">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <div className=" md:p-12 mt-12 md:mt-0  w-full flex text-center justify-center items-center flex-col">
                                    <span className=" w-full  font-normal text-black">
                                        Save time as we compare prices across top ticketing platforms for you. Find the <b className=" text-primary">best price</b> in seconds.
                                    </span>
                                    <div className="shadow-[0_20px_100px_-15px_rgba(244,63,94,.6)] mt-5">
                                        <Compare classname=" w-[23rem] md:w-[600px] lg:w-[700px] xl:w-[1000px]" />
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="locale-info" className="flex flex-col text-gray-300">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <div className="md:p-12 w-full  mt-7  md:mt-0 flex text-center justify-center items-center flex-col">
                                    <span className=" w-full  font-normal text-black">Track tickets price history to buy at the lowest price possible. Split screen to see a side-by-side comparison too!</span>
                                    <div className="shadow-[0_20px_100px_-15px_rgba(244,63,94,.6)] mt-5 ">
                                        <Image src="/step2.png" width={1000} alt="step 2" height={500} />
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="connect-google" className="flex flex-col text-gray-300">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <div className="md:p-12 w-full  mt-7  md:mt-0 flex text-center justify-center items-center flex-col">
                                    <span className=" w-full  font-normal text-black">Get notified when prices decrease. Always stay on top of when the lowest prices are!</span>
                                    <div className="shadow-[0_20px_100px_-15px_rgba(244,63,94,.6)] mt-5 ">
                                        <Image src="/step4.png" width={1000} alt="step 2" height={500} />
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent>

                        {/* <TabsContent value="connect-google" className="flex flex-col text-gray-300">
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-start justify-start gap-4 text-gray-300">
                                <div className=" w-full flex text-center justify-center items-center flex-col">
                                    <span className="md:p-12  mt-7 md:mt-0  w-full font-normal text-black">Get notified when prices decrease. Always stay on top of when the lowest prices are!</span>
                                    <div className="shadow-[0_20px_100px_-15px_rgba(244,63,94,.6)] mt-5 md:mt-0">
                                        <Image src="/step4.png" width={1000} alt="step 2" height={500} />
                                    </div>
                                </div>
                            </motion.div>
                        </TabsContent> */}

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
