import { MobileMenuContext } from "@/assets/contexts/site/mobileMenu.context";
import { useContext, useMemo } from "react";
import { RiMenu4Fill } from "react-icons/ri";

const OpenMenuBtn = () => {
  const mobileMenuSetting = useContext(MobileMenuContext);

  return (
    <>
      {useMemo(
        () => (
          <button onClick={() => mobileMenuSetting?.openMenu()}>
            <RiMenu4Fill className="size-8" />
          </button>
        ),
        []
      )}
    </>
  );
}

export default OpenMenuBtn;
