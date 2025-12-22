import React from "react";

const Button = ({ children, variant = "primary", ...props }) => {
  // ۱. تعریف استایل‌های پایه (چیزهایی که در همه دکمه‌ها مشترک است)
  const baseStyle =
    "px-6 py-2 rounded-lg font-medium transition-all duration-300 active:scale-90";

  // ۲. تعریف مدل‌های مختلف دکمه (رنگ‌بندی)
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-800 shadow-md",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
    danger: "bg-red-500 text-white hover:bg-red-700",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
