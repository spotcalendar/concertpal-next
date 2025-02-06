import { ExtensionPrompt } from "@/components/ExtensionPrompt";
import { FullLogo } from "@/assets/logo";
import Link from "next/link";
import Carousel from "@/components/Carousel";

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="bg-white px-6 py-3">
                <Link href="/" className="inline-block">
                    <FullLogo width="180" height="50" />
                </Link>
            </header>
            <div className="flex-1 bg-[#F4F5FF]">
                <main className="h-full md:pt-20 pt-0">
                    <Carousel />
                </main>
            </div>
            {/* Extension prompt can be uncommented when ready */}
            {/* <Link href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja">
        <ExtensionPrompt />
      </Link> */}
        </div>
    );
}
