import Image from "next/image";
import { Star } from "lucide-react";

export default function ChromeExtensionButton() {
    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <div className="relative">
                {/* Background decorative elements */}

                <div className="absolute -top-3 left-4 right-4 h-16 bg-[#C0EBDB] rounded-xl -z-20"></div>
                <div className="absolute  -top-6 left-8 right-8 h-16  bg-[#CFF1E5A8] rounded-xl -z-10"></div>

                {/* Main card */}
                <div className="bg-white rounded-xl shadow-sm p-3 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center p-1 ">
                            <Image src="/chrome.png" alt="Chrome logo" width={56} height={56} className="rounded" />
                        </div>
                        <div className="">
                            <h2 className="text-base font-medium pr-6">Chrome Web Store</h2>
                        </div>
                    </div>

                    <div className="text-right border border-[#82C7BB] p-2 rounded-lg">
                        <div className="flex items-center justify-end gap-1 mb-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="ml-2 text-xs font-semibold">4.6/5.0</span>
                        </div>
                        <p className="text-gray-700 text-xs">1k+ users</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
