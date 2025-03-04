import { googleLogin } from "@/actions/user";
import GoogleLogo from "@/assets/google-logo";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const GoogleLoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await googleLogin();
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      className="w-[300px] border border-[#D2D2D5] rounded-md flex justify-center items-center p-3"
    >
      {isLoading ? (
        <Loader2 className="animate-spin text-[#116557]" />
      ) : (
        <span className="flex justify-center items-center gap-2">
          <GoogleLogo height="18" width="18" />
          <p className="font-medium">Login with Google</p>
        </span>
      )}
    </button>
  );
};
1;
export default GoogleLoginButton;
