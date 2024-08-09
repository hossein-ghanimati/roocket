import Logo from "@/assets/components/elems/Logo";
import { memo, useCallback, useContext, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import MobileMenu from "./mobileMenu/MobileMenu";
import { OverlayContex } from "@/assets/contexes/site/overlay.contex";

const Right = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const overlaySetting = useContext(OverlayContex)

  const openMenu = useCallback(() => {
    overlaySetting?.showOverlay();
    setIsMenuOpen(true)
  }, [])
  const closeMenu = useCallback(() => {
    overlaySetting?.hideOverlay();
    setIsMenuOpen(false)
  }, [])

  return (
    <div>
      <div className="lg:hidden">        
        <button onClick={() => openMenu()}>
          <RiMenu4Fill className="size-8"/>
        </button>
        <MobileMenu isMenuOpen={isMenuOpen} onClose={() => closeMenu()}/>            
      </div>

      <div className="hidden lg:block">
        <Logo />
      </div>
    </div>
  );
});

export default Right;
