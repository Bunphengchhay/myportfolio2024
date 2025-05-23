import React, { useEffect, useState, useRef } from "react";

export default function GetMetrics() {
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState(null);
  const [connected, setConnected] = useState(false);
  const [isMetricsOpen, setIsMetricsOpen] = useState(false);

  const wsRef = useRef(null);
  const retryCount = useRef(0);
  const maxRetries = 5;

  const connectWebSocket = () => {
    setError(null); // clear error on new try
    const ws = new WebSocket("wss://bunpheng-googleAnalyticPortfolio.hf.space/ws");
    wsRef.current = ws;

    ws.onopen = () => {
      retryCount.current = 0;
      setConnected(true);
      setError(null);
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMetrics(data);
      } catch (err) {
        console.error("Error parsing message:", err);
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
      setConnected(false);
      setError("Unable to connect — retrying...");
      attemptReconnect();
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
      setConnected(false);
      setError("Connection lost — retrying...");
      attemptReconnect();
    };
  };

  const attemptReconnect = () => {
    if (retryCount.current < maxRetries) {
      retryCount.current += 1;
      setTimeout(() => {
        console.log(`Retrying connection #${retryCount.current}`);
        connectWebSocket();
      }, 3000); // wait 3 seconds before reconnect
    } else {
      setError("Failed to connect after multiple attempts.");
    }
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (wsRef.current) wsRef.current.close();
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => setIsMetricsOpen(!isMetricsOpen)}
        className="mt-2 underline hover:bg-gradient-to-r hover:from-yellow-700 hover:to-blue-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse transition duration-300"
      >
        {isMetricsOpen ? "Close" : "Site Traffic"}
      </button>

      {!connected && error && (
        <div className="text-yellow-500 text-sm mt-1">{error}</div>
      )}

      {isMetricsOpen && (
        <div className="w-full mt-2">
          <h2 className="py-2 text-sm">Live Google Analytics Metrics</h2>
          {metrics ? (
            <ul className="w-full flex flex-row justify-between md:justify-center gap-2 overflow-x-auto text-white text-xs pb-2">
              {[
                { label: "Total Users", value: metrics.total_users },
                { label: "Today's Active Users", value: metrics.today_active_users },
                { label: "Total Chatbot Users", value: metrics.total_chatbot_users },
                { label: "Today's Chatbot Users", value: metrics.today_chatbot_users },
                { label: "Total Chatbot Events", value: metrics.total_chatbot_events },
                { label: "Today's Chatbot Events", value: metrics.today_chatbot_events },
              ].map((metric, idx) => (
                <li
                  key={idx}
                  className="min-w-[100px] bg-stone-800 p-2 rounded-md flex flex-col justify-center items-center shrink-0"
                >
                  <strong>{metric.label}</strong>
                  <span>{metric.value ?? "N/A"}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div>Waiting for metrics data...</div>
          )}
        </div>
      )}
    </div>
  );
}

// import React, { useEffect, useState, useRef } from "react";

// export default function GetMetrics() {
//   const [metrics, setMetrics] = useState(null);
//   const [error, setError] = useState(null);
//   const [connected, setConnected] = useState(false);
//   const [isMetricsOpen, setIsMetricsOpen] = useState(false);

//   // To debounce error / disconnect flashes
//   const errorTimeout = useRef(null);

//   useEffect(() => {
//     const ws = new WebSocket("wss://bunpheng-googleAnalyticPortfolio.hf.space/ws");

//     ws.onopen = () => {
//       clearTimeout(errorTimeout.current);
//       setConnected(true);
//       setError(null);
//       console.log("WebSocket connected");
//     };

//     ws.onmessage = (event) => {
//       try {
//         const data = JSON.parse(event.data);
//         setMetrics(data);
//       } catch (err) {
//         console.error("Error parsing message:", err);
//       }
//     };

//     ws.onerror = (err) => {
//       // Wait 2 seconds before setting error to avoid flash
//       if (!errorTimeout.current) {
//         errorTimeout.current = setTimeout(() => {
//           setError("WebSocket error");
//           setConnected(false);
//         }, 2000);
//       }
//       console.error("WebSocket error:", err);
//     };

//     ws.onclose = () => {
//       // Wait 2 seconds before setting disconnected to avoid flicker
//       if (!errorTimeout.current) {
//         errorTimeout.current = setTimeout(() => {
//           setConnected(false);
//           setError("WebSocket disconnected");
//         }, 2000);
//       }
//       console.log("WebSocket connection closed");
//     };

//     return () => {
//       clearTimeout(errorTimeout.current);
//       ws.close();
//     };
//   }, []);

//   return (
//     <div>
//       <button
//         onClick={() => setIsMetricsOpen(!isMetricsOpen)}
//         className="mt-2 underline hover:bg-gradient-to-r hover:from-yellow-700 hover:to-blue-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse transition duration-300"
//       >
//         {isMetricsOpen ? "Close" : "Site Traffic"}
//       </button>

//       {/* Show a subtle error or connection status, but keep the button always visible */}
//       {!connected && error && (
//         <div className="text-red-500 text-sm mt-1">{error}</div>
//       )}

//       {isMetricsOpen && (
//         <div className="w-full mt-2">
//           <h2 className="py-2 text-sm">Live Google Analytics Metrics</h2>
//           {metrics ? (
//             <ul className="w-full flex flex-row justify-between md:justify-center gap-2 overflow-x-auto text-white text-xs pb-2">
//               {[
//                 { label: "Total Users", value: metrics.total_users },
//                 { label: "Today's Active Users", value: metrics.today_active_users },
//                 { label: "Total Chatbot Users", value: metrics.total_chatbot_users },
//                 { label: "Today's Chatbot Users", value: metrics.today_chatbot_users },
//                 { label: "Total Chatbot Events", value: metrics.total_chatbot_events },
//                 { label: "Today's Chatbot Events", value: metrics.today_chatbot_events },
//               ].map((metric, idx) => (
//                 <li
//                   key={idx}
//                   className="min-w-[100px] bg-stone-800 p-2 rounded-md flex flex-col justify-center items-center shrink-0"
//                 >
//                   <strong>{metric.label}</strong>
//                   <span>{metric.value ?? "N/A"}</span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <div>Waiting for metrics data...</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";

// export default function GetMetrics() {
//   const [metrics, setMetrics] = useState(null);
//   const [error, setError] = useState(null);
//   const [connected, setConnected] = useState(false);
//   const [isMetricsOpen, setIsMetricsOpen] = useState(false);

//   useEffect(() => {
//     // Replace with your deployed WebSocket URL
//     const ws = new WebSocket("wss://bunpheng-googleAnalyticPortfolio.hf.space/ws");

//     ws.onopen = () => {
//       setConnected(true);
//       setError(null);
//       console.log("WebSocket connected");
//     };

//     ws.onmessage = (event) => {
//       try {
//         const data = JSON.parse(event.data);
//         setMetrics(data);
//       } catch (err) {
//         console.error("Error parsing message:", err);
//       }
//     };

//     ws.onerror = (err) => {
//       setError("WebSocket error");
//     //   console.error("WebSocket error:", err);
//     };

//     ws.onclose = () => {
//       setConnected(false);
//       console.log("WebSocket connection closed");
//     };

//     // Cleanup websocket on unmount
//     return () => {
//       ws.close();
//     };
//   }, []);

//   // Render error if any
//   if (error) {
//     return <div className="text-red-500">Error: {error}</div>;
//   }

//   // Render connection state if not connected
//   if (!connected) {
//     return <div>Connecting to WebSocket...</div>;
//   }

//   return (
//     <div>
//       <button
//         onClick={() => setIsMetricsOpen(!isMetricsOpen)}
//         className="mt-2 underline hover:bg-gradient-to-r hover:from-yellow-700 hover:to-blue-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse transition duration-300"
//       >
//         {isMetricsOpen ? "Close" : "Site Traffic"}
//       </button>

//       {isMetricsOpen && (
//         <div className="w-full">
//           <h2 className="py-2 text-sm">Live Google Analytics Metrics</h2>
//           {metrics ? (
//             <ul className="w-full flex flex-row justify-between md:justify-center gap-2 overflow-x-auto text-white text-xs pb-2">
//               {[
//                 { label: "Total Users", value: metrics.total_users },
//                 { label: "Today's Active Users", value: metrics.today_active_users },
//                 { label: "Total Chatbot Users", value: metrics.total_chatbot_users },
//                 { label: "Today's Chatbot Users", value: metrics.today_chatbot_users },
//                 { label: "Total Chatbot Events", value: metrics.total_chatbot_events },
//                 { label: "Today's Chatbot Events", value: metrics.today_chatbot_events },
//               ].map((metric, idx) => (
//                 <li
//                   key={idx}
//                   className="min-w-[100px] bg-stone-800 p-2 rounded-md flex flex-col justify-center items-center shrink-0"
//                 >
//                   <strong>{metric.label}</strong>
//                   <span>{metric.value ?? "N/A"}</span>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <div>Waiting for metrics data...</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";

// export default function GetMetrics() {
//   const [metrics, setMetrics] = useState(null);
//   const [error, setError] = useState(null);
//   const [connected, setConnected] = useState(false);
//   const [isOpenMetrices, setIsMetricesOpen] = useState(false);

// //   useEffect(() => {
// //     const ws = new WebSocket("ws://localhost:8000/ws");

// //     ws.onopen = () => {
// //       setConnected(true);
// //       setError(null);
// //       console.log("WebSocket connected");
// //     };

// //     ws.onmessage = (event) => {
// //       try {
// //         const data = JSON.parse(event.data);
// //         setMetrics(data);
// //       } catch (err) {
// //         console.error("Error parsing message:", err);
// //       }
// //     };

// //     ws.onerror = (err) => {
// //       setError("WebSocket error");
// //       console.error("WebSocket error:", err);
// //     };

// //     ws.onclose = () => {
// //       setConnected(false);
// //       console.log("WebSocket connection closed");
// //     };

// //     // Cleanup on unmount
// //     return () => {
// //       ws.close();
// //     };
// //   }, []);

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   if (!connected) {
// //     return <div>Connecting to WebSocket...</div>;
// //   }

// //   if (!metrics) {
// //     return <div>Waiting for metrics data...</div>;
// //   }
// useEffect(() => {
//     // Update with your deployed Huggingface Space WS URL
//     // Assuming your Space runs FastAPI and exposes /ws WebSocket endpoint
//     const ws = new WebSocket("wss://bunpheng-googleAnalyticPortfolio.hf.space/ws");
  
//     ws.onopen = () => {
//       setConnected(true);
//       setError(null);
//       console.log("WebSocket connected");
//     };
  
//     ws.onmessage = (event) => {
//       try {
//         const data = JSON.parse(event.data);
//         setMetrics(data);
//       } catch (err) {
//         console.error("Error parsing message:", err);
//       }
//     };
  
//     ws.onerror = (err) => {
//       setError("WebSocket error");
//       console.error("WebSocket error:", err);
//     };
  
//     ws.onclose = () => {
//       setConnected(false);
//       console.log("WebSocket connection closed");
//     };
  
//     return () => {
//       ws.close();
//     };
//   }, []);
  

//   return (
//     <div>
//       <button
//         onClick={() => setIsMetricesOpen(!isOpenMetrices)}
//         className="mt-2 underline hover:bg-gradient-to-r hover:from-yellow-700 hover:to-blue-500 hover:bg-clip-text hover:text-transparent hover:animate-pulse transition duration-300"
//         >
//         {isOpenMetrices ? "Close" : "Site Traffic"}
//         </button>


  
//         {isOpenMetrices && (
//         <div className="w-full">
//             <h2 className="py-2 text-sm">Live Google Analytics Metrics</h2>
//             <ul className="w-full flex flex-row justify-between md:justify-center gap-2 overflow-x-auto text-white text-xs pb-2">
//             {[
//                 { label: "Total Users", value: metrics.total_users },
//                 { label: "Today's Active Users", value: metrics.today_active_users },
//                 { label: "Total Chatbot Users", value: metrics.total_chatbot_users },
//                 { label: "Today's Chatbot Users", value: metrics.today_chatbot_users },
//                 { label: "Total Chatbot Events", value: metrics.total_chatbot_events },
//                 { label: "Today's Chatbot Events", value: metrics.today_chatbot_events },
//             ].map((metric, idx) => (
//                 <li
//                 key={idx}
//                 className="min-w-[100px] bg-stone-800 p-2 rounded-md flex flex-col justify-center items-center shrink-0"
//                 >
//                 <strong>{metric.label}</strong> {metric.value}
//                 </li>
//             ))}
//             </ul>
//         </div>
//         )}

//     </div>
//   );
  
// }
