import React from "react";

export default function Sidebar() {
  return (
    <div className="min-w-[16%] min-h-[90vh] w-64 flex flex-col justify-center items-center ml-16 my-12 mr-12 bg-gradient-to-t from-purple-600 to-blue-800 rounded-3xl overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-gray-100">
      <ul className="w-full text-sm">
        <li className="w-2/3 flex mx-10 font-semibold text-lg text-lightgrey-300 border-b border-lightgrey-300">
          <button className="flex py-4 active:text-white focus:text-white" autoFocus>
            <span className="cursor-pointe">Profile</span>
          </button>
        </li>
        <li className="w-2/3 flex mx-10 font-semibold text-lg text-lightgrey-300 border-b border-lightgrey-300">
          <button className="flex py-4 focus:text-white">
            <span className="cursor-pointer">Posts</span>
          </button>
        </li>
        <li className="w-2/3 flex mx-10 font-semibold text-lg text-lightgrey-300 border-b border-lightgrey-300">
          <button className="flex py-4 focus:text-white">
            <span className="cursor-pointer">Gallery</span>
          </button>
        </li>
        <li className="w-2/3 flex mx-10 font-semibold text-lg text-lightgrey-300">
          <button className="flex py-4 focus:text-white">
            <span className="cursor-pointer">ToDo</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
