import { useQuotes } from '../hooks/useQuotes';
import { motion } from 'framer-motion';
import './../styles/quotes.scss'
// import { FaArrowsRotate } from "react-icons/fa6";
import refreshIcon from './../assets/desktop/icon-refresh.svg'
import Preloader from './Preloader';

interface QuotesSectionProps {
  isExpanded: boolean;
}


const QuotesSection = ({isExpanded}:QuotesSectionProps) => {

  const {data:quoteData, isLoading: quoteLoading, refreshQuotes } = useQuotes();

   if (quoteLoading) {
    return (
      <>
        {!isExpanded && <Preloader />}
      </>
    );

  }
  
  return (
<>
   {!isExpanded && quoteData ?
    (<motion.div className="quote-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
    >
      <motion.div className='quote-content'
      key={quoteData.quote}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      >
        <div>{quoteData.quote}</div>
        <div className='author'>{quoteData.author}</div>
      </motion.div>

      <motion.button onClick={refreshQuotes}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // whileHover={{ rotate: 360, scale: 1.2 }}
      transition={{ duration: 0.5 }}
      >
        {/* <FaArrowsRotate/> */}
        <img src={refreshIcon} alt="" />
      </motion.button>
    </motion.div>
    ) : (
      <p>{isExpanded ? "" : "Error Loading Quotes"}</p>
    )
  
  }
  </>
  )
}

export default QuotesSection
