import React from "react";
import { HiX } from "react-icons/hi";
import Login from "../pages/Login";

const LoginModal = ({ onClose }) => {
  return (
    // Backdrop and container
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">

      {/* Background overlay with blur effect */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal content box */}
      <div className="relative bg-white dark:bg-gray-800 w-full max-w-md rounded-3xl shadow-2xl z-10 overflow-hidden transform transition-all pt-5">

        {/* Close button inside the modal */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-red-500 transition-colors z-20"
        >
          <HiX size={24} />
        </button>

        {/* Padding container for the login form */}
        <div className="p-2">
          <Login isModal={true} onClose={onClose}/>
        </div>

      </div>
    </div>
  );
};

export default LoginModal;