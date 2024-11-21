import { useEffect, useState } from "react";

const useScreenResponsiveness = () => {
  const [screenSize, setScreenSize] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  });

  const { sm, md, lg, xl, xxl } = screenSize;

  const handleScreenSize = () => {
    if (window.innerWidth >= 1536) {
      setScreenSize((prev) => ({ ...prev, xxl: true }));
      return;
    }
    if (window.innerWidth >= 1280) {
      setScreenSize((prev) => ({ ...prev, xl: true }));
      return;
    }
    if (window.innerWidth >= 1024) {
      setScreenSize((prev) => ({ ...prev, lg: true }));
      return;
    }
    if (window.innerWidth >= 768) {
      setScreenSize((prev) => ({ ...prev, md: true }));
      return;
    }
    if (window.innerWidth <= 640) {
      setScreenSize((prev) => ({ ...prev, sm: true }));
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize());

    return () => window.removeEventListener("resize", handleScreenSize());
  }, []);

  return {
    screenSize,
    isLargeScreen: lg || xl || xxl,
    isSmallScreen: sm || md,
  };
};

export default useScreenResponsiveness;
