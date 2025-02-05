import { auth } from "@/auth";
import { ConnectSpotifyAcc, GoogleSignIn } from "@/components/sign-in";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

const TestPage = async () => {
  const session = await auth();

  if (!session || !session.user)
    return (
      <section className="w-full">
        <GoogleSignIn />
      </section>
    );

  const user = await prisma.user.findFirst({
    where: {
      email: session.user.email,
    },
    include: {
      accounts: true,
    },
  });

  const isSpotifyConnected = user?.accounts.filter((acc) => acc.provider == "spotify")[0];

  if (isSpotifyConnected) redirect("http://localhost:3000/test/dashboard");

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ConnectSpotifyAcc />
    </div>
  );
};

export default TestPage;
