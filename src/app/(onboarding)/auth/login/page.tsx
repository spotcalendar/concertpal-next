import { auth } from "@/auth";
import OnboardingForm from "@/components/onboarding-form";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

const GoogleLoginPage = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.email)
    return (
      <OnboardingForm
        variant="google"
        title="Log in with your Google account & never miss a Concert!"
        description="Sign in with Google to let ConcertPal add your favorite artists’ concerts directly to your Google Calendar."
      />
    );

  const userData = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      isOnboarded: true,
      onboardingStatus: true,
      accounts: true,
    },
  });

  if (userData && userData.isOnboarded) redirect(process.env.NEXT_PUBLIC_URL as string);

  const isSpotifyConnected = userData?.accounts.map((account) => account.provider == "spotify")[0];

  if (!isSpotifyConnected) redirect(`${process.env.NEXT_PUBLIC_URL}/auth/spotify`);

  redirect(`${process.env.NEXT_PUBLIC_URL}/auth/address`);
};

export default GoogleLoginPage;
