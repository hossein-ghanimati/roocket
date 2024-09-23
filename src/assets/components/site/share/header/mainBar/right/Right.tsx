import Logo from "@/assets/components/elems/Logo";
import { memo } from "react";
import MobileMenu from "./mobileMenu/MobileMenu";
import OpenMenuBtn from "./OpenMenuBtn";

const Right = memo(() => {
  return (
    <div>
      <div className="lg:hidden">        
        <OpenMenuBtn/>
        <MobileMenu />            
      </div>

      <div className="hidden lg:block">
        <Logo />
      </div>
    </div>
  );
});

export default Right;
