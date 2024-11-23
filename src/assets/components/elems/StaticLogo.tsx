import { memo } from "react";
import { Link } from "react-router-dom";
import logo from "/public/image/header/logo.svg"
import darkLogo from "/public/image/header/dark-logo.svg"

const StaticLogo = memo(({customClass} : {customClass?: string}) => {
  return (
    <Link to="/" className={customClass}>
      <img
        className="dark:hidden inline-block w-36"
        src={logo}
        alt="logo"
      />
      <img
        className="hidden dark:inline-block w-36"
        src={darkLogo}
        alt="dark-logo"
      />
    </Link>
  );
});

export default StaticLogo;
