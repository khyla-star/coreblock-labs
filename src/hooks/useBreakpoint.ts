import { useEffect, useState } from 'react';

export function useBreakpoint() {
  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return width;
}

export function useVisibleSlideCount(config = { sm: 1, md: 2, lg: 3 }) {
  const width = useBreakpoint();

  if (width < 768) return config.sm;
  if (width < 1200) return config.md;
  return config.lg;
}

export function useServicesVisibleCount() {
  const width = useBreakpoint();

  if (width < 576) return 1;
  if (width < 992) return 2;
  if (width < 1200) return 3;
  return 4;
}

export function useProfileTestimonialsVisibleCount() {
  const width = useBreakpoint();

  if (width < 576) return 1;
  if (width < 768) return 2;
  if (width < 992) return 3;
  return 4;
}
