// src/components/Chatbot.tsx
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react'; // Import icons

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model'; parts: { text: string }[] }[]>([]);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the chat window when messages are added
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', parts: [{ text: input }] };
    setChatHistory((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true); // Start loading

    try {
      // Prepare chat history for the API call
      const historyForApi = [...chatHistory, userMessage]; // Include the latest user message

      const payload = {
        contents: historyForApi,
        // Optional: Add generationConfig for structured responses if needed
        // generationConfig: {
        //     responseMimeType: "application/json",
        //     responseSchema: { ... }
        // }
      };

      // The apiKey is automatically provided by the Canvas environment.
      // Do NOT hardcode your API key here.
      const apiKey = "AIzaSyC4c5ejg75Eo3-Lo19cimHySwsE3XjKg-Y";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(`API Error: ${response.status} - ${errorBody.error?.message || 'Unknown error'}`);
      }

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const modelResponseText = result.candidates[0].content.parts[0].text;
        setChatHistory((prev) => [...prev, { role: 'model', parts: [{ text: modelResponseText }] }]);
      } else {
        setChatHistory((prev) => [...prev, { role: 'model', parts: [{ text: 'Sorry, I could not get a response.' }] }]);
        console.error('Unexpected API response structure:', result);
      }
    } catch (error: any) {
      console.error('Chatbot API error:', error);
      setChatHistory((prev) => [...prev, { role: 'model', parts: [{ text: `Error: ${error.message}` }] }]);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 flex items-center justify-center"
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-gray-800 rounded-lg shadow-xl flex flex-col z-50 border border-gray-700">
          {/* Chat Header */}
          <div className="bg-gray-700 p-3 rounded-t-lg flex items-center justify-between">
            <h3 className="text-white font-semibold">Lunim AI Support</h3>
            <button
              onClick={toggleChat}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Display */}
          <div ref={chatWindowRef} className="flex-1 p-4 overflow-y-auto custom-scrollbar">
            {chatHistory.length === 0 && !isLoading && (
              <div className="text-gray-400 text-center text-sm py-4">
                ASk A question About Lunim. 
              </div>
            )}
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 p-2 rounded-lg max-w-[80%] ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white ml-auto rounded-br-none'
                    : 'bg-gray-700 text-gray-200 mr-auto rounded-bl-none'
                }`}
              >
                {msg.parts.map((part, partIndex) => (
                  <p key={partIndex}>{part.text}</p>
                ))}
              </div>
            ))}
            {isLoading && (
              <div className="mb-3 p-2 rounded-lg bg-gray-700 text-gray-200 mr-auto rounded-bl-none flex items-center">
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span>Typing...</span>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-3 border-t border-gray-700 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 p-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              disabled={isLoading} // Disable input while loading
            />
            <button
              onClick={sendMessage}
              className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send Message"
              disabled={isLoading} // Disable send button while loading
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles (Tailwind doesn't provide this directly) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #374151; /* gray-700 */
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4B5563; /* gray-600 */
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6B7280; /* gray-500 */
        }
      `}</style>
    </>
  );
};

export default Chatbot;
