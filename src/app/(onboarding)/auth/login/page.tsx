import OnboardingForm from "@/components/onboarding-form";

const LoginPage = () => {
  return (
    <OnboardingForm
      variant="google"
      title="Log in with your Google account & never miss a Concert!"
      description="Sign in with Google to let ConcertPal add your favorite artists’ concerts directly to your Google Calendar."
    />
  );
};

export default LoginPage;
