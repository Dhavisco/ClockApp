import { useEffect } from "react";

export const useUpdateBackground = () => {
  useEffect(() => {
    const updateBackground = () => {
      const currentHour = new Date().getHours();
      const bodyElement = document.body;

      // Determine time of day
      if (currentHour >= 5 && currentHour < 18) {
        bodyElement.classList.add("daytime");
        bodyElement.classList.remove("nighttime");
      } else {
        bodyElement.classList.add("nighttime");
        bodyElement.classList.remove("daytime");
      }
    };

    updateBackground(); // Set the initial background
    const interval = setInterval(updateBackground, 60 * 60 * 1000); // Update every hour

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
};
