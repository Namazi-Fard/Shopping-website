import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "", ...props }) => {
  // ۱. تعریف استایل‌های پایه (چیزهایی که در همه دکمه‌ها مشترک است)
  const baseStyle =
    "px-6 py-2 rounded-lg font-medium transition-all duration-300 active:scale-90";

  // ۲. تعریف مدل‌های مختلف دکمه (رنگ‌بندی)
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-800 shadow-md",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-100",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    danger: "bg-red-500 text-white hover:bg-red-700",
  };
  const disabledStyle = "disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale disabled:shadow-none disabled:active:scale-100";

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${disabledStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
