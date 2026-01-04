import React from "react";
import Button from "./Button";
import heroImage from "../assets/images/monitor.webp";

const Hero = () => {
  return (
    // Main container with responsive layout
    <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12 bg-white dark:bg-gray-900 transition-colors duration-500 min-h-[80vh] rounded-2xl">
      {/* Content side - RTL support */}
      <div className="flex-1 text-center md:text-right" dir="rtl">
        <div className="animate-in fade-in slide-in-from-right-10 duration-1000">
          {/* Main heading */}
          <h1 className="text-4xl md:text-7xl font-lalezar-plus text-gray-900 dark:text-gray-100 leading-tight mb-8">
            دنیای تکنولوژی در <br />
            <span className="text-blue-600 dark:text-blue-400 drop-shadow-sm">
              دستان شما
            </span>
          </h1>

          {/* Description text */}
          <p className="font-koodak-bold text-gray-600 dark:text-gray-400 text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl">
            جدیدترین و باکیفیت‌ترین محصولات دیجیتال را با ضمانت اصالت و ارسال
            سریع از فروشگاه ما تهیه کنید. بهترین قیمت‌ها منتظر شماست.
          </p>

          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {/*Action buttons */}
            <Button
              variant="primary"
              className="font-koodak-bold px-10 py-4 text-xl rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all active:scale-95"
            >
              شروع خرید
            </Button>
            <Button
              variant="outline"
              className="font-koodak-bold px-10 py-4 text-xl rounded-2xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
            >
              تخفیف‌های ویژه
            </Button>
          </div>
        </div>
      </div>

      {/*Visual side with floating image */}
      <div className="flex-1 w-full relative">
        <div className="absolute -inset-4 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-3xl opacity-50" />
        <img
          src={heroImage}
          alt="تکنولوژی"
          className="relative w-full h-auto object-cover rounded-[2.5rem] shadow-2xl
          transform hover:-rotate-2 hover:scale-105 transition-all duration-700 ease-out animate-floating"
        />
      </div>
    </div>
  );
};

export default Hero;
