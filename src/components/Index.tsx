import QuotesSection from "./QuotesSection";

import './../styles/main.scss'
import { TimeSection } from "./TimeSection";
import { useState } from "react";


const Index = () => {

  const [isExpanded, setIsExpanded] = useState(false);

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
