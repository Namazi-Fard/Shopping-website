import React from "react";
import Button from "../components/Button";
import mouseImg from "../assets/images/mouse.webp";
import headphoneImg from "../assets/images/headphone.webp";
import keyboardImg from "../assets/images/keyboard.webp";
import monitorImg from "../assets/images/monitor.webp";
import printerImg from "../assets/images/printer.webp";
import laptopImg from "../assets/images/laptop.webp";

const Products = () => {
  const productsList = [
    { id: 1, name: "لپ‌تاپ", price: "45'000'000", image: laptopImg },
    { id: 2, name: "موس", price: "1'500'000", image: mouseImg },
    { id: 3, name: "کیبورد", price: "2'500'000", image: keyboardImg },
    { id: 4, name: "هدفون", price: "3'000'000", image: headphoneImg },
    { id: 5, name: "مانیتور", price: "12'000'000", image: monitorImg },
    { id: 6, name: "پرینتر", price: "8'000'000", image: printerImg },
    { id: 7, name: "پرینتر", price: "8'000'000", image: printerImg },
    { id: 8, name: "پرینتر", price: "8'000'000", image: printerImg },
  ];

  return (
    <div className="container mx-auto p-8 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      <h2 className="text-3xl font-black mb-12 text-center">
        <span className="border-b-4 border-blue-600 pb-2">لیست محصولات</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsList.map((item) => (
          <div
            key={item.id}
            className="group relative border border-gray-100 p-5 rounded-3xl flex flex-col bg-white dark:border-gray-800 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* بخش تصویر محصول */}
            <div className="overflow-hidden rounded-2xl mb-6 h-52 bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* بخش متن و قیمت */}
            <div className="text-center flex flex-col gap-2 mb-6" dir="rtl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                {item.name}
              </h3>
              <div className="flex justify-center items-center gap-2">
                <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                  {/* اضافه کردن علامت یونیکد برای اصلاح جهت عدد */}
                  {"\u200E"}
                  {item.price}
                </span>
                <span className="text-sm text-gray-500">تومان</span>
              </div>
            </div>
            <Button
              variant="primary"
              className="w-full py-3 rounded-xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
            >
              افزودن به سبد
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
