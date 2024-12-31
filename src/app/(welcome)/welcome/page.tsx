// import { ExtensionPrompt } from "@/components/ExtensionPrompt";
// import { FullLogo } from "@/assets/logo";
// import Link from "next/link";

// export default function Page() {
//     return (
//         <div className="flex flex-col h-screen overflow-hidden">
//             <header className="border-b bg-white px-6 py-2">
//                 <Link href={"/"}>
//                     <FullLogo width="180px" height="50px" />
//                 </Link>
//             </header>
//             <div className="flex-1 bg-gradient-to-r from-primary/20 to-primary/20 overflow-hidden">
//                 <main className="h-full flex items-start justify-center">
//                     <div className="max-w-5xl w-full px-6">
//                             <iframe width="80%" height="450" src="https://www.youtube.com/embed/pdChLB0GKfw" frameBorder="0" className="rounded-lg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

//                     </div>
//                 </main>
//             </div>
//             <ExtensionPrompt />
//         </div>
//     );
// }
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
            <div className="flex-1  bg-[#F4F5FF] overflow-hidden">
                <main className="h-full pl-28 pt-12">
                    <div className="max-w-5xl ">
                        <Carousel />
                    </div>
                </main>
            </div>
            <Link href="https://chromewebstore.google.com/detail/concertpal/nnbeepdmhiimdmeifpkbeinmbafaedja">
                <ExtensionPrompt />
            </Link>
        </div>
    );
}
