import Icon from "@/assets/components/elems/Icon";
import { ThemeContext } from "@/assets/contexts/site/theme.context";
import { memo, useContext, useMemo } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { PiSunFill } from "react-icons/pi";

const ToggleTheme = memo(() => {
  const themeSetting = useContext(ThemeContext);
  return (
    <li
      className="flex items-center gap-2"
      onClick={() => themeSetting?.toggleTheme()}
    >
      {useMemo(
        () => (
          <Icon>
            <PiSunFill className="dark:hidden" />
            <BsMoonStarsFill className="hidden dark:inline-block" />
          </Icon>
        ),
        []
      )}
      <span>
        تم
        {themeSetting?.isDark ? " تاریک" : " روشن"}
      </span>
    </li>
  );
});

export default ToggleTheme;
