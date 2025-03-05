import { auth } from "@/auth";
import OnboardingSidebar from "@/components/onboarding-sidebar";
import { ReactNode } from "react";

const OnboardingLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <main className="w-full h-screen flex p-4">
      <OnboardingSidebar session={session} />
      {children}
    </main>
  );
};

export default OnboardingLayout;
