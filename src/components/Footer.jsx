import React from "react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 dark:text-gray-100 py-12 mt-20 transition-colors duration-300" dir="rtl">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-right">
        {/* بخش اول: درباره ما */}
        <div className="flex flex-col items-center ">
          <h3 className="text-white dark:text-gray-100 text-xl font-bold mb-4 transition-colors duration-300">فروشگاه من</h3>
          <p className="text-sm leading-7 max-w-xs text-gray-300 dark:text-gray-400 transition-colors duration-300">
            ما بهترین محصولات تکنولوژی را با ضمانت اصالت و کمترین قیمت به دست
            شما می‌رسانیم. هدف ما رضایت کامل شماست.
          </p>
        </div>

        {/* بخش دوم: لینک‌های سریع */}
        <div className="flex flex-col items-center ">
          <h3 className="text-white dark:text-gray-100 text-lg font-bold mb-4 transition-colors duration-300">دسترسی سریع</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
                صفحه اصلی
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
              >
                محصولات
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
                تماس با ما
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300">
                قوانین و مقررات
              </a>
            </li>
          </ul>
        </div>

        {/* بخش سوم: شبکه‌های اجتماعی */}
        <div className="flex flex-col items-center">
          <h3 className="text-white dark:text-gray-100 text-lg font-bold mb-4 transition-colors duration-300">
            شبکه‌های اجتماعی
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors flex items-center gap-2 justify-center md:justify-start"
              >
                <FaTwitter className="text-sky-400" /> <span>توییتر</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors flex items-center gap-2 justify-center md:justify-start"
              >
                <FaInstagram className="text-pink-500" />{" "}
                <span>اینستاگرام</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 transition-colors flex items-center gap-2 justify-center md:justify-start"
              >
                <FaLinkedin className="text-blue-600" /> <span>لینکدین</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors flex items-center gap-2 justify-center md:justify-start"
              >
                <FaTelegramPlane className="text-blue-400" />{" "}
                <span>تلگرام</span>
              </a>
            </li>
          </ul>
        </div>

        {/* بخش چهارم: ارتباط با ما */}
        <div className="flex flex-col items-center ">
          <h3 className="text-white dark:text-gray-100 text-lg font-bold mb-4 transition-colors duration-300">ارتباط با ما</h3>
          <div className="space-y-3 text-sm">
            <p className="text-gray-300 dark:text-gray-400 flex items-center gap-2 justify-center md:justify-start transition-colors duration-300">
              <FiMail className="text-blue-500 dark:text-blue-400" /> info@mystore.com
            </p>
            <p className="text-gray-300 dark:text-gray-400 flex items-center gap-2 justify-center md:justify-start transition-colors duration-300">
              <FiPhone className="text-blue-500 dark:text-blue-400" /> ۰۵۱-۳۲۳۲۳۲۳۴
            </p>
          </div>
        </div>
      </div>

      {/* خط کپی‌رایت */}
      <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-6 text-center text-xs text-gray-500 dark:text-gray-600 px-4 transition-colors duration-300">
        تمامی حقوق این سایت متعلق به «فروشگاه من» می‌باشد. ۲۰۲۵ &copy;
      </div>
    </footer>
  );
};

export default Footer;
