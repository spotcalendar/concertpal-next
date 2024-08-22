import React from "react";
import { Star, Mobilearrow, Ticketmaster, Stubhub, SeatGeek, LiveNation, Ticketweb, VividSeats, Arrow } from "@/assets";
import Link from "next/link";
import Steps from "@/components/Steps";
import TestimonialsSlider from "@/components/Testiomonials";
import NeedHelp from "@/components/NeedHelp";
import Chrome from "@/assets/chrome";
const page = () => {
    return (
        <section className="flex flex-col w-full justify-center items-center min-h-screen mt-28">
            <div className="flex p-2 md:p-0 flex-col items-center md:gap-16 gap-8">
                <h1 className="text-5xl font-bold tracking-normal md:text-center">Your Ticket to Concert Savings.</h1>
                <div className="md:text-center w-full  md:flex md:justify-center text-lg relative  text-left">
                    <p className="max-w-[70%] md:w-full ">
                        Find the cheapest tickets to see your favorite artists- with just one click! <br /> Compare, track, and get notified about the lowest prices with <span className=" text-primary">Concert</span>Pal today.
                    </p>
                    <div className="absolute -top-16 rotate-12 w-28 right-0 sm:hidden">
                        <Mobilearrow height="280" />
                    </div>
                </div>
                <div className=" relative ">
                    <div className="flex justify-center items-center flex-col">
                        <Link href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja" className=" bg-primary text-white p-4 rounded-full px-14 flex items-center gap-3">
                            <Chrome />
                            Add to Chrome - It&apos;s Free!
                        </Link>
                        <div className="flex gap-6 justify-center items-center w-full mt-2">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((index, _) => (
                                    <Star key={index} />
                                ))}
                            </div>
                            <h1 className=" text-sm">
                                <b>4.9/5</b> on Chrome Web Store
                            </h1>
                        </div>
                    </div>
                    <div className=" absolute right-[24rem] w-[42rem]  hidden lg:block top-0 ">
                        <Arrow width="650" height="300" />
                    </div>
                </div>
            </div>
            <div className=" w-full">
                <Steps />
            </div>

            <div className="flex flex-col gap-5 p-2 md:p-0 items-center w-full " id="how-it-works">
                <h1 className=" text-center md:text-left text-2xl md:text-3xl text-primary font-semibold md:mt-12 tracking-wide">Synced with all your favorite ticketing platforms:</h1>
                <div className="flex gap-14 md:flex-row flex-col justify-center items-center mt-8 flex-wrap">
                    <Ticketmaster />
                    <Stubhub />
                    <SeatGeek />
                    <LiveNation />
                    <Ticketweb />
                    <VividSeats />
                </div>
            </div>
            <hr className=" bg-primary h-1 w-full mt-12" />

            <TestimonialsSlider />

            <hr className=" bg-primary h-1 w-full mt-6" />
            <NeedHelp />
        </section>
    );
};

export default page;
