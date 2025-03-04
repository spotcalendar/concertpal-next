import { getUserArtistData, updateUserDetails } from "@/actions/user";
import useLocation from "@/hooks/use-location";
import { useToast } from "@/hooks/use-toast";
import fetchZipCode from "@/utils/fetch-zipcode";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddressForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { location, permission, requestLocation, error } = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    requestLocation();

    if (!location) {
      toast({
        variant: "destructive",
        title: "Please grant access to location",
      });

      setIsLoading(false);
      return;
    }

    const locationData = await fetchZipCode(location.lat, location.lon);

    if (!locationData || !locationData.postcode) {
      toast({
        variant: "destructive",
        title: "Unable to fetch your location data",
      });

      setIsLoading(false);
      return;
    }

    const response = await updateUserDetails(parseInt(locationData.postcode));

    if (response.status == "error") {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: response.message,
      });

      setIsLoading(false);
      return;
    }

    await getUserArtistData();

    setIsLoading(false);
    router.push("/calendar");
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        className="w-[330px] bg-[#D3F4EF] rounded-md flex justify-center items-center gap-2 p-3"
      >
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <p className="font-medium">Grant Access</p>
        )}
      </button>
    </>

    // <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8">
    //   <div className="w-full flex justify-between items-center">
    //     <div className="flex flex-col gap-1">
    //       <p className="text-[#4A4C56] text-xl font-semibold">Enter your City*</p>
    //       <input
    //         className="w-[242px] h-[56px] px-4 py-2 border border-[#D2D2D5] rounded-lg"
    //         type="text"
    //         placeholder="City"
    //         value={formData.city}
    //         onChange={(e) => setFormData({ ...formData, city: e.target.value })}
    //       />
    //       {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
    //     </div>

    //     <div className="flex flex-col gap-1">
    //       <p className="text-[#4A4C56] text-xl font-semibold">Enter your State*</p>
    //       <input
    //         className="w-[242px] h-[56px] px-4 py-2 border border-[#D2D2D5] rounded-lg"
    //         type="text"
    //         placeholder="State"
    //         value={formData.state}
    //         onChange={(e) => setFormData({ ...formData, state: e.target.value })}
    //       />
    //       {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
    //     </div>
    //   </div>

    //   < className="flex flex-col gap-1">
    //     <p className="text-[#4A4C56] text-xl font-semibold">Enter your Zip Code*</p>
    //     <input
    //       className="w-[526px] h-[56px] px-4 py-2 border border-[#D2D2D5] rounded-lg"
    //       type="text"
    //       placeholder="Zip Code"
    //       value={formData.zip}
    //       onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
    //     />
    //     {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
    //   </
  );
};

export default AddressForm;
