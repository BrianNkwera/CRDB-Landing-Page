import eli from "../../assets/images/eli.png";
import { useState } from "react";
import mic from "../../assets/icons/mic.svg";
import paperPinIcon from "../../assets/icons/paperPinIcon.svg"

function Chatbot() {
  const [showToolbar, setShowToolbar] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, I am Elle CRDB Bank Smart Assistant. How can I excite you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! I'm here to help you with any banking questions.",
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setShowToolbar(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Window */}
        <div
          className={`absolute bottom-20 right-0 w-80 h-96 bg-white rounded-lg shadow-2xl border overflow-hidden transition-all duration-300 ease-in-out transform ${
            isChatOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }`}
        >
          {/* Chat Header */}
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">E</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Chat with Elle</h3>
                <p className="text-xs text-green-100">CONNECTED</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleChat}
                className="text-white flex items-center"
              >
                X
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-100 h-64">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-4 flex ${
                  msg.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.isBot
                      ? "bg-white text-gray-800 shadow-sm"
                      : "bg-green-600 text-white"
                  }`}
                >
                  {msg.isBot && (
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">E</span>
                      </div>
                    </div>
                  )}
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-white border-t shadow-2xl">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type a message"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                />
              </div>
              <button className="text-gray-500 hover:text-green-600">
                <img src={mic} alt="record" />
              </button>
              <button className="text-gray-500 hover:text-green-600">
                <img src={paperPinIcon} alt="attach" />
              </button>
     
            </div>
          </div>
        </div>
        <div
          className="fixed bottom-20 right-6 z-40"
          onMouseEnter={() => setShowToolbar(true)}
          onMouseLeave={() => setShowToolbar(false)}
        >
          <div className="relative">
            {showToolbar && (
              <div className="bg-green-600 text-xs text-white p-4 rounded-lg shadow-lg max-w-xs mb-4">
                <p>Hi I am Eli, Let's chat!</p>
              </div>
            )}

            {!isChatOpen && (
              <div
                className="flex items-center justify-center cursor-pointer transition-colors"
                onClick={toggleChat}
              >
                <img src={eli} alt="Eli chatbot" style={{ height: 150 }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export { Chatbot };
