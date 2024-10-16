import { memo } from "react";
import { Link } from "react-router-dom";

const StaticLogo = memo(({customClass} : {customClass?: string}) => {
  return (
    <Link to="/" className={customClass}>
      <img
        className="dark:hidden inline-block w-36"
        src="/public/image/header/logo.svg"
        alt="logo"
      />
      <img
        className="hidden dark:inline-block w-36"
        src="/public/image/header/dark-logo.svg"
        alt="dark-logo"
      />
    </Link>
  );
});

export default StaticLogo;
