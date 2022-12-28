import throttle from "../libs/throttle";
import { useState, useEffect } from "react";


const useScrollDetection = (delay) => {
  const [scrolledPosition, setScrolledPosition] = useState(0);

  const throttleScroll = throttle(() => {
    setScrolledPosition(window.scrollY);
  }, delay);

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);

    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  }, []);

  return scrolledPosition;
};

export default useScrollDetection;
