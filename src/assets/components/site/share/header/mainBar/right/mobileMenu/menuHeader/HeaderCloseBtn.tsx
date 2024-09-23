import { MobileMenuContext } from "@/assets/contexts/site/mobileMenu.context";
import { useContext, useMemo } from "react";
import { IoMdClose } from "react-icons/io";

const HeaderCloseBtn = () => {
  const mobileMenuSetting = useContext(MobileMenuContext);

  return (
    <>
      {useMemo(() => 
        <div dir="ltr">
          <button onClick={() => mobileMenuSetting?.closeMenu()}>
            <IoMdClose className="size-6" />
          </button>
        </div>
      , [])}
    </>
  );
};

export default HeaderCloseBtn;
