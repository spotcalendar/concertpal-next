import AddIcon from "@/assets/add-icon";
import GoogleLogo from "@/assets/google-logo";
import LogoCircle from "@/components/ui/logo-circle";
import { Check } from "lucide-react";

const LoginPage = () => {
  return (
    <section className="w-full h-full flex flex-col justify-start px-5 py-14 font-sans">
      <div className="flex justify-end">
        <Loader />
      </div>

      <div className="flex-grow flex flex-col justify-center items-center gap-10">
        <div className="flex justify-center items-center gap-5">
          <LogoCircle width="94" height="94" />
          <AddIcon />
          <GoogleLogo />
        </div>

        <div className="flex flex-col justify-center gap-2 text-center">
          <p className="font-serif text-4xl tracking-wide">
            Log in with your Google account & never miss a Concert!
          </p>

          <p className="max-w-[771px] text-[#A5A5AB] text-lg font-medium tracking-tight">
            Sign in with Google to let ConcertPal add your favorite artists’ concerts directly to
            your Google Calendar.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-[#1A9882] text-lg font-semibold">What we'll do?</p>

          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-2">
              <CheckGreen />
              <p className="text-[#777980] ">
                Access your Google Calendar{" "}
                <span className="font-semibold italic">(with permission). </span>
              </p>
            </span>

            <span className="flex items-center gap-2">
              <CheckGreen />
              <p className="text-[#777980] ">
                Add <span className="font-semibold italic">upcoming concerts </span>
                of your top artists.
              </p>
            </span>

            <span className="flex items-center gap-2">
              <CheckGreen />
              <p className="text-[#777980] ">
                Keep your schedule updated{" "}
                <span className="font-semibold italic">automatically.</span>
              </p>
            </span>
          </div>
        </div>

        <button className="w-[330px] border border-[#D2D2D5] rounded-md flex justify-center items-center gap-2 p-3">
          <GoogleLogo height="18" width="18" />
          <p className="font-medium">Login with Google</p>
        </button>
      </div>
    </section>
  );
};

export default LoginPage;

const Loader = () => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24.8166" cy="25.2748" r="21.8505" stroke="#E9E9EA" stroke-width="5" />
      <mask id="path-2-inside-1_2047_1548" fill="white">
        <path d="M46.0386 25.2748C47.7664 25.2748 49.1878 23.8685 48.9664 22.1549C48.5484 18.9189 47.4826 15.7888 45.8212 12.956C43.6303 9.22027 40.4827 6.13648 36.7029 4.02248C32.9232 1.90848 28.648 0.84077 24.3181 0.929418C21.0347 0.996643 17.8099 1.727 14.8338 3.06467C13.2578 3.773 12.8035 5.72025 13.7079 7.19245C14.6124 8.66466 16.5334 9.09615 18.1392 8.45851C20.1408 7.66372 22.2763 7.22952 24.4462 7.18509C27.6635 7.11922 30.8401 7.91258 33.6487 9.48338C36.4572 11.0542 38.796 13.3456 40.424 16.1214C41.5219 17.9935 42.2698 20.0403 42.6403 22.1619C42.9376 23.8639 44.3108 25.2748 46.0386 25.2748Z" />
      </mask>
      <path
        d="M46.0386 25.2748C47.7664 25.2748 49.1878 23.8685 48.9664 22.1549C48.5484 18.9189 47.4826 15.7888 45.8212 12.956C43.6303 9.22027 40.4827 6.13648 36.7029 4.02248C32.9232 1.90848 28.648 0.84077 24.3181 0.929418C21.0347 0.996643 17.8099 1.727 14.8338 3.06467C13.2578 3.773 12.8035 5.72025 13.7079 7.19245C14.6124 8.66466 16.5334 9.09615 18.1392 8.45851C20.1408 7.66372 22.2763 7.22952 24.4462 7.18509C27.6635 7.11922 30.8401 7.91258 33.6487 9.48338C36.4572 11.0542 38.796 13.3456 40.424 16.1214C41.5219 17.9935 42.2698 20.0403 42.6403 22.1619C42.9376 23.8639 44.3108 25.2748 46.0386 25.2748Z"
        stroke="#22CAAD"
        stroke-width="10"
        mask="url(#path-2-inside-1_2047_1548)"
      />
    </svg>
  );
};

const CheckGreen = () => {
  return (
    <div className="bg-green-100 w-10 h-10 flex justify-center items-center rounded-full">
      <div className="bg-[#1A9882] w-6 h-6 flex justify-center items-center rounded-full">
        <Check size={14} color="white" />
      </div>
    </div>
  );
};
