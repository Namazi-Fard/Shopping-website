import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
const Navbar = ({ logo, links = [], actions, className = "" }) => {
  return (
    <nav
      className={`flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 w-full ${className}`}
      dir="rtl"
    >
      {/* بخش لوگو: هر چیزی می‌تواند باشد (عکس یا متن) */}
      <div className="flex items-center gap-2">{logo}</div>

      {/* بخش لینک‌ها: به صورت خودکار از روی یک لیست ساخته می‌شود */}
      <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : "text-gray-600 hover:text-blue-600"
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* بخش دکمه‌ها یا عملیات‌ها */}
      <div className="flex items-center gap-5">{actions}</div>
    </nav>
  );
};

export default Navbar;
