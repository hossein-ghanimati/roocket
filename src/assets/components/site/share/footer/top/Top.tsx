import { memo } from "react";
import MainLogo from "./MainLogo";
import SocialLogos from "./SocialLogos";

const Top = memo(() => {
  return (
    <div className="mb-12 relative">
      <span className="absolute border-t border-1 sm:top-2/4 top-5 trasform sm:translate-y-2/4 border-gray-300 dark:border-gray-500 w-full z-0 right-0"></span>
      <div className="flex items-center justify-between sm:flex-row flex-col relative z-10">
        <MainLogo />
        <SocialLogos/>
      </div>
    </div>
  );
});

export default Top;
