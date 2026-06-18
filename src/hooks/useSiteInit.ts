import { useEffect } from 'react';
import { initSiteRuntime, loadCustomScript } from '../lib/siteRuntime';

export function useSiteInit() {
  useEffect(() => {
    initSiteRuntime();
    void loadCustomScript().catch(console.error);

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
}
