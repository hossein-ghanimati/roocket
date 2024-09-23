import { Link } from "react-router-dom";

const MenuLogo = () => {
  return (
    <Link to="/" className="mt-1 flex items-center justify-center">
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
};

export default MenuLogo;
