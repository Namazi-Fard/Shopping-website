import React from "react";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { useState } from "react";
import { HiMoon, HiSun, HiX, HiMenu } from "react-icons/hi";

const Navbar = ({ logo, links = [], actions, className = "" }) => {
  const [theme, setTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    //  کلاس relative برای کنترل منوی موبایل اضافه شد
    <nav
      className={`relative flex flex-col mb-8 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 w-full transition-all duration-500 ease-in-out ${className}`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        {/*  بخش لوگو و دکمه همبرگری موبایل */}
        <div className="flex items-center gap-4">
          {/*  این دکمه فقط در موبایل نمایش داده می‌شود (md:hidden) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 z-50 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {/* {isOpen ? <HiX size={28} /> : <HiMenu size={28} />} */}
            <HiMenu size={28} />
          </button>
          <div className="flex items-center gap-2 dark:text-white">{logo}</div>
        </div>

        {/* بخش لینک‌ها (دسکتاپ) */}
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

        {/* بخش عملیات‌ها + تم */}
        {/* تغییر تم */}
        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-500 active:scale-90 text-gray-600 dark:text-yellow-400 hover:ring-2 ring-blue-500 focus:outline-none"
          >
            <div
              className={`transition-all duration-500 ${
                theme === "dark" ? "rotate-[360deg]" : "rotate-0"
              }`}
            >
              {theme === "dark" ? <HiSun size={24} /> : <HiMoon size={24} />}
            </div>
          </button>
          {/* دکمه ورود وثبت نام */}
          <div className="hidden md:flex items-center gap-2 md:gap-3">{actions}</div>
        </div>
      </div>

      {/*منوی کشویی موبایل */}
      {/* این بخش فقط وقتی در موبایل هستیم و isOpen true است با انیمیشن باز می‌شود */}

      {/* شروع کدهای منوی سمت راست (Drawer) */}
      {/* ۱. لایه تیره پشت منو (Overlay) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)} // بسته شدن با کلیک روی فضای خالی
        />
      )}

      {/* ۲. محفظه اصلی منو */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-2xl
          transform transition-transform duration-300 ease-in-out md:hidden flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}`} // جابجایی افقی
      >
        <div className="p-6">
          {/* دکمه بستن در داخل منو */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
          >
            <HiX size={28} />
          </button>

          {/* لیست لینک‌ها */}
          <ul className="flex flex-col gap-6 mt-10">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-xl block text-right transition-colors ${
                      isActive
                        ? "text-blue-600 font-bold"
                        : "text-gray-600 dark:text-gray-300"
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* بخش دکمه‌های ورود/ثبت‌نام در انتهای منو */}
          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col gap-4">{actions}</div>
          </div>
        </div>
      </div>
      {/* پایان کدهای منوی سمت راست */}

      {/* <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-gray-50 dark:bg-gray-800/50 backdrop-blur-lg
          ${
            isOpen
              ? "max-h-96 opacity-100 border-t border-gray-100 dark:border-gray-700"
              : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col p-6 gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-right py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
