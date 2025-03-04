"use client";

import GoogleBorderLogo from "@/assets/google-border-logo";
import LogoCircle from "./ui/logo-circle";
import UserCircle from "@/assets/user-circle";
import { usePathname, useRouter } from "next/navigation";
import SpotifyBorderLogo from "@/assets/spotify-border-logo";
import { Session } from "next-auth";
import { googleLogout } from "@/actions/user";
import SymyphonyIcon from "@/assets/symphony-icon";

type OnboardingSidebarProps = {
  session: Session | null;
};

const OnboardingSidebar = ({ session }: OnboardingSidebarProps) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = async () => {
    const response = await googleLogout();

    if (response.status == "error") {
      // add a error toast message here.
      return;
    }

    router.push("/auth/login");
  };

  return (
    <aside className="relative bg-[#E9FAF7] flex flex-col justify-between rounded-2xl w-[425px] px-5 py-14">
      <SymyphonyIcon />
      <div className="flex flex-col gap-24">
        <span className="flex gap-3 items-center">
          <LogoCircle />
          <h3 className="text-[#06402B] text-2xl font-semibold">ConcertPal</h3>
        </span>

        <div className="flex gap-5">
          <div className="relative flex flex-col items-start gap-8">
            {pathName !== "/auth/login" ? (
              <StepCompleted />
            ) : (
              <GoogleBorderLogo opacity={pathName == "/auth/login" ? "1" : "0.3"} />
            )}
            <Line top="44px" left="21px" />
            {pathName == "/auth/address" ? (
              <StepCompleted />
            ) : (
              <SpotifyBorderLogo opacity={pathName == "/auth/spotify" ? "1" : "0.3"} />
            )}
            <Line top="123px" left="21px" />
            <UserCircle opacity={pathName == "/auth/address" ? "1" : "0.3"} />
          </div>

          <div className="flex flex-col gap-12 justify-center items-start">
            <p className="font-semibold text-lg">Login With Google</p>
            <p className="font-semibold text-lg">Connect your Spotify</p>
            <p className="font-semibold text-lg">Add your Location</p>
          </div>
        </div>
      </div>

      {session?.user && (
        <button
          onClick={handleClick}
          className="w-fit bg-white rounded-md px-3 py-1 text-[#EB3D4D] font-medium z-10"
        >
          Log Out
        </button>
      )}
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
      <path opacity="0.35" d="M1.3374 0.189941V33.7954" stroke="#A5A5AB" strokeWidth="2" />
    </svg>
  );
};

const StepCompleted = () => {
  return (
    <svg
      width="46"
      height="46"
      opacity="0.3"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="23.4443" cy="23" r="21.5" fill="#1A9882" stroke="#E9E9EA" strokeWidth="2" />
      <path
        d="M12.7483 22.4139L19.7813 29.4469L34.1403 16.5531"
        stroke="#E9FAF7"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
