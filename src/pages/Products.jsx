import React from "react";
import Button from "../components/Button";
import { productsList } from "../data/products";
import Badge from "../components/Badge";
import { formatPrice } from "../utils/formatPrice";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-8 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500 rounded-2xl">
      <h2 className="text-3xl font-black mb-12 text-center">
        <span className="border-b-4 border-blue-600 pb-2">لیست محصولات</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/*start of card bodys */}
        {productsList.map((item) => (
          <div
            onClick={() => navigate(`/product/${item.id}`)}
            key={item.id}
            className="group relative border border-gray-100 p-5 rounded-3xl flex flex-col bg-white dark:border-gray-800 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer group"
          >
            {/* product image */}
            <div className="overflow-hidden rounded-2xl mb-6 h-52 bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center p-4">
              {/* منطق  برای نمایش بج‌ها */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                {/* ۱. منطق تخفیف: اگر درصد تخفیف بیشتر از صفر بود */}
                {item.discount > 0 && (
                  <Badge variant="danger" className="animate-pulse">
                    {item.discount}٪ تخفیف
                  </Badge>
                )}
                {/* ۲. منطق ناموجود: اگر موجودی صفر بود */}
                {item.stock === 0 && (
                  <>
                    <Badge
                      variant="secondary"
                      className="backdrop-blur-md bg-gray-500/50 text-white"
                    >
                      ناموجود
                    </Badge>
                    <Badge variant="primary" className="shadow-md">
                      پرفروش
                    </Badge>
                  </>
                )}
                {/* ۱. اگر قیمت بیشتر از ۱۰ میلیون بود بج پیشنهاد ویژه */}
                {parseInt(item.price.replace(/'/g, "")) > 10000000 && (
                  <Badge variant="warning" className="shadow-md">
                    پیشنهاد ویژه
                  </Badge>
                )}

                {/* ۲. اگر محصول لپ‌تاپ بود، بج پرفروش
                {item.name === "موس بییمیت لاجیتک" && (
                  <Badge variant="primary" className="shadow-md">
                    پرفروش
                  </Badge>
                )} */}
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* ---------------------------------------------- */}
            {/* text & price  */}
            <div className="text-center flex flex-col gap-2 mb-6" dir="rtl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                {item.name}
              </h3>
              {/* Product price */}
              <div className="flex flex-col items-center justify-center gap-1">
                {/* Strikethrough price or equivalent blank space */}
                <div className="h-6 flex items-center justify-center">
                  {item.discount > 0 ? (
                    <span className="text-sm text-gray-400 line-through decoration-red-500/50">
                      {"\u200E"}
                      {formatPrice(item.price)} تومان
                    </span>
                  ) : (
                    /*  This empty space prevents the height of the cards from being reduced without a discount.*/
                    <div className="invisible">-</div>
                  )}
                </div>

                {/* Final price display (calculated) */}
                <div className="flex justify-center items-center gap-2">
                  <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                    {"\u200E"}
                    {formatPrice(item.price, item.discount)}
                  </span>
                  <span className="text-sm text-gray-500">تومان</span>
                </div>
              </div>
            </div>
            <Button
              variant={item.stock > 0 ? "primary" : "outline"}
              disabled={item.stock === 0}
              className="w-9/10 mx-auto py-3 rounded-xl transition-all"
            >
              {item.stock > 0 ? "افزودن به سبد" : "ناموجود"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
