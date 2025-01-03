import { ExtensionPrompt } from "@/components/ExtensionPrompt";
import { FullLogo } from "@/assets/logo";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Chrome from "@/assets/chrome";

export default function Page() {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <header className=" bg-white px-6 py-2 ">
                <Link href={"/"}>
                    <FullLogo width="8px" height="4px" />
                </Link>
            </header>
            <div className="flex-1 bg-[#F4F5FF] overflow-hidden">
                <main className="h-full pt-12">
                    <Carousel />
                </main>
            </div>
            {/* <Link href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja">
                <ExtensionPrompt />
            </Link> */}
        </div>
    );
}
// test3