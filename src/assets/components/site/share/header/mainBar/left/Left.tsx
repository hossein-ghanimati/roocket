import { memo } from "react";

import { FaBagShopping } from "react-icons/fa6";
import Icon from "../../../../../elems/Icon";
import { useNavigate } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import ToggleTheme from "./ToggleTheme";

const Left = memo(() => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4">
      <ul className="hidden lg:flex items-center gap-4">
        <Icon onClick={() => navigate("/basket")}>
          <FaBagShopping />
        </Icon>

        <ToggleTheme/>
      </ul>

      <ProfileDropdown/>      
    </div>
  );
});

export default Left;
