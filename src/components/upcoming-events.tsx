const UpcomingEvents = () => {
  return (
    <div className="w-2/4 h-fit bg-white flex flex-col items-start gap-10 p-4 rounded">
      <div className="w-full flex flex-col">
        <h4 className="text-lg tracking-tight font-semibold text-gray-900">Upcoming Events</h4>

        <p className="text-sm text-gray-400">Here are the upcoming events you can attend.</p>

        <div className="w-full flex justify-center items-center min-h-32">
          <p className="text-lg font-medium tracking-tight text-gray-800">No upcoming concerts near you.</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
