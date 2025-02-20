import OnboardingForm from "@/components/onboarding-form"

const AddressDetailsPage = () => {
    return (
        <OnboardingForm
        variant="user-details"
        title="Please enter your Address Details"
        description="Enter your city and zip code so we can show you concert events happening nearby for your favorite artists."

         />
    )
}

export default AddressDetailsPage