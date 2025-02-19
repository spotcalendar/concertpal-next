import GoogleLogo from "@/assets/google-logo";
import LogoCircle from "./ui/logo-circle";
import SpotifyLogo from "@/assets/spotify-logo";
import UserCircle from "@/assets/user-circle";

const OnboardingSidebar = () => {
  return (
    <aside className="bg-[#E9FAF7] flex flex-col gap-24 rounded-2xl w-[425px] px-5 py-14">
      <span className="flex gap-3 items-center">
        <LogoCircle />
        <h3 className="text-[#06402B] text-2xl font-semibold">ConcertPal</h3>
      </span>

      <div className="flex flex-col gap-6">
        <span className="flex items-center gap-5">
          <GoogleLogo />
          <p className="font-semibold text-lg">Login With Google</p>
        </span>

        <span className="flex items-center gap-5">
          <GoogleLogo />
          <p className="font-semibold text-lg">Connect your Spotify</p>
        </span>

        <span className="flex items-center gap-5">
          <UserCircle />
          <p className="font-semibold text-lg">Login With Google</p>
        </span>
      </div>
    </aside>
  );
};

export default OnboardingSidebar;
