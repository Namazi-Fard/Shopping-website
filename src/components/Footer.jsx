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
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20" dir="rtl">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-right">
        {/* بخش اول: درباره ما */}
        <div className="flex flex-col items-center ">
          <h3 className="text-white text-xl font-bold mb-4">فروشگاه من</h3>
          <p className="text-sm leading-7 max-w-xs">
            ما بهترین محصولات تکنولوژی را با ضمانت اصالت و کمترین قیمت به دست
            شما می‌رسانیم. هدف ما رضایت کامل شماست.
          </p>
        </div>

        {/* بخش دوم: لینک‌های سریع */}
        <div className="flex flex-col items-center ">
          <h3 className="text-white text-lg font-bold mb-4">دسترسی سریع</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" className="hover:text-blue-400 transition-colors">
                صفحه اصلی
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="hover:text-blue-400 transition-colors"
              >
                محصولات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                تماس با ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                قوانین و مقررات
              </a>
            </li>
          </ul>
        </div>

        {/* بخش سوم: شبکه‌های اجتماعی */}
        <div className="flex flex-col items-center">
          <h3 className="text-white text-lg font-bold mb-4">
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
          <h3 className="text-white text-lg font-bold mb-4">ارتباط با ما</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <FiMail className="text-blue-500" /> info@mystore.com
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <FiPhone className="text-blue-500" /> ۰۵۱-۳۲۳۲۳۲۳۴
            </p>
          </div>
        </div>
      </div>

      {/* خط کپی‌رایت */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500 px-4">
        تمامی حقوق این سایت متعلق به «فروشگاه من» می‌باشد. ۲۰۲۵ &copy;
      </div>
    </footer>
  );
};

export default Footer;
