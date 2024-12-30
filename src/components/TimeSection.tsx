import { useEffect, useState } from "react";
import { useLocation } from "../hooks/useLocation";
import { useTime } from "../hooks/useTime";
import { useUpdateBackground } from "../hooks/useUpdateBackground";
import './../styles/time.scss'
import { motion } from "framer-motion";

import SunIcon from './../assets/desktop/icon-sun.svg';
import MoonIcon from './../assets/desktop/icon-moon.svg';
import ArrowDownIcon from './../assets/desktop/icon-arrow-down.svg';
import ArrowUpIcon from './../assets/desktop/icon-arrow-up.svg';
// import { TbChristmasTreeFilled } from "react-icons/tb";
import { MdCelebration } from "react-icons/md";
import Preloader from "./Preloader";
import Typewriter from "typewriter-effect";


interface TimeSectionProps {
  toggleExpand: () => void;
  isExpanded: boolean; // Accepting the expanded state from the parent
}

export const TimeSection = ({toggleExpand, isExpanded}:TimeSectionProps) => {
  const { data: timeData, isLoading:timeLoading } = useTime();
  const { data: locationData, isLoading:locationLoading } = useLocation();

  const [currentTime, setCurrentTime] = useState<string>("");
  const [timeInfo, setTimeInfo] = useState({
    greeting: "Good Morning",
    icon: SunIcon
  });

  const timeOfDay = useUpdateBackground();

  const specialSeasonMessage = 'HAPPY NEW YEAR IN ADVANCE!'

  // Utility function to determine greeting and styles
  const getTimeInfo = (hours: number) => {
    if (hours >= 5 && hours < 12) {
      return {
        greeting: "Good Morning",
        icon: SunIcon
      };
    } else if (hours >= 12 && hours < 18) {
      return {
        greeting: "Good Afternoon",
        icon: SunIcon
      };
    } else {
      return {
        greeting: "Good Evening",
        icon: MoonIcon
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




  if (timeLoading || locationLoading) {
    return <Preloader />;
  }

  return (



































   <div className="time-container">
  <div className={`time-wrap ${isExpanded ? "expanded" : ""}`}>
    <div className="time-content">
    
         <div className="special-season">
        < MdCelebration className="tree"/>
        <Typewriter
        options={{ loop: true }}
        onInit={(typewriter) => {
        typewriter
          .typeString(specialSeasonMessage)
          .pauseFor(2000) // Pause before deleting
          .deleteAll()
          .start();
      }}
  />
        </div>
      <div className="greeting">
        <img src={timeInfo.icon} alt="Icon" />
        <div>
          {timeInfo.greeting}
          <span className="current">, IT'S CURRENTLY</span>
        </div>
      </div>

      {/* Current time */}
      <motion.div 

      key={currentTime}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="time">
        {currentTime} <span>{timeData?.abbreviation}</span>
        {/* Clock indicator */}
  <motion.div
    className="clock-indicator"
    initial={{ scale: 1 }}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 360],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      marginLeft: "10px",
      width: "10px",
      height: "10px",
      borderRadius: "50%",

      backgroundColor: "green",
    }}
  />
      </motion.div>

      <div className="location">
        IN {locationData?.city}, {locationData?.country_code}
      </div>
    </div>
    <div className="time-button" onClick={toggleExpand}>
      <div>{isExpanded ? "LESS" : "MORE"}</div>
      <div className="time-arrow">
        <img src={isExpanded ? ArrowUpIcon : ArrowDownIcon} alt="Toggle Icon" />
      </div>
    </div>
  </div>
  {isExpanded && (
    <motion.div className={`expanded-content ${timeOfDay === "day" ? "day" : "night"}`}
    initial={{ height: 0, opacity: 0 }}
        animate={isExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="details">
        <div className="time-year">
            <div className="timezone details-wrap">
            <div className="details-head">CURRENT TIMEZONE</div>
            <div className="details-info">{timeData?.timezone}</div>
            </div> 
            
            <div className="day-year details-wrap">
            <div className="details-head">DAY OF THE YEAR</div>
            <div className="details-info">{timeData?.day_of_year}</div>
            </div>
        </div>
        <div className="day-week">
            <div className="day details-wrap">
                <div className="details-head">DAY OF THE WEEK</div>
                <div className="details-info">{timeData?.day_of_week}</div>
            </div>
            <div className="week-number details-wrap">
                <div className="details-head">WEEK NUMBER</div>
                <div className="details-info">{timeData?.week_number}</div>
            </div>
        </div>
        
      </div>
    </motion.div>
  )}
</div>


  );

};