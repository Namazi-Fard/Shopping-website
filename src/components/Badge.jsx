import React from "react";

const Badge = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyle =
    "px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center tracking-wide";

  const variants = {
    primary: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    secondary: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    danger: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  };

  return (
    <span
      className={`${baseStyle} ${variants[variant]} ${className}`}
      dir="rtl"
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;