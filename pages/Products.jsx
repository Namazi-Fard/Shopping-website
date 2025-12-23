import React from "react";
import Button from "../components/Button";

const Products = () => {
  const productsList = [
    { id: 1, name: "لپ‌تاپ", price: "۴۵ م" },
    { id: 2, name: "موس", price: "۱.۵ م" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">لیست محصولات</h1>
      <div className="grid grid-cols-2 gap-4">
        {productsList.map((item) => (
          <div key={item.id} className="border p-4 rounded-xl">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <Button className="mt-2 bg-blue-600 text-white w-full">
              خرید محصول
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
