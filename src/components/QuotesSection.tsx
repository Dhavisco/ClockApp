import { useQuotes } from '../hooks/useQuotes';
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
    (<div className="quote-container">
      <div className='quote-content'>
        <div>{quoteData.quote}</div>
        <div className='author'>{quoteData.author}</div>
      </div>

      <button onClick={refreshQuotes}>
        {/* <FaArrowsRotate/> */}
        <img src={refreshIcon} alt="" />
      </button>
    </div>
    ) : (
      <p>{isExpanded ? "" : "Error Loading Quotes"}</p>
    )
  
  }
  </>
  )
}

export default QuotesSection
