import { useLocation } from 'react-router-dom';
import { memo, useEffect } from 'react';

const ScrollToTop = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.clear()
    scrollTo(0, 0);
  }, [pathname]);

  return null;
})

export default ScrollToTop;