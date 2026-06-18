import { useEffect } from 'react';

export function useOfficeSwitcher() {
  useEffect(() => {
    const icons = document.querySelectorAll<HTMLElement>('.offices-section .tech-icons span');

    const onClick = (event: Event) => {
      const icon = event.currentTarget as HTMLElement;
      document.querySelectorAll('.offices-section .tech-icons span').forEach((el) => {
        el.classList.remove('active');
      });
      icon.classList.add('active');

      const cityEl = document.getElementById('officeCityName');
      const addressEl = document.getElementById('officeAddress');
      const mapEl = document.getElementById('officeMap') as HTMLIFrameElement | null;

      if (cityEl && icon.dataset.city) {
        cityEl.textContent = icon.dataset.city;
      }
      if (addressEl && icon.dataset.address) {
        addressEl.innerHTML = icon.dataset.address.replace(/\n/g, '<br />');
      }
      if (mapEl && icon.dataset.map) {
        mapEl.src = icon.dataset.map;
      }
    };

    icons.forEach((icon) => icon.addEventListener('click', onClick));

    return () => {
      icons.forEach((icon) => icon.removeEventListener('click', onClick));
    };
  }, []);
}
