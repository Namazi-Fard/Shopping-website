import React from 'react';
import Button from '../components/Button';
import heroImage from '../assets/images/monitor.webp';

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* بخش متن‌ها */}
      <div className="flex-1 text-center md:text-right" dir="rtl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight mb-6 transition-colors duration-300">
          دنیای تکنولوژی در <span className="text-blue-600 dark:text-blue-500">دستان شما</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-8 transition-colors duration-300">
          جدیدترین و باکیفیت‌ترین محصولات دیجیتال را با ضمانت اصالت و ارسال سریع از فروشگاه ما تهیه کنید. بهترین قیمت‌ها منتظر شماست.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <Button variant="primary" className="px-8 py-3 text-lg">
            شروع خرید
          </Button>
          <Button variant="outline" className="px-8 py-3 text-lg">
            تخفیف‌های ویژه
          </Button>
        </div>
      </div>

      {/* بخش تصویر */}
      <div className="flex-1 w-full max-w-lg md:max-w-none">
        <img
          src={heroImage}
          alt="تکنولوژی"
          className="w-full h-auto object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>

    </div>
  );
};

export default Home;