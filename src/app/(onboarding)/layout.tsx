import OnboardingSidebar from "@/components/onboarding-sidebar";
import { ReactNode } from "react";

const OnboardingLayout = ({children}: {children: ReactNode}) => {
    return (
        <main className="w-full h-screen flex p-4">
            <OnboardingSidebar />
            {children}
        </main>
    )
}

export default OnboardingLayout;