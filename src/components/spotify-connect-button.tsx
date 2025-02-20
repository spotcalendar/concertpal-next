import { useRouter } from "next/navigation";

const SpotifyConnectButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/address");
  };

  return (
    <button
      onClick={handleClick}
      className="w-[330px] bg-[#116557] rounded-md flex justify-center items-center gap-2 p-3"
    >
      <p className="font-medium text-white">Login to Spotify</p>
    </button>
  );
};

export default SpotifyConnectButton;
