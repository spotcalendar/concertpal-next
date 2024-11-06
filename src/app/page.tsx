import React from "react";
import { Star, Mobilearrow, Ticketmaster, Stubhub, SeatGeek, LiveNation, Ticketweb, VividSeats, Arrow } from "@/assets";
import Link from "next/link";
import Steps from "@/components/Steps";
import TestimonialsSlider from "@/components/Testiomonials";
import Chrome from "@/assets/chrome";
import InformationIcon from "@/assets/information_icon";
import { Vector1, Vector2 } from "@/assets/hero-vector";
import { Check, CheckCircle } from "lucide-react";

const Page = () => {
    const messages = ["Saves money", "Saves time", "Find better deals"];
    return (
        <section className="flex flex-col w-full justify-center items-center min-h-screen relative pt-10 md:pt-28 bg-gradient-to-b from-primary-foreground/10 via-transparent to-transparent">
            <div className="flex flex-col items-center gap-8 md:gap-10 p-2 md:p-0">
                <div className="flex justify-center items-center gap-4 flex-wrap">
                    {messages.map((message, index) => (
                        <h1 key={index} className="text-sm flex justify-center items-center  gap-2 bg-primary-foreground text-white font-bold tracking-normal text-center px-3 py-2 rounded-full">
                            <CheckCircle size={12} /> {message}
                        </h1>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl relative font-bold tracking-normal text-primary-foreground text-center">
                    <Vector1 className="hidden md:inline-block absolute left-[-1.3em] top-[5px]" />
                    YOUR TICKET TO CONCERT SAVINGS!
                    <Vector2 className="hidden md:inline-block absolute  top-[-1em] right-[-1em]" />
                </h1>
                <div className="w-full text-md md:text-lg text-gray-900 md:text-center text-left font-semibold text-primary-foreground md:flex md:justify-center">
                    <p className="md:max-w-[67%] w-full text-center">
                        Find the cheapest tickets to see your favorite artists - with just one click! Compare, track, and get notified about the lowest prices with <span className="text-primary">ConcertPal</span> today.
                    </p>
                </div>
                <div className="relative">
                    <div className="flex flex-col items-center">
                        <Link href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja" className="bg-primary text-white font-semibold text-xl p-4 rounded-xl px-7 flex items-center gap-3">
                            <Chrome />
                            Add to Chrome - It&apos;s Free!
                        </Link>
                        <div className="flex gap-6 items-center justify-center w-full mt-2">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <Star key={index} />
                                ))}
                            </div>
                            <h1 className="text-sm">
                                <b>5/5</b> on Chrome Web Store
                            </h1>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                            <InformationIcon />
                            Committed to your privacy
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <Steps />
            </div>

            <div className="flex flex-col items-center gap-5 w-full p-2 md:p-0">
                <h1 className="text-4xl md:text-5xl font-semibold text-center md:max-w-[40%] mb-4 tracking-wide text-black/80">
                    Synced with all your <span className="text-primary">favorite ticketing</span> platforms.
                </h1>
                <div className="flex flex-wrap gap-14 justify-center items-center mt-8">
                    <Ticketmaster />
                    <Stubhub />
                    <SeatGeek />
                    <LiveNation />
                    <Ticketweb />
                    <VividSeats />
                </div>
            </div>

            <TestimonialsSlider />

            <div
                className="h-full w-[1400px]  mt-8 rounded-lg hidden md:inline-block"
                style={{
                    backgroundImage: "url(/image.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex   justify-between items-center h-full px-10 py-16 text-white">
                    <div>
                        <h2 className="text-2xl font-medium mb-4">Ready to start saving?</h2>
                        <p className="text-5xl mb-6 font-semibold">Add ConcertPal to Chrome now!</p>
                    </div>
                    <div>
                        <Link href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja" className="bg-white text-primary font-semibold p-3 rounded-xl px-6 text-lg">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
