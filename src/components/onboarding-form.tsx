"use client";

import AddIcon from "@/assets/add-icon";
import GoogleLogo from "@/assets/google-logo";
import SpotifyLogo from "@/assets/spotify-logo";
import LogoCircle from "@/components/ui/logo-circle";
import { Check } from "lucide-react";
import GoogleLoginButton from "./google-login-button";
import SpotifyConnectButton from "./spotify-connect-button";
import MapMarker from "@/assets/map-marker";
import AddressForm from "./address-form";

type OnboardingFormProps = {
  variant: "google" | "spotify" | "user-details";
  title: string;
  description: string;
};

const OnboardingForm = ({ variant, title, description }: OnboardingFormProps) => {
  return (
    <section className="w-full h-full flex flex-col justify-start px-5 py-14 font-sans">
      <div className="flex justify-end">
        {variant == "google" && <GoogleLoader />}
        {variant == "spotify" && <SpotifyLoader />}
        {variant == "user-details" && <AddressLoader />}
      </div>

      <div className="flex-grow flex flex-col justify-center items-center gap-10">
        <div className="flex justify-center items-center gap-5">
          {variant != "user-details" && (
            <>
              <LogoCircle width="94" height="94" />
              <AddIcon />
            </>
          )}
          {variant == "google" && <GoogleLogo />}
          {variant == "spotify" && <SpotifyLogo />}
          {variant == "user-details" && <MapMarker />}
        </div>

        <div className="flex flex-col justify-center gap-2 text-center">
          <p className="font-serif text-4xl tracking-wide">{title}</p>

          <p className="max-w-[771px] text-[#A5A5AB] text-lg font-medium tracking-tight">
            {description}
          </p>
        </div>

        {variant != "user-details" && (
          <div className="flex flex-col items-center gap-3">
            <p className="text-[#1A9882] text-lg font-semibold">What we'll do?</p>
            {variant == "google" && <GooglePerms />}
            {variant == "spotify" && <SpotifyPerms />}
          </div>
        )}

        {variant == "user-details" && <AddressForm />}

        {variant == "google" && <GoogleLoginButton />}
        {variant == "spotify" && <SpotifyConnectButton />}
      </div>
    </section>
  );
};

export default OnboardingForm;

