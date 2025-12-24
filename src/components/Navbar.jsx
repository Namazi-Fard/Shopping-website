import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = ({ logo, links = [], actions, className = "" }) => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <nav
      className={`flex items-center justify-between mb-8 px-8 py-4 bg-whit border-b border-gray-100 dark:border-gray-800 w-full transition-colors duration-300 ${className}`}
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
            onClick={() => setTheme(colorTheme)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:ring-2 ring-blue-500 transition-all focus:outline-none"
          >
            {colorTheme === "light" ? (
              <HiSun size={24} />
            ) : (
              <HiMoon size={24} />
            )}
          </button>

          {/* دکمه‌های ورود/ثبت‌نام */}
          <div className="flex items-center gap-3">{actions}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import Button from "./Button";
// import { NavLink } from "react-router-dom";
// import { useDarkMode } from '../hooks/useDarkMode';
// import { HiMoon, HiSun } from 'react-icons/hi';

// const Navbar = ({ logo, links = [], actions, className = "" }) => {
//   return (
//     <nav
//       className={`flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 w-full ${className}`}
//       dir="rtl"
//     >
//       {/* بخش لوگو: هر چیزی می‌تواند باشد (عکس یا متن) */}
//       <div className="flex items-center gap-2">{logo}</div>

//       {/* بخش لینک‌ها: به صورت خودکار از روی یک لیست ساخته می‌شود */}
//       <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
//         {links.map((link, index) => (
//           <li key={index}>
//             <NavLink
//               to={link.href}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-blue-600 font-bold"
//                   : "text-gray-600 hover:text-blue-600"
//               }
//             >
//               {link.title}
//             </NavLink>
//           </li>
//         ))}
//       </ul>

//       {/*مثلا بخش دکمه‌ها یا عملیات‌ها */}
//       <div className="flex items-center gap-5">{actions}</div>
//     </nav>
//   );
// };

// export default Navbar;
