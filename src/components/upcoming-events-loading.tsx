import { Loader2 } from "lucide-react";

const UpcomingEventsLoading = () => {
  return (
    <section className="w-full flex flex-col rounded-lg">
      <div className="bg-[#D3F4EF] flex items-center gap-4 p-3 rounded-t-lg">
        <EventIcon />
        <h2 className="text-xl font-medium">Upcoming Events</h2>
      </div>
      <div className="min-h-60 bg-white/50 flex flex-col justify-center items-center gap-6 p-3 rounded-b-lg">
      <Loader2 className="text-gray-400/60 animate-spin" size={32} />
      </div>
    </section>
  );
};

export default UpcomingEventsLoading;

const EventIcon = () => {
  return (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5117 3.26904V7.0238"
        stroke="#1A9882"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5264 3.26904V7.0238"
        stroke="#1A9882"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.88086 12.1426H26.1578"
        stroke="#1A9882"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.7834 11.4039V22.0424C26.7834 25.7972 24.9061 28.3004 20.5255 28.3004H10.5128C6.13226 28.3004 4.25488 25.7972 4.25488 22.0424V11.4039C4.25488 7.64917 6.13226 5.146 10.5128 5.146H20.5255C24.9061 5.146 26.7834 7.64917 26.7834 11.4039Z"
        stroke="#1A9882"
        strokeWidth="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5134 17.9124H15.5247"
        stroke="#1A9882"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.8806 17.9124H10.8919"
        stroke="#1A9882"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.8806 21.6673H10.8919"
        stroke="#1A9882"
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
