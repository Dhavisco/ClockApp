import { useQuotes } from '../hooks/useQuotes';
import './../styles/quotes.scss'
// import { FaArrowsRotate } from "react-icons/fa6";
import refreshIcon from './../assets/desktop/icon-refresh.svg'


const QuotesSection = () => {

  const {data:quoteData, isLoading: quoteLoading, refreshQuotes } = useQuotes();

  if(quoteLoading){
    return <p>Loading quote</p>
  }

  return (
<>
   { quoteData ?
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
      <p>Error Loading Quotes</p>
    )
  
  }
  </>
  )
}

export default QuotesSection
