import GoogleLogo from "@/assets/google-logo";

const GoogleLoginButton = () => {
  return (
    <button className="w-[330px] border border-[#D2D2D5] rounded-md flex justify-center items-center gap-2 p-3">
      <GoogleLogo height="18" width="18" />
      <p className="font-medium">Login with Google</p>
    </button>
  );
};

export default GoogleLoginButton;
