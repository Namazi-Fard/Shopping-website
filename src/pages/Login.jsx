import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

// Accept isModal and onClose as props
const Login = ({ isModal, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are filled
    if (email && password) {
      // Perform login action via context
      login({ name: "کاربر تستی", email });

      //  Use toast
      toast.success("خوش آمدید! ورود موفقیت‌آمیز بود.", {
        className:
          "bg-blue-50 dark:bg-gray-800 border-2 border-blue-500 rounded-2xl shadow-2xl font-vazir",
      });

      // Handle closing behavior
      if (isModal && onClose) {
        onClose();
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div
      className={
        isModal ? "p-4" : "flex items-center justify-center min-h-[60vh]"
      }
      dir="rtl"
    >
      {/* Rest of the form code remains the same */}
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={
          isModal
            ? "w-full"
            : "bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border dark:border-gray-700"
        }
      >
        <h2 className="text-2xl font-black mb-6 dark:text-white">
          ورود به حساب کاربری
        </h2>

        <input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          required
          autoComplete="off"
          className="w-full p-3 mb-4 rounded-xl border dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-xl border dark:bg-gray-700 dark:border-gray-600 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="font-primary w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
        >
          ورود به سایت
        </button>
      </form>
    </div>
  );
};

export default Login;
