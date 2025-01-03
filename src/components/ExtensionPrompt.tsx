import Image from "next/image";
import { CloudDownload } from "lucide-react";
export function ExtensionPrompt() {
    return (
        <div className="fixed right-0 top-0 h-full w-96 bg-primary p-8 text-white">
            <div className="flex h-full flex-col items-center justify-center space-y-8 text-center">
                <h2 className="text-4xl font-bold">Extension not installed</h2>
                <p className="text-center text-lg">Please install the Concertpal extension to continue.</p>
                <div className="relative h-48 w-48">
                    <img src="https://cdn.travelarrow.io/skipped.png" alt="Laptop illustration" className="h-full w-full object-contain" />
                </div>{" "}
                <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-white text-primary  hover:bg-gray-200 text-emerald-700 cursor-pointer">
                    <CloudDownload className="w-5 h-5 " />
                    Install Extension
                </button>
            </div>
        </div>
    );
}
