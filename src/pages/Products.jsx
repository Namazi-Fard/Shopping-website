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
    { id: 1, name: "لپ‌تاپ", price: "۴۵ م", image: laptopImg },
    { id: 2, name: "موس", price: "۱.۵ م", image: mouseImg },
    { id: 3, name: "کیبورد", price: "۲.۵ م", image: keyboardImg },
    { id: 4, name: "هدفون", price: "۳ م", image: headphoneImg },
    { id: 5, name: "مانیتور", price: "۱۲ م", image: monitorImg },
    { id: 6, name: "پرینتر", price: "۸ م", image: printerImg },
  ];

  return (
    <div className="p-8 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-6">لیست محصولات</h1>
      <div className="grid grid-cols-3 gap-8">
        {productsList.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-xl flex flex-col items-center dark:border-gray-700 dark:bg-gray-900 transition-colors duration-300"
          >
            <div className="overflow-hidden rounded-xl mb-4 h-48 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3>{item.name}</h3>
            <p>قیمت: {item.price}</p>
            <Button variant="primary">خرید محصول</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
