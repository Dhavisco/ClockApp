import { useEffect, useState } from "react";
import { useLocation } from "../hooks/useLocation";
import { useTime } from "../hooks/useTime";
import './../styles/time.scss'

import SunIcon from './../assets/desktop/icon-sun.svg';
import MoonIcon from './../assets/desktop/icon-moon.svg';
import ArrowDownIcon from './../assets/desktop/icon-arrow-down.svg';

export const TimeSection = () => {
  const { data: timeData } = useTime();
  const { data: locationData } = useLocation();

  const [currentTime, setCurrentTime] = useState<string>("");
  const [timeInfo, setTimeInfo] = useState({
    greeting: "Good Morning",
    icon: SunIcon,
    bgClass: "daytime-bg",
  });

  // Utility function to determine greeting and styles
  const getTimeInfo = (hours: number) => {
    if (hours >= 5 && hours < 12) {
      return {
        greeting: "Good Morning",
        icon: SunIcon,
        bgClass: "daytime-bg",
      };
    } else if (hours >= 12 && hours < 18) {
      return {
        greeting: "Good Afternoon",
        icon: SunIcon,
        bgClass: "daytime-bg",
      };
    } else {
      return {
        greeting: "Good Evening",
        icon: MoonIcon,
        bgClass: "nighttime-bg",
      };
    }
  };

  // Initialize and update the time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }));

      // Update greeting, icon, and background only if the hour changes
      const currentHour = now.getHours();
      setTimeInfo(getTimeInfo(currentHour));
    };

    updateTime(); // Initialize on mount
    const intervalId = setInterval(updateTime, 60 * 1000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup
  }, []);

  return (
    <div className={`time-container ${timeInfo.bgClass}`}>
      <div className="time-content">
        <div className="greeting">
            <img src={timeInfo.icon} alt="Icon"/>
             <div>{timeInfo.greeting}<span className="current">, IT'S CURRENTLY</span></div>
        </div>
        <div className="time">
          {currentTime} <span>{timeData?.abbreviation}</span>
        </div>
        <div className="location">
          IN {locationData?.city}, {locationData?.country_code}
        </div>
      </div>
      <div className="time-button">
        <div>MORE</div>
        <div className="time-arrow">
            <img src={ArrowDownIcon} alt="" />
        </div>
      </div>
    </div>
  );
};
