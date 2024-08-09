import { memo, useContext } from "react";

import { FaBagShopping } from "react-icons/fa6";
import Icon from "../../../../../elems/Icon";
import { PiSunFill } from "react-icons/pi";
import { BsMoonStarsFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "@/assets/contexes/site/theme.context";
import ProfileDropdown from "./ProfileDropdown";

const Left = memo(() => {
  const navigate = useNavigate();
  const themeSetting = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-4">
      <ul className="hidden lg:flex items-center gap-4">
        <Icon onClick={() => navigate("/basket")}>
          <FaBagShopping />
        </Icon>

        <Icon onClick={() => themeSetting?.toggleTheme()}>
          <PiSunFill className="dark:hidden" />
          <BsMoonStarsFill className="hidden dark:inline-block" />
        </Icon>
      </ul>

      <ProfileDropdown/>      
    </div>
  );
});

export default Left;
