import { useEffect, useState } from "react";
import { useTime } from "./useTime";

export const useUpdateBackground = () => {

    const {data:timeData} = useTime();
    const [timeOfDay, setTimeOfDay] = useState<"day" | "night">("day");

  useEffect(() => {
    const updateBackground = () => {

      // Use fallback if timeData is unavailable or invalid
      const fallbackHour = new Date().getHours(); // Fallback to system time
      const currentHour = timeData?.datetime
        ? new Date(timeData.datetime).getHours()
        : fallbackHour;
      const bodyElement = document.body;

      // Determine time of day
      if (currentHour >= 5 && currentHour < 18) {
        bodyElement.classList.add("daytime");
        bodyElement.classList.remove("nighttime");
        setTimeOfDay("day");
      } else {
        bodyElement.classList.add("nighttime");
        bodyElement.classList.remove("daytime");
        setTimeOfDay("night");
      }
    };

    updateBackground(); // Set the initial background
    const interval = setInterval(updateBackground, 60 * 60 * 1000); // Update every hour

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [timeData]);

  return timeOfDay;
};
