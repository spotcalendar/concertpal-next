import getSpotifyAccessToken from "@/utils/get-spotify-access-token";

const TestDashboardPage = async () => {
  const token = await getSpotifyAccessToken();

  if (!token) return JSON.stringify({ error: "No token Found" });

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return (
    <div className="w-full h-screen flex justify-center items-center gap-2">
      <h2 className="text-2xl">ConcertPal :</h2>
      <h3 className="text-lg capitalize font-light">{data.display_name}</h3>
    </div>
  );
};

export default TestDashboardPage;
