import React from "react";
import { Monitor, Smartphone, Watch, Headphones } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "مانیتور",
    icon: <Monitor size={32} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    name: "موبایل",
    icon: <Smartphone size={32} />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    name: "ساعت هوشمند",
    icon: <Watch size={32} />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 4,
    name: "هدفون",
    icon: <Headphones size={32} />,
    color: "bg-green-100 text-green-600",
  },
];

const Categories = () => {
  return (
    <section className="rounded-2xl my-4 py-10 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-6">
        {/* Section Title using Lalezar font */}
        <h2 className="text-3xl font-lalezar-plus text-center mb-10 text-gray-800 dark:text-gray-200">
          دسته بندی های محبوب
        </h2>

        {/* Flex container for category items */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* categories grid  */}
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Icon Circle with hover animation */}
              <div
                className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-md`}
              >
                {category.icon}
              </div>

              {/* Category Name using Koodak font */}
              <span className="font-koodak-bold text-lg text-gray-700 dark:text-gray-300 transition-colors group-hover:text-blue-600">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
