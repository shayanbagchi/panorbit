import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, users }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  console.log(user)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  const friendsList = users.filter((user) => user.id === 3 || user.id === 4)

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="w-full relative z-10">
      <nav className="h-16 flex items-center justify-between mt-12 mr-16 pb-4 text-lightgrey-200 border-b">
        <h1 className="font-bold text-xl">Profile</h1>
        <div className="flex items-center cursor-pointer" onClick={toggleModal}>
          <img
            className="w-9 h-9 rounded-full mr-2"
            src={user.profilepicture}
            alt="Profile"
          />
          <p className="text-lg font-regular">{user.name}</p>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed top-25 right-12 min-w-[20%]">
          <div ref={modalRef} className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-2xl md:filter-none p-6">
            <img
              src={user.profilepicture}
              alt="Profile"
              className="w-24 h-24 rounded-full my-4"
            />
            <p className="text-lg font-regular">{user.name}</p>
            <p className="text-gray-500 text-lg font-regular mb-4">{user.email}</p>
            {friendsList.map((user) => (
            <Link
              to={`/profile/${user.id}`}
              state={{
                user: user,
                users: users
              }}
              key={user.id}
            >
              <li
                key={user.id}
                className="border-t border-slate cursor-pointer px-8 py-2 flex items-center"
              >
                <img
                  className="w-10 h-10 mr-4 rounded-3xl"
                  src={user.profilepicture}
                  alt={`${user.name}'s profile pic`}
                />
                <div>
                  <h3 className="font-regular text-lg">{user.name}</h3>
                </div>
              </li>
            </Link>
          ))}
            <Link 
              to={'/'}
            >
              <button className="bg-red-400 hover:bg-red-500 text-white text-lg font-semibold py-2 px-4 rounded-full">
                Sign Out
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
