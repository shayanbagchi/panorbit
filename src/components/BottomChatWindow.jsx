import { useState } from "react";
import BottomPersonalChatWindow from "./BottomPersonalChatWindow";
import { BsChatRight } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi"

const BottomChatWindow = ({ users, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true); // change value to false see offline status
  const [selectedUser, setSelectedUser] = useState(null);

  const toggleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  function handleUserClick(user) {
    setSelectedUser(user);
  };

  return (
    <div className="fixed bottom-0 right-0 mr-8">
      <div className="relative">
        {/* Chat window */}
        <div
          className={`w-72 h-2/5 bg-white rounded-t shadow-lg transition-all duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-[88%]"
          }`}
        >
          {/* User list */}
          <div className="flex py-4 px-2 bg-blue-700 rounded-t-xl">
            <BsChatRight className="mx-2 w-6 h-6 m-1" color="white"/>
            <h2 className="pl-1 text-lg font-light text-white">Chats</h2>
            {/* Arrow icon that toggles the window */}
            <button
              onClick={toggleOpen}
              className="absolute top-0 right-4 transform translate-y-1/2 p-2 rounded-full"
            >
              <FiChevronDown className={`origin-center ${isOpen ? "" : "rotate-180"}`} color="white"/>
            </button>
          </div>

          <ul className="bg-white max-h-96 pt-2 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-gray-100">
            {users.map((user) => (
              <li
                key={user.id}
                className="cursor-pointer mx-4 p-2 flex flex-row items-center"
                onClick={() => handleUserClick(user)}
              >
                <img
                  className="w-8 h-8 mr-3 rounded-3xl"
                  src={user.profilepicture}
                  alt={`${user.name}'s profile pic`}
                />
                <h3 className="w-44 font-regular">{user.name}</h3>
                {isOnline ? <div className="h-3 w-3 rounded-full border-2 border-white bg-green-500"/> : <div className="h-3 w-3 rounded-full border-2 border-white bg-slate-200"/>}
              </li>
            ))}
          </ul>
          {selectedUser && <BottomPersonalChatWindow user={selectedUser} onClose={() => setSelectedUser(null)} />}
        </div>
      </div>
    </div>
  );
};

export default BottomChatWindow;
