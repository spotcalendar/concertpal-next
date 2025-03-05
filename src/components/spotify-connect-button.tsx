"use client"

import { spotifyLogin } from "@/actions/spotify";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SpotifyConnectButton = () => {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam) {
      const errorMessages: Record<string, string> = {
        missing_code: "Authorization code is missing.",
        token_error: "Failed to get access token from Spotify.",
        no_session: "No active user session found.",
        no_user: "User not found in the database.",
        server_error: "Internal server error. Please try again later.",
      };

      toast({
        variant: "destructive",
        title: "An error occurred !",
        description: errorMessages[errorParam] || "An unknown error occurred.",
      });
    }
  }, [searchParams]);

  const handleClick = async () => {
    setIsLoading(true);
    await spotifyLogin();
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      className="w-[330px] bg-[#116557] rounded-md flex justify-center items-center gap-2 p-3"
    >
      {isLoading ? (
        <Loader2 className="animate-spin text-white" />
      ) : (
        <p className="font-medium text-white">Login to Spotify</p>
      )}
    </button>
  );
};

export default SpotifyConnectButton;
