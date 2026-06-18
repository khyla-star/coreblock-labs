import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useBodyClass() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      document.body.className = 'site-home';
      return;
    }

    if (pathname.startsWith('/careers')) {
      document.body.className = 'site-careers';
      return;
    }

    document.body.className = 'site-inner';
  }, [pathname]);
}
