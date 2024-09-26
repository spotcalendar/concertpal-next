import React from "react";
import { Star, Mobilearrow, Ticketmaster, Stubhub, SeatGeek, LiveNation, Ticketweb, VividSeats, Arrow } from "@/assets";
import Link from "next/link";
import Steps from "@/components/Steps";
import TestimonialsSlider from "@/components/Testiomonials";
import NeedHelp from "@/components/NeedHelp";
import Chrome from "@/assets/chrome";
import InformationIcon from "@/assets/information_icon";
const page = () => {
    return (
        <section className="flex flex-col w-full justify-center items-center min-h-screen relative mt-28">
            <div className="flex p-2 md:p-0 flex-col items-center md:gap-16 gap-8">
                <h1 className="text-5xl font-bold tracking-normal md:text-center">YOUR TICKET TO CONCERT SAVINGS!</h1>
                <div className="md:text-center w-full  md:flex md:justify-center text-lg   text-left">
                    <p className="max-w-[72%] md:w-full font-semibold text-gray-900">
                        Find the cheapest tickets to see your favorite artists - with just one click! Compare, track, and get notified about the lowest prices with <span className=" text-primary">Concert</span>Pal today.
                    </p>
                    <div className="absolute top-24 rotate-12 w-78 right-0 sm:hidden">
                        <Mobilearrow height="280" />
                    </div>
                </div>
                <div className=" relative ">
                    <div className="flex justify-center items-center flex-col">
                        <Link href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja" className=" bg-primary font-semibold text-white p-4 rounded-full px-7 text-xl flex items-center gap-3">
                            <Chrome />
                            Add to Chrome - It&apos;s Free!
                        </Link>
                        <div className="flex gap-6 justify-center items-center w-full mt-2">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((index, _) => (
                                    <Star key={index} />
                                ))}
                            </div>
                            <h1 className=" text-sm ">
                                <b>5/5</b> on Chrome Web Store
                            </h1>
                        </div>
                        <div className=" mt-3 flex items-center gap-2">
                            <InformationIcon />
                            Committed to your privacy
                        </div>
                    </div>
                    <div className=" absolute right-[24rem] w-[42rem]  hidden lg:block top-0 ">
                        <Arrow width="720" height="280" />
                    </div>
                </div>
            </div>
            <div className=" w-full">
                <Steps />
            </div>

            <div className="flex flex-col gap-5 p-2 md:p-0 items-center w-full ">
                <h1 className=" text-center md:text-left text-2xl md:text-3xl text-primary font-semibold md:mt-0 tracking-wide">Synced with all your favorite ticketing platforms.</h1>
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
            <div className="flex md:mb-8  w-full p-4 flex-wrap md:max-w-[1440px] md:m-auto justify-between items-center gap-4 md:gap-0">
                <div className="flex flex-col gap-2 font-bold lg:mt-14 ">
                    <h1 className="md:text-xl text-xl lg:mt-5">Ready to start saving?</h1>
                    <h1 className=" text-2xl md:text-3xl text-primary">Add ConcertPal to Chrome.</h1>
                </div>

                <a href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja" target="_blank" className="lg:mt-10 p-3 px-7 bg-primary text-md rounded-md text-white font-semibold">
                    Get Started
                </a>
            </div>
        </section>
    );
};

export default page;
