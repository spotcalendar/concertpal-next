import { auth } from "@/auth";
import OnboardingForm from "@/components/onboarding-form";
import { redirect } from "next/navigation";

const ConnectSpotifyPage = async () => {
  const session = await auth();

  if (!session || !session.user) redirect(`${process.env.NEXT_PUBLIC_URL}/auth/login`);

  return (
    <OnboardingForm
      variant="spotify"
      title="Discover Concerts Based on your Music Taste"
      description="Connect your Spotify to let ConcertPal find upcoming concerts based on your top artists and favorite genres."
    />
  );
};

export default ConnectSpotifyPage;
