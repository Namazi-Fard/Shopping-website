import React from "react";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = ({ logo, links = [], actions, className = "" }) => {
  const [theme, setTheme] = useDarkMode();
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <nav
      className={`flex items-center justify-between mb-8 px-8 py-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 w-full transition-colors duration-300 ${className}`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        {/* بخش لوگو */}
        <div className="flex items-center gap-2 dark:text-white">{logo}</div>

        {/* بخش لینک‌ها */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 dark:text-gray-300 font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-bold"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* بخش عملیات‌ها + دکمه سوئیچ تم */}
        <div className="flex items-center gap-5">
          {/* دکمه سوئیچ تم */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:ring-2 ring-blue-500 transition-all focus:outline-none"
          >
            {/* اگر تم فعلی دارک است، خورشید نشان بده (برای رفتن به لایت) و برعکس */}
            {theme === "dark" ? <HiSun size={24} /> : <HiMoon size={24} />}
          </button>

          {/* دکمه‌های ورود/ثبت‌نام */}
          <div className="flex items-center gap-3">{actions}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
