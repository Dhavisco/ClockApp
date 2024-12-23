// import { useLocation } from "../hooks/useLocation";
// import { useQuotes } from "../hooks/useQuotes";
// import { useTime } from "../hooks/useTime";


const Index = () => {
//   const { data: timeData, isLoading: timeLoading } = useTime();
//   const { data: locationData, isLoading: locationLoading } = useLocation();
//   const {data:quoteData, isLoading: quoteLoading, refreshQuotes } = useQuotes();

//   if (timeLoading || locationLoading || quoteLoading) {
//     return <p className="text-center text-xl">Loading...</p>;
//   }

  return (
//    <div className="text-center p-4">
//       {timeData && locationData ? (
//         <>
//           {/* <h1 className="text-3xl font-bold">Hello from {locationData.city}, {locationData.country}!</h1> */}
//           <p className="text-lg">{new Date(timeData.datetime).toLocaleTimeString()}</p>
//           <p>Timezone: {timeData.timezone}</p>
//           <p>{locationData.city}, {locationData.countryCode}</p>
//         </>
//       ) : (
//         <p>Error loading data</p>
//       )}

//       {quoteData ? (
//         <div className="mt-6 p-4 border rounded shadow-md bg-gray-100">
//           <p className="italic text-lg">{`"${quoteData.content}"`}</p>
//           <p className="mt-2 text-right">— {quoteData.author}</p>
//           <button
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//             onClick={refreshQuotes}
//           >
//             Refresh Quote
//           </button>
//         </div>
//       ) : (
//         <p>Error loading quote</p>
//       )}
//     </div>
<div>
    
</div>
  );
};

export default Index
