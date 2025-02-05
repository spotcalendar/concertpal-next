import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { randomBytes } from "crypto";

export const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
};

export const ConnectSpotifyAcc = () => {
  return (
    <form
      action={async () => {
        "use server";
        let state = randomBytes(16).toString("hex");
        let scope = "user-read-private user-read-email";

        const params = new URLSearchParams({
          response_type: "code",
          client_id: process.env.SPOTIFY_CLIENT_ID!,
          scope: scope,
          redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
          state: state,
        });

        redirect(`https://accounts.spotify.com/authorize?${params.toString()}`);
      }}
    >
      <button className="border border-gray-500 rounded-md p-2" type="submit">Connect To Spotify</button>
    </form>
  );
};
