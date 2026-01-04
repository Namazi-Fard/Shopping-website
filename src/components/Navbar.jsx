import React from "react";
import { NavLink, Link } from "react-router-dom"; // Link اضافه شد
import { useDarkMode } from "../hooks/useDarkMode";
import { HiMoon, HiSun, HiX, HiMenu } from "react-icons/hi";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ logo, links = [], actions, className = "",isMenuOpen, setIsMenuOpen }) => {
  const [theme, setTheme] = useDarkMode();
  // extract user and logout function from auth context
  const { user, logout } = useAuth();
  // change theme function
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };
  // this function decides what to show in the auth section of the navbar
  const renderAuthActions = () => {
    // if logged in
    if (user) {
      return (
        <div className="flex items-center justify-center gap-3">
          {/* display user info at nav when logged in */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              خوش آمدید
            </span>
            <span className="text-sm font-bold dark:text-white">
              {user.name}
            </span>
          </div>
          {/* logout button */}
          <button
            onClick={logout}
            className="flex items-center justify-center px-5 py-2 text-sm font-bold text-red-500 border-2 border-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all active:scale-95 leading-none"
          >
            خروج
          </button>
        </div>
      );
    }
    // if not logged in, show default actions (login & signup buttons)
    return actions;
  };

  return (
    <nav
      className={`relative flex flex-col mb-8 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 w-full transition-all duration-500 ease-in-out ${className}`}
      dir="rtl"
    >
      {/* three part of nav, links logo & menu icon actions like buttons and login state */}
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        {/* logo and menu icon for mobile view */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 z-50 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <HiMenu size={28} />
          </button>
          <div className="flex items-center gap-2 dark:text-white">{logo}</div>
        </div>
        {/* desktop links */}
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
        {/* actions section,theme + login state */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* toggle theme button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-500 active:scale-90 text-gray-600 dark:text-yellow-400 hover:ring-2 ring-blue-500 focus:outline-none"
          >
            <div
              className={`transition-all duration-500 ${
                theme === "dark" ? "rotate-360" : "rotate-0"
              }`}
            >
              {theme === "dark" ? <HiSun size={24} /> : <HiMoon size={24} />}
            </div>
          </button>
          {/* smart display of login state at desktop */}
          <div className="hidden md:flex items-center gap-2 md:gap-3">
            {renderAuthActions()}
          </div>
        </div>
        {/* mobile menu Overlay */}
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      {/* mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-2xl
          transform transition-transform duration-300 ease-in-out md:hidden flex flex-col
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
          >
            <HiX size={28} />
          </button>

          <ul className="flex flex-col gap-6 mt-10">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
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

          {/* نمایش هوشمند وضعیت ورود در موبایل */}
          <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col gap-4">{renderAuthActions()}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;