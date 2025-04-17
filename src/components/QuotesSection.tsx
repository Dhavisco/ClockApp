// import { useQuotes } from '../hooks/useQuotes';
// import { motion } from 'framer-motion';
// import './../styles/quotes.scss'
// // import { FaArrowsRotate } from "react-icons/fa6";
// import refreshIcon from './../assets/desktop/icon-refresh.svg'
// import Preloader from './Preloader';

// interface QuotesSectionProps {
//   isExpanded: boolean;
// }


// const QuotesSection = ({isExpanded}:QuotesSectionProps) => {

//   const {data:quoteData, isLoading: quoteLoading, refreshQuotes } = useQuotes();

//    if (quoteLoading) {
//     return (
//       <>
//         {!isExpanded && <Preloader />}
//       </>
//     );

//   }
  
//   return (
// <>
//    {!isExpanded && quoteData ?
//     (<motion.div className="quote-container"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 20 }}
//           transition={{ duration: 1 }}
//     >
//       <motion.div className='quote-content'
//       key={quoteData.quote}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//       >
//         <div>{quoteData.quote}</div>
//         <div className='author'>{quoteData.author}</div>
//       </motion.div>

//       <motion.button onClick={refreshQuotes}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       // whileHover={{ rotate: 360, scale: 1.2 }}
//       transition={{ duration: 0.5 }}
//       >
//         {/* <FaArrowsRotate/> */}
//         <img src={refreshIcon} alt="" />
//       </motion.button>
//     </motion.div>
//     ) : (
//       <p>{isExpanded ? "" : "Error Loading Quotes"}</p>
//     )
  
//   }
//   </>
//   )
// }

// export default QuotesSection

import { useEffect, useState } from 'react';
import { useQuotes } from '../hooks/useQuotes';
import { motion } from 'framer-motion';
import './../styles/quotes.scss';
import refreshIcon from './../assets/desktop/icon-refresh.svg';
import Preloader from './Preloader';

interface QuotesSectionProps {
  isExpanded: boolean;
}

const QuotesSection = ({ isExpanded }: QuotesSectionProps) => {
  const { data: quoteData, isLoading: quoteLoading, refreshQuotes } = useQuotes();
  const [isRotating, setIsRotating] = useState(false);

  const triggerRefresh = () => {
    refreshQuotes();
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 600); // End rotation after 600ms
  };

  // Auto-refresh every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      triggerRefresh();
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, []);

  if (quoteLoading) {
    return <>{!isExpanded && <Preloader />}</>;
  }

  return (
    <>
      {!isExpanded && quoteData && (
        <motion.div
          className="quote-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="quote-content"
            key={quoteData.quote}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>{quoteData.quote}</div>
            <div className="author">— {quoteData.author}</div>
          </motion.div>

          <motion.button
            onClick={triggerRefresh}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`refresh-btn ${isRotating ? 'rotating' : ''}`}
          >
            <img src={refreshIcon} alt="Refresh quote" />
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

export default QuotesSection;