const GoogleLoader = () => {
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

const SpotifyLoader = () => {
  return (
    <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="24.8839"
        cy="24.3578"
        r="21.8505"
        transform="rotate(90 24.8839 24.3578)"
        stroke="#E9E9EA"
        stroke-width="5"
      />
      <mask id="path-2-inside-1_2047_1544" fill="white">
        <path d="M24.8839 45.5798C24.8839 47.3076 26.2902 48.729 28.0038 48.5076C30.5909 48.1734 33.1143 47.4247 35.4754 46.2842C38.7783 44.6887 41.678 42.3677 43.9582 39.4945C46.2383 36.6212 47.8398 33.27 48.6432 29.691C49.4465 26.112 49.431 22.3978 48.5976 18.8257C47.7643 15.2536 46.1347 11.9158 43.8306 9.0618C41.5265 6.20776 38.6074 3.91113 35.2913 2.3434C31.9752 0.775681 28.3477 -0.0226186 24.6798 0.00811812C22.0578 0.0300905 19.4635 0.47531 16.9956 1.32035C15.361 1.88006 14.7287 3.777 15.4933 5.32646C16.2578 6.87592 18.1307 7.48305 19.7886 6.99649C21.3899 6.52654 23.0534 6.27895 24.7322 6.26488C27.4577 6.24205 30.153 6.83522 32.6171 8.00011C35.0811 9.165 37.2501 10.8715 38.9622 12.9922C40.6742 15.1129 41.8851 17.5929 42.5043 20.2472C43.1235 22.9014 43.135 25.6613 42.5381 28.3206C41.9412 30.9799 40.7511 33.4701 39.0569 35.605C37.3627 37.74 35.208 39.4646 32.7539 40.6501C31.2421 41.3803 29.6408 41.8944 27.9968 42.1815C26.2948 42.4788 24.8839 43.852 24.8839 45.5798Z" />
      </mask>
      <path
        d="M24.8839 45.5798C24.8839 47.3076 26.2902 48.729 28.0038 48.5076C30.5909 48.1734 33.1143 47.4247 35.4754 46.2842C38.7783 44.6887 41.678 42.3677 43.9582 39.4945C46.2383 36.6212 47.8398 33.27 48.6432 29.691C49.4465 26.112 49.431 22.3978 48.5976 18.8257C47.7643 15.2536 46.1347 11.9158 43.8306 9.0618C41.5265 6.20776 38.6074 3.91113 35.2913 2.3434C31.9752 0.775681 28.3477 -0.0226186 24.6798 0.00811812C22.0578 0.0300905 19.4635 0.47531 16.9956 1.32035C15.361 1.88006 14.7287 3.777 15.4933 5.32646C16.2578 6.87592 18.1307 7.48305 19.7886 6.99649C21.3899 6.52654 23.0534 6.27895 24.7322 6.26488C27.4577 6.24205 30.153 6.83522 32.6171 8.00011C35.0811 9.165 37.2501 10.8715 38.9622 12.9922C40.6742 15.1129 41.8851 17.5929 42.5043 20.2472C43.1235 22.9014 43.135 25.6613 42.5381 28.3206C41.9412 30.9799 40.7511 33.4701 39.0569 35.605C37.3627 37.74 35.208 39.4646 32.7539 40.6501C31.2421 41.3803 29.6408 41.8944 27.9968 42.1815C26.2948 42.4788 24.8839 43.852 24.8839 45.5798Z"
        stroke="#22CAAD"
        stroke-width="10"
        mask="url(#path-2-inside-1_2047_1544)"
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

const GooglePerms = () => {
  return (
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
          Keep your schedule updated <span className="font-semibold italic">automatically.</span>
        </p>
      </span>
    </div>
  );
};

const SpotifyPerms = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className="flex items-center gap-2">
        <CheckGreen />
        <p className="text-[#777980] ">
          Fetch your <span className="font-semibold italic">top artists </span>
          and <span className="font-semibold italic">favorite genres. </span>
        </p>
      </span>

      <span className="flex items-center gap-2">
        <CheckGreen />
        <p className="text-[#777980] ">
          Find <span className="font-semibold italic">concerts </span>
          featuring artists you love.
        </p>
      </span>

      <span className="flex items-center gap-2">
        <CheckGreen />
        <p className="text-[#777980] ">
          Keep your recommendations <span className="font-semibold italic">personalized.</span>
        </p>
      </span>
    </div>
  );
};

const AddressLoader = () => {
  return (
    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="32.9077"
        cy="32.949"
        r="21.8505"
        transform="rotate(114.516 32.9077 32.949)"
        stroke="#E9E9EA"
        stroke-width="5"
      />
      <mask id="path-2-inside-1_2047_1536" fill="white">
        <path d="M12.1107 28.7227C10.4175 28.3786 8.74453 29.4738 8.62021 31.1971C8.28191 35.8868 9.3078 40.5989 11.6082 44.7506C14.4165 49.8192 18.9404 53.7201 24.3668 55.7526C29.7933 57.785 35.7666 57.8157 41.2137 55.8391C46.6608 53.8626 51.2244 50.0084 54.0848 44.969C56.9451 39.9295 57.9146 34.0353 56.819 28.3452C55.7235 22.6551 52.6347 17.5422 48.1077 13.9251C43.5807 10.3081 37.9121 8.42391 32.1206 8.61121C27.3767 8.76463 22.805 10.2996 18.9519 12.9944C17.5361 13.9846 17.4534 15.9825 18.6169 17.2599C19.7804 18.5372 21.7482 18.6022 23.2067 17.6759C25.9234 15.9504 29.0686 14.9702 32.3228 14.8649C36.6262 14.7258 40.8382 16.1258 44.202 18.8134C47.5658 21.5011 49.8609 25.3002 50.6749 29.5282C51.4889 33.7562 50.7686 38.1359 48.6432 41.8804C46.5179 45.6249 43.1268 48.4888 39.0794 49.9574C35.032 51.4261 30.5935 51.4033 26.5614 49.8931C22.5293 48.3829 19.1679 45.4843 17.0812 41.7181C15.5032 38.8701 14.7323 35.6672 14.821 32.4501C14.8686 30.7229 13.804 29.0668 12.1107 28.7227Z" />
      </mask>
      <path
        d="M12.1107 28.7227C10.4175 28.3786 8.74453 29.4738 8.62021 31.1971C8.28191 35.8868 9.3078 40.5989 11.6082 44.7506C14.4165 49.8192 18.9404 53.7201 24.3668 55.7526C29.7933 57.785 35.7666 57.8157 41.2137 55.8391C46.6608 53.8626 51.2244 50.0084 54.0848 44.969C56.9451 39.9295 57.9146 34.0353 56.819 28.3452C55.7235 22.6551 52.6347 17.5422 48.1077 13.9251C43.5807 10.3081 37.9121 8.42391 32.1206 8.61121C27.3767 8.76463 22.805 10.2996 18.9519 12.9944C17.5361 13.9846 17.4534 15.9825 18.6169 17.2599C19.7804 18.5372 21.7482 18.6022 23.2067 17.6759C25.9234 15.9504 29.0686 14.9702 32.3228 14.8649C36.6262 14.7258 40.8382 16.1258 44.202 18.8134C47.5658 21.5011 49.8609 25.3002 50.6749 29.5282C51.4889 33.7562 50.7686 38.1359 48.6432 41.8804C46.5179 45.6249 43.1268 48.4888 39.0794 49.9574C35.032 51.4261 30.5935 51.4033 26.5614 49.8931C22.5293 48.3829 19.1679 45.4843 17.0812 41.7181C15.5032 38.8701 14.7323 35.6672 14.821 32.4501C14.8686 30.7229 13.804 29.0668 12.1107 28.7227Z"
        stroke="#22CAAD"
        stroke-width="10"
        mask="url(#path-2-inside-1_2047_1536)"
      />
    </svg>
  );
};
