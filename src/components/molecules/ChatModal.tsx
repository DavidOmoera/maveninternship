import React, { useState, useEffect, useRef } from "react";
import { CoterieBot } from "assets/CoterieBot";
import profilePicture from "assets/voter_13.png";
import SendIcon from "@mui/icons-material/Send";

interface ModalProps {
  onClose: () => void;
}

const botResponses = [
  "I'm here to assist with any questions you have. How can I help you today?",
  "Your input is important! Let me know what you're thinking.",
  "I'm ready to provide answers or support. What do you need assistance with?",
  "Feel free to ask me anything. I'm here to help!",
  "Thanks for reaching out. Let's dive into your question or concern.",
];

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ user: boolean; text: string }[]>(
    []
  );
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { user: true, text: inputValue }]);

      setTimeout(() => {
        const randomResponse =
          botResponses[Math.floor(Math.random() * botResponses.length)];
        setMessages((prevMessages) => [
          ...prevMessages,
          { user: false, text: randomResponse },
        ]);
      }, 500);

      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="max-h-[90vh] w-[50vw] bg-blue-950 p-8 rounded-xl relative shadow-lg overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg text-white bg-transparent hover:border-none hover:text-red-700 "
        >
          X
        </button>

        <div className="flex items-center mb-4 gap-3 mt-6">
          <CoterieBot className="p-1 bg-gray-50 rounded-full h-7 w-7" />
          <h2 className="text-white text-2xl font-bold">Ask Coterie AI</h2>
        </div>

        <div className="mb-20 py-4 overflow-y-auto no-scrollbar max-h-[50vh]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${message.user ? "text-right" : "text-left"} mb-2`}
            >
              <span
                className={`inline-block px-4 py-2 rounded-lg shadow-sm ${
                  message.user
                    ? "bg-gray-200 text-gray-700"
                    : "bg-blue-200 text-blue-700"
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="bg-blue-50 rounded-lg flex flex-col justify-center shadow-md p-4 absolute bottom-0 left-0 right-0 m-8">
          <div className="flex items-center">
            <img
              src={profilePicture}
              alt="User Avatar"
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="relative flex-grow">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Message Coterie"
                className="w-full bg-white text-gray-700 placeholder-gray-500 border p-2 rounded-3xl h-12 pr-10 outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-1 flex items-center justify-center h-8 w-8"
              >
                <SendIcon fontSize="small" className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
