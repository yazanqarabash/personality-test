import { useEffect } from "react";

function useWindowResize(callback) {
  useEffect(() => {
    const handleResize = () => {
      callback();
    };
    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [callback]);
}

export default useWindowResize;
