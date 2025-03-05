import { Loader2 } from "lucide-react";

const UpcomingEventsLoading = () => {
  return (
    <div className="w-2/4 h-fit bg-white flex flex-col items-start gap-10 p-4 rounded">
      <div className="w-full flex flex-col">
        <h4 className="text-lg tracking-tight font-semibold text-gray-900">Upcoming Events</h4>
        <p className="text-sm text-gray-400">Here are the upcoming events you can attend.</p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2 p-4">
        <Loader2 className="text-gray-400 animate-spin" size={24} />
      </div>
    </div>
  );
};

export default UpcomingEventsLoading;
