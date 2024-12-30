import QuotesSection from "./QuotesSection";

import './../styles/main.scss'
import { TimeSection } from "./TimeSection";
import { useEffect, useState } from "react";
import preloader from "./../assets/preloader.gif";


const Index = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 5000); // Preloader duration in milliseconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (showPreloader) {
    // Return the preloader directly
    return (
      <div className="preloader">
        <img src={preloader} alt="Loading..." />
      </div>
    );
  }

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
<div className="main-container">
  
      {/* Quote Section */}
      <div className="quote-wrapper">
        <QuotesSection isExpanded={isExpanded}/>
      </div>

      {/* Time Section */}
      <TimeSection isExpanded={isExpanded} toggleExpand ={toggleExpand}/>
    </div>
  );
};

export default Index
