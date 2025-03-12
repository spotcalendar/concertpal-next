import { Loader2 } from "lucide-react";

const TopArtistLoading = () => {
  return (
    <section className="w-full flex flex-col rounded-lg">
      <div className="bg-[#D3F4EF] flex items-center gap-4 p-3 rounded-t-lg">
        <BeatIcon />
        <h2 className="text-xl font-medium">Your Top Artists</h2>
      </div>
      <div className="min-h-60 bg-white/50 flex flex-col justify-center items-center gap-6 p-3 rounded-b-lg">
        <Loader2 className="text-gray-400/60 animate-spin" size={32} />
      </div>
    </section>
  );
};

export default TopArtistLoading;

const BeatIcon = () => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.57449 24.1641C6.27249 24.1641 7.64899 22.9865 7.64899 21.5337C7.64899 20.081 6.27249 18.9033 4.57449 18.9033C2.8765 18.9033 1.5 20.081 1.5 21.5337C1.5 22.9865 2.8765 24.1641 4.57449 24.1641Z"
        stroke="#1A9882"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M20.9729 20.6566C22.6709 20.6566 24.0474 19.4789 24.0474 18.0262C24.0474 16.5734 22.6709 15.3958 20.9729 15.3958C19.2749 15.3958 17.8984 16.5734 17.8984 18.0262C17.8984 19.4789 19.2749 20.6566 20.9729 20.6566Z"
        stroke="#1A9882"
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M24.0457 18.0264V1.36719L7.64844 4.87439V21.5336M24.0457 7.5048L7.64844 11.012"
        stroke="#1A9882"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
