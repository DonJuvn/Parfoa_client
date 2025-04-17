import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
   "AIzaSyBw3JyRcK8RN65FDkeG8fv6Tc745Du_lUU",
   {
      apiVersion: "v1", // Use v1 instead of v1beta
   }
);

const GeminiChat = () => {
   const [messages, setMessages] = useState([]);
   const [input, setInput] = useState("");
   const [loading, setLoading] = useState(false);
   const [availableModels, setAvailableModels] = useState([]);

   useEffect(() => {
      // Fetch available models when the component is mounted
      const listModels = async () => {
         try {
            const models = await genAI.listModels();
            setAvailableModels(models);
            console.log(models);
         } catch (error) {
            console.error("Error fetching models:", error.message);
         }
      };

      listModels();
   }, []);

   const handleSend = async () => {
      if (!input.trim()) return;

      const newMessages = [...messages, { role: "user", content: input }];
      setMessages(newMessages);
      setInput("");
      setLoading(true);

      try {
         const model = availableModels.find(
            (model) => model.id === "gemini-2.0-flash"
         );

         if (model) {
            const result = await model.generateContent(input);
            const reply = result.response.text();
            setMessages([...newMessages, { role: "model", content: reply }]);
         } else {
            console.error("Model 'gemini-2.0-flash' is not available.");
         }
      } catch (error) {
         console.error("Gemini API error:", error.message);
      } finally {
         setLoading(false);
      }
   };

   return (
      <>
         <div id="chat">
            <div className="container">
               <div className="chat">
                  <div className="p-4 w-full mx-auto">
                     <div className="h-96 overflow-y-auto border p-15 rounded bg-white shadow w-full">
                        {messages.map((msg, idx) => (
                           <div
                              key={idx}
                              className={`mb-2 ${
                                 msg.role === "user"
                                    ? "text-right"
                                    : "text-left"
                              }`}
                           >
                              <div
                                 className={`inline-block px-4 py-2 rounded ${
                                    msg.role === "user"
                                       ? "bg-blue-200"
                                       : "bg-gray-200"
                                 }`}
                              >
                                 {msg.content}
                              </div>
                           </div>
                        ))}
                        {loading && (
                           <div className="text-gray-400 italic">Typing...</div>
                        )}
                     </div>

                     <div className="flex mt-4 gap-2 w-full">
                        <input
                           className="flex-1 border p-2 rounded"
                           value={input}
                           onChange={(e) => setInput(e.target.value)}
                           onKeyDown={(e) => e.key === "Enter" && handleSend()}
                           placeholder="Type your message..."
                        />
                        <button
                           className="bg-blue-500 text-white px-4 py-2 rounded"
                           onClick={handleSend}
                           disabled={loading}
                        >
                           Send
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default GeminiChat;
