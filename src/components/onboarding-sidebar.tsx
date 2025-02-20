import GoogleBorderLogo from "@/assets/google-border-logo";
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

      <div className="flex gap-5">

        <div className="relative flex flex-col items-start gap-8">
          <GoogleBorderLogo />
          <Line top="44px" left="21px" />
          <GoogleBorderLogo />
          <Line top="123px" left="21px" />
          <UserCircle />
        </div>

        <div className="flex flex-col gap-12 justify-center items-start">
          <p className="font-semibold text-lg">Login With Google</p>
          <p className="font-semibold text-lg">Connect your Spotify</p>
          <p className="font-semibold text-lg">Add your Details</p>
        </div>

      </div>
      
    </aside>
  );
};

export default OnboardingSidebar;

type LineProps = {
  top: string;
  left: string;
};

const Line = ({ top, left }: LineProps) => {
  return (
    <svg
      style={{ position: "absolute", top, left }}
      width="3"
      height="34"
      viewBox="0 0 3 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path opacity="0.35" d="M1.3374 0.189941V33.7954" stroke="#A5A5AB" stroke-width="2" />
    </svg>
  );
};
