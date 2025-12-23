import React from "react";
import Button from "../components/Button";

const Products = () => {
  const productsList = [
    { id: 1, name: "لپ‌تاپ", price: "۴۵ م" },
    { id: 2, name: "موس", price: "۱.۵ م" },
    { id: 3, name: "کیبورد", price: "۲.۵ م" },
    { id: 4, name: "هدفون", price: "۳ م" },
    { id: 5, name: "مانیتور", price: "۱۲ م" },
    { id: 6, name: "پرینتر", price: "۸ م" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">لیست محصولات</h1>
      <div className="grid grid-cols-3 gap-4">
        {productsList.map((item) => (
          <div key={item.id} className="border p-4 rounded-xl flex flex-col items-center">
            <h3>{item.name}</h3>
            <p>قیمت: {item.price}</p>
            <Button variant="primary">
              خرید محصول
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
