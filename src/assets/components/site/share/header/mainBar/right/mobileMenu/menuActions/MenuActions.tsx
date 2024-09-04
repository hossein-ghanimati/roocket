import Icon from "@/assets/components/elems/Icon";
import { memo } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

const MenuActions = memo(() => {
  
  const navigate = useNavigate();
  return (
    <div>
      <ul className="font-bold text-sm space-y-2">
        <li className="flex items-center gap-2" onClick={() => navigate("/basket")}>
          <Icon>
            <FaBagShopping />
          </Icon>
          <span>سبد خرید</span>
        </li>

        <ToggleTheme/>
      </ul>
    </div>
  );
});

export default MenuActions;
