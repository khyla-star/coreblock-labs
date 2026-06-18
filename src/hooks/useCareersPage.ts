import { useEffect } from 'react';

export function useCareersPage() {
  useEffect(() => {
    void import('../styles/pages/careers-overrides.css');
  }, []);
}
