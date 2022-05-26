import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.querySelector('html');
    const docs = document.querySelector('.docs--main');
    docs?.scrollTo(0, 0);
    html?.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
