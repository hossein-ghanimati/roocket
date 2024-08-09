import Icon from "@/assets/components/elems/Icon";
import { ThemeContext } from "@/assets/contexes/site/theme.context";
import { memo, useContext, useMemo } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { PiSunFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const MenuActions = memo(() => {
  const themeSetting = useContext(ThemeContext);
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

        <li className="flex items-center gap-2" onClick={() => themeSetting?.toggleTheme()}>
          <Icon>
            <PiSunFill className="dark:hidden" />
            <BsMoonStarsFill className="hidden dark:inline-block" />
          </Icon>
          <span>
            تم
             
            {
              useMemo(() => (
                themeSetting?.isDark ? " تاریک" : " روشن"
              ), [themeSetting?.isDark])
            }
          </span>
        </li>
      </ul>
    </div>
  );
});

export default MenuActions;
