import React from "react";

const LogInModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-end">
          {/* <button onClick={toggleModal}>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}
        </div>
        <div className="mt-2">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-bold">John Doe</p>
          <p className="text-gray-500 text-sm mb-2">johndoe@example.com</p>
          <p className="text-gray-500 text-sm mb-2">(123) 456-7890</p>
          <p className="text-gray-500 text-sm">https://example.com</p>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
