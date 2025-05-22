import { useState, useRef, useEffect } from "react";
import minimizeIcon from "../artifact/icons8-minimize-window-48.png";
import { marked } from "marked";
import html2pdf from "html2pdf.js";
import DOMPurify from "dompurify";

function Chatbot({isDarkMode, isChatbotOpen}) {
    // const recognitionRef = useRef(null);
    // const [isListening, setIsListening] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [chat, setChat] = useState([]);
    const exportRef = useRef(null);

    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chat]);

    const handleQuickQuestion = (text) => {
        setQuery(text);
        setTimeout(() => {
          handleSubmit();
        }, 0); // Ensure `setQuery` is committed before submission
      };
    
      const handleSubmit = async () => {
        if (!query.trim()) return;
      
        const userMessage = { role: "user", content: query };
        const typingMessage = { role: "bot", content: "Pence Bot is thinking . . . " };
      
        setChat((prev) => [...prev, userMessage, typingMessage]);
        setQuery(""); // Clear input field
      
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
      
        try {
          const res = await fetch(
            `https://Bunpheng-portfoliobot.hf.space/stream?query=${encodeURIComponent(query)}`,
            { signal: controller.signal }
          );
      
          clearTimeout(timeoutId);
      
          if (!res.ok || !res.body) throw new Error("Stream not available");
      
          const reader = res.body.getReader();
          const decoder = new TextDecoder("utf-8");
          let fullResponse = "";
      
          while (true) {
            const { value, done } = await reader.read();
            if (done) break;
      
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split("\n").filter((line) => line.trim() !== "");
      
            for (const line of lines) {
              const trimmedLine = line.trim();
              if (!trimmedLine.startsWith("data:")) continue;
      
              try {
                const json = JSON.parse(trimmedLine.replace(/^data:\s*/, ""));
                if (json.content) {
                  fullResponse += json.content;
      
                  setChat((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1] = {
                      role: "bot",
                      content: fullResponse,
                    };
                    return updated;
                  });
                }
              } catch {
                // skip malformed chunks
              }
            }
          }
        } catch (err) {
          clearTimeout(timeoutId);
          setChat((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "bot",
              content: "There is some issue with the server. Please try again later.",
            };
            return updated;
          });
        }
      };
    
      useEffect(() => {
        setIsOpen(isChatbotOpen);
      }, [isChatbotOpen]);

      const downloadAsPDF = () => {
        if (!exportRef.current) return;
      
        const opt = {
          margin:       0.5,
          filename:     'Pence_Resume.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
      
        html2pdf().set(opt).from(exportRef.current).save();
      };
      
      const mainStyle = {
        // backgroundColor: isDarkMode ? "#030712" : "#f9f9f7",
        backgroundColor: isDarkMode ? "#070c0b" : "",
        color: isDarkMode ? "#ffffff" : "#111827",
        transition: "all 0.3s ease",
    };

  return (
    <div className="fixed bottom-2 right-4 z-[2000]">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="text-sm bg-gray-900 text-white px-1 py-1 rounded-lg shadow-lg hover:bg-blue-700 transition border-[1px] border-solid border-white"
        >
          Ask Me
        </button>
      )}

      {isOpen && (
        <div
            className={`flex flex-col rounded-lg overflow-hidden transition-all duration-500 ease-in-out h-[70vh] md:h-[90vh] w-[94vw] md:w-[30vw] 
            // ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`
            }
            style={mainStyle}
            >
            <div className="w-full bg-stone-800 p-2"> 
            <div className=" text-white flex justify-between items-center">
                <span className="text-sm font-semibold">Pence Bot - Experimental AI Bot v.1</span>
                <button onClick={toggleChat}>
                <img src={minimizeIcon} width={20} height={20} alt="minimize" />
                </button>
            </div>
            <span className="text-xs text-left mt-0 text-white"> Server may take sometime to response</span>
            </div>

            <div className="flex-1 p-3 overflow-y-auto text-xs space-y-2">
                {/* {chat.length === 0 && ( */}
                <div> 
                <p className="font-semibold text-lg">👋 Hi there, I'm Pence Bot!</p>
                <p className="text-gray-400">I'm your personal guide—here to help you explore everything about pence from my projects and education to fun facts and more. Your conversation will not be recorded</p>
                <p className="my-3">😃 Ready to discover what I'm all about? Let's get started!</p>

                {/* <div className="w-full flex gap-2 mt-1">
                    <button className="border-[1px] border-solid rounded-full p-1"> Who is Pence ? </button>
                    <button className="border-[1px] border-solid rounded-full p-1"> Where did he go to school ?</button>
                </div> */}
                <div className="w-full grid grid-cols-2 gap-2 mt-1">
                    <button
                        onClick={() => handleQuickQuestion("Who is Pence?")}
                        className="border-[1px] border-solid rounded-full p-1 px-3 hover:bg-stone-700 hover:text-white transition"
                    >
                        Who is Pence?
                    </button>
                    <button
                        onClick={() => handleQuickQuestion("Where did he go to school?")}
                        className="border-[1px] border-solid rounded-full p-1 px-3 hover:bg-stone-700 hover:text-white transition"
                    >
                        Where did he go to school?
                    </button>
                    <button
                        onClick={() => handleQuickQuestion("Tell me about his projects?")}
                        className="border-[1px] border-solid rounded-full p-1 px-3 hover:bg-stone-700 hover:text-white transition"
                    >
                        Tell me about his projects?
                    </button>
                    <button
                        onClick={() => handleQuickQuestion("Create his resume?")}
                        className="border-[1px] border-solid rounded-full p-1 px-3 hover:bg-stone-700 hover:text-white transition"
                    >
                        Create his resume ?
                    </button>
                </div>

                </div>

                {/* )} */}
                {chat.map((msg, index) => {
                    const isAssistant = msg.role !== "user";
                    const resumeKeywords = ["# Resume", "## Resume", "Curriculum Vitae", "Objective", "Experience"];
                    const isResume = isAssistant && resumeKeywords.some(keyword => msg.content.includes(keyword));
                    const htmlContent = marked.parse(msg.content);

                    return (
                        <div key={index} className="w-full mb-2">
                        <div
                            ref={isResume ? exportRef : null}
                            className={`px-3 py-2 rounded-lg max-w-[90%] whitespace-pre-wrap ${
                            msg.role === "user"
                                ? "bg-blue-100 self-end text-right ml-auto text-gray-900"
                                : "bg-gray-100 self-start text-left text-gray-900"
                            }`}
                            // dangerouslySetInnerHTML={{ __html: htmlContent }}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(msg.content)) }}
                        />

                        {isResume && (
                            <div className="mt-2 text-left ml-2">
                            <button
                                onClick={downloadAsPDF}
                                className="bg-green-600 text-white px-3 py-1 text-xs rounded hover:bg-green-700 transition"
                            >
                                Download as PDF
                            </button>
                            </div>
                        )}
                        </div>
                    );
                })}



                
                <div ref={messagesEndRef} />
            </div>

            <div className="w-full px-2 pb-2">
                <div className="flex flex-col gap-2 border border-gray-300 p-2 rounded-lg shadow-md justify-center">
                <input
                    className={`text-sm p-1 rounded w-full focus:outline-none`}
                    placeholder="Type your message..."
                    style={mainStyle}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                    if (e.key === "Enter") handleSubmit();
                    }}
                />
                <div className="w-full flex flex-row justify-end gap-2">
                    <button
                        onClick={handleSubmit}
                        className="self-end bg-blue-600 text-white px-3 py-1 text-xs rounded hover:bg-blue-700 transition"
                    >
                        Send
                    </button>
                    <button
                        onClick={() => setChat([])}
                        className={`text-xs ${isDarkMode? 'text-white': 'text-gray-900'} border border-red-600 px-2 rounded-md hover:bg-red-600 hover:text-white transition`}
                        >
                        Clear Chat
                    </button>

                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
