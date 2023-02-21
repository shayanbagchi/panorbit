import React, { useState } from "react";
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";

const BottomPersonalChatWindow = ({ user, onClose }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, senderId: 1, receiverId: user.id, content: "Hello there!" },
    { id: 2, senderId: user.id, receiverId: 1, content: "Hi!" },
    { id: 3, senderId: 1, receiverId: user.id, content: "How are you doing?" },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, senderId: 1, receiverId: user.id, content: message },
      ]);
      setMessage("");
    }
  };

  return (
    <div className="absolute bottom-0 right-80 mr-8">
      <div className="relative">
        {/* Chat window */}
        <div className="w-72 h-2/5 bg-white rounded-t shadow-lg">
          {/* User info */}
          <div className="flex py-4 px-2 bg-blue-700 rounded-t-xl">
            <img
              className="w-8 h-8 mr-3 rounded-full"
              src={user.profilepicture}
              alt={`${user.name}'s profile pic`}
            />
            <h2 className="pl-1 text-lg font-light text-white">{user.name}</h2>
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-0 right-4 transform translate-y-1/2 p-2 rounded-full"
            >
              <FiChevronDown className="origin-center" color="white" />
            </button>
          </div>

          {/* Messages */}
          <ul className="max-h-96 pt-2 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-gray-100">
            {messages.map((msg) => (
              <li
                key={msg.id}
                className={`p-2 ${
                  msg.senderId === 1
                    ? "text-right"
                    : "text-left"
                }`}
              >
                {msg.content}
              </li>
            ))}
          </ul>

          {/* Message input */}
          <form onSubmit={handleSendMessage} className="py-2 px-3 bg-slate-100 rounded-b-xl">
            <div className="flex items-center">
              <input
                type="text"
                className="w-full px-2 py-1 bg-white rounded-full mr-2"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-700 rounded-full text-white px-3 py-2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BottomPersonalChatWindow;
