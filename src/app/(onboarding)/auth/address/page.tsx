import { auth } from "@/auth";
import OnboardingForm from "@/components/onboarding-form";
import { redirect } from "next/navigation";

const AddressDetailsPage = async () => {
  const session = await auth();

  if (!session || !session.user) redirect(`${process.env.NEXT_PUBLIC_URL}/auth/login`);

  return (
    <OnboardingForm
      variant="user-details"
      title="Grant Access to your Location"
      description="Allow us to access your location so we can show you concert events happening nearby for your favorite artists."
    />
  );
};

export default AddressDetailsPage;
