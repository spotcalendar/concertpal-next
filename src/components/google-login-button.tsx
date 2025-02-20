import GoogleLogo from "@/assets/google-logo";
import { useRouter } from "next/navigation";

const GoogleLoginButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/spotify");
  };

  return (
    <button
      onClick={handleClick}
      className="w-[330px] border border-[#D2D2D5] rounded-md flex justify-center items-center gap-2 p-3"
    >
      <GoogleLogo height="18" width="18" />
      <p className="font-medium">Login with Google</p>
    </button>
  );
};

export default GoogleLoginButton;
