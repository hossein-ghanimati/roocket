import { useLocation } from 'react-router-dom';
import { memo, useContext, useEffect } from 'react';
import { OverlayContext } from './assets/contexts/site/overlay.context';
import { MobileMenuContext } from './assets/contexts/site/mobileMenu.context';

const ScrollToTop = memo(() => {
  const { pathname } = useLocation();
  const overlaySetting = useContext(OverlayContext)
  const mobileMenuSetting = useContext(MobileMenuContext)

  useEffect(() => {
    scrollTo(0, 0);
    console.clear()
    overlaySetting?.hideOverlay()
    mobileMenuSetting?.closeMenu() 
  }, [pathname]);

  return null;
})

export default ScrollToTop;
