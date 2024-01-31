import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTopController = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    try {
      if ("scrollBehavior" in document.documentElement.style) {
        // Use smooth scrolling if supported
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Fallback to traditional scrolling
        window.scrollTo(0, 0);
      }
    } catch (error) {
      // Fallback to traditional scrolling in case of any error
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
};
