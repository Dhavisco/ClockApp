import { useEffect, useState } from "react";
import { useLocation } from "../hooks/useLocation";
import { useTime } from "../hooks/useTime";
import { useUpdateBackground } from "../hooks/useUpdateBackground";
import './../styles/time.scss'

import SunIcon from './../assets/desktop/icon-sun.svg';
import MoonIcon from './../assets/desktop/icon-moon.svg';
import ArrowDownIcon from './../assets/desktop/icon-arrow-down.svg';
import ArrowUpIcon from './../assets/desktop/icon-arrow-up.svg';
// import { TbChristmasTreeFilled } from "react-icons/tb";
import { MdCelebration } from "react-icons/md";
import Preloader from "./Preloader";


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
//   const [isExpanded, setIsExpanded] = useState(false)
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

  //Toggle expanded view
 

  if (timeLoading || locationLoading) {
    return <Preloader />;
  }

  return (
//     <div className="time-section">
//      <div className={`time-container`}>
//       <div className={`time-content ${isExpanded ? "expanded" : ""}`}>
//         <div className="greeting">
//             <img src={timeInfo.icon} alt="Icon"/>
//              <div>{timeInfo.greeting}<span className="current">, IT'S CURRENTLY</span></div>
//         </div>
//         <div className="time">
//           {currentTime} <span>{timeData?.abbreviation}</span>
//         </div>
//         <div className="location">
//           IN {locationData?.city}, {locationData?.country_code}
//         </div>
//       </div>
//        <div className="time-button" onClick={toggleExpand}>
//         <div>{isExpanded ? "LESS" : "MORE"}</div>
//         <div className="time-arrow">
//           <img src={isExpanded ? ArrowUpIcon : ArrowDownIcon} alt="Toggle Icon" />
//         </div>
//       </div>
//     </div>

//  {/* Expanded Content */}
//       { isExpanded && 
//       <div className="expanded-content">
//         <div className="details">
//           <p>Current Timezone: <span>{timeData?.timezone}</span></p>
//           <p>Day of the Year: <span>{timeData?.day_of_year}</span></p>
//           <p>Day of the Week: <span>{timeData?.day_of_week}</span></p>
//           <p>Week Number: <span>{timeData?.week_number}</span></p>
//         </div>
//       </div>}
//     </div>


   <div className="time-container">
  <div className={`time-wrap ${isExpanded ? "expanded" : ""}`}>
    <div className="time-content">
    
         <div className="special-season">
        < MdCelebration className="tree"/>
        {specialSeasonMessage}</div>
      <div className="greeting">
        <img src={timeInfo.icon} alt="Icon" />
        <div>
          {timeInfo.greeting}
          <span className="current">, IT'S CURRENTLY</span>
        </div>
      </div>
      <div className="time">
        {currentTime} <span>{timeData?.abbreviation}</span>
      </div>
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
    <div className={`expanded-content ${timeOfDay === "day" ? "day" : "night"}`}>
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
    </div>
  )}
</div>


  );
};
