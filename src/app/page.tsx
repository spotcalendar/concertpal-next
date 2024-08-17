import React from "react";
import { chrome, arrow, star, ticketMaster, stubhub, seatGeek, liveNation, vividSeats, ticketweb, mobilearrow } from "@/assets";
import Link from "next/link";
import Image from "next/image";
import Steps from "@/components/Steps";
import TestimonialsSlider from "@/components/Testiomonials";
import NeedHelp from "@/components/NeedHelp";
const page = () => {
    return (
        <section className="flex flex-col w-full justify-center items-center min-h-screen mt-28">
            <div className="flex p-2 md:p-0 flex-col items-center md:gap-16 gap-8">
                <h1 className="text-5xl font-bold tracking-normal">YOUR TICKET TO CONCERT SAVINGS!</h1>
                <div className="md:text-center w-full text-left text-lg relative">
                    <p className=" max-w-[70%]">
                        Find the cheapest tickets to see your favorite artists- with just one click! <br /> Compare, track, and get notified about the lowest prices with <span className=" text-primary">Concert</span>Pal today.
                    </p>
                    <Image src={mobilearrow} alt="arrow" className=" absolute -top-16 rotate-12 w-28 right-0 lg:hidden" />
                </div>
                <div className=" relative ">
                    <div className="flex justify-center items-center flex-col">
                        <Link href="/add-to-chrome" className=" bg-primary text-white p-4 rounded-full px-14 flex items-center gap-3">
                            <Image src={chrome} alt="chrome-icon" width={32} height={32} />
                            Add to Chrome - It&apos;s Free!
                        </Link>
                        <div className="flex gap-6 justify-center items-center w-full mt-2">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((index, _) => (
                                    <Image src={star} alt="star" key={index} width={16} height={16}></Image>
                                ))}
                            </div>
                            <h1 className=" text-sm">
                                <b>4.9/5</b> on Chrome Web Store
                            </h1>
                        </div>
                    </div>
                    <div className=" absolute right-[24rem] w-[42rem]  hidden lg:block top-3 ">
                        <Image src={arrow} alt="arrow" className=" w-full" />
                    </div>
                </div>
            </div>
            <div className=" w-full md:mt-28">
                <Steps />
            </div>

            <div className="flex flex-col gap-5 p-2 md:p-0 items-center w-full " id="how-it-works">
                <h1 className=" text-center md:text-left text-2xl md:text-3xl text-primary font-semibold md:mt-12 tracking-wide">SYNCED WITH ALL YOUR FAVORITE TICKETING PLATFORMS...</h1>
                <div className="flex gap-14 md:flex-row flex-col justify-center items-center mt-8 flex-wrap">
                    <Image src={ticketMaster} alt="ticket-master" width={240} height={240} />
                    <Image src={stubhub} alt="stub hub" width={120} height={120} />
                    <Image src={seatGeek} alt="seat geek" width={100} height={100} />
                    <Image src={liveNation} alt="live nation" width={200} height={200} />
                    <Image src={ticketweb} alt="ticketeb" width={200} height={200} />
                    <Image src={vividSeats} alt="vividSeats" width={200} height={200} />
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
