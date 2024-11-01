import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Mueve la vista al inicio de la página cada vez que cambia la ruta
  }, [pathname]); // Se ejecuta en cada cambio de ruta

  return null;
}

export default ScrollToTop;
