import Icon from "@/assets/components/elems/Icon";
import { ThemeContext } from "@/assets/contexts/site/theme.context";
import { memo, useContext, useMemo } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { PiSunFill } from "react-icons/pi";

const ToggleTheme = memo(() => {
  const themeSetting = useContext(ThemeContext);

  return (
    <>
      <Icon onClick={() => themeSetting?.toggleTheme()}>
        {useMemo(
          () => (
            <>
              <PiSunFill className="dark:hidden" />
              <BsMoonStarsFill className="hidden dark:inline-block" />
            </>
          ),
          []
        )}
      </Icon>
    </>
  );
});

export default ToggleTheme;
