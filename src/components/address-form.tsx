import { updateUserDetails } from "@/actions/user";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const AddressForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    city: "",
    state: "",
    zip: "",
  });

  const [errors, setErrors] = useState({ city: "", state: "", zip: "" });

  const validate = () => {
    let newErrors = { city: "", state: "", zip: "" };

    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.state.trim()) newErrors.state = "State is required.";
    if (!/^\d{5}$/.test(formData.zip)) newErrors.zip = "Zip Code must be 5 digits.";

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    if (validate()) {
      const response = await updateUserDetails(
        formData.city,
        formData.state,
        parseInt(formData.zip),
      );

      if (response.status == "error") {
        toast({
          variant: "destructive",
          title: "An Error Occurred !",
          description: response.message,
        });
        return;
      }

      toast({
        title: "Form Submitted Successfully !",
      });

      router.push("/test");

      setFormData({
        city: "",
        state: "",
        zip: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8">
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="text-[#4A4C56] text-xl font-semibold">Enter your City*</p>
          <input
            className="w-[242px] h-[56px] px-4 py-2 border border-[#D2D2D5] rounded-lg"
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[#4A4C56] text-xl font-semibold">Enter your State*</p>
          <input
            className="w-[242px] h-[56px] px-4 py-2 border border-[#D2D2D5] rounded-lg"
            type="text"
            placeholder="State"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          />
          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[#4A4C56] text-xl font-semibold">Enter your Zip Code*</p>
        <input
          className="w-[526px] h-[56px] px-4 py-2 border border-[#D2D2D5] rounded-lg"
          type="text"
          placeholder="Zip Code"
          value={formData.zip}
          onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
        />
        {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
      </div>

      <button
        type="submit"
        className="w-[330px] bg-[#D3F4EF] rounded-md flex justify-center items-center gap-2 p-3"
      >
        <p className="font-medium">Finish</p>
      </button>
    </form>
  );
};

export default AddressForm;
