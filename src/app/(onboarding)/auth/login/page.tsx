import { auth } from "@/auth";
import OnboardingForm from "@/components/onboarding-form";
import { redirect } from "next/navigation";

const GoogleLoginPage = async () => {
  const session = await auth();

  if (session?.user) redirect("http://localhost:3000/auth/spotify");

  return (
    <OnboardingForm
      variant="google"
      title="Log in with your Google account & never miss a Concert!"
      description="Sign in with Google to let ConcertPal add your favorite artists’ concerts directly to your Google Calendar."
    />
  );
};

export default GoogleLoginPage;
