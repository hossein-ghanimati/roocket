import { useLocation } from 'react-router-dom';
import { memo, useContext, useEffect } from 'react';
import { OverlayContext } from './assets/contexts/site/overlay.context';
import { MobileMenuContext } from './assets/contexts/site/mobileMenu.context';

const ScrollToTop = memo(() => {
  const { pathname } = useLocation();
  const overlaySetting = useContext(OverlayContext)
  const mobileMenuSetting = useContext(MobileMenuContext)

  useEffect(() => {
    console.clear()
    overlaySetting?.hideOverlay()
    mobileMenuSetting?.closeMenu()
    scrollTo(0, 0);
  }, [pathname]);

  return null;
})

export default ScrollToTop;