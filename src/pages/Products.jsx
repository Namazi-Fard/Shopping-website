import React from "react";
import Button from "../components/Button";
import mouseImg from "../assets/images/mouse.webp";
import headphoneImg from "../assets/images/headphone.webp";
import keyboardImg from "../assets/images/keyboard.webp";
import monitorImg from "../assets/images/monitor.webp";
import printerImg from "../assets/images/printer.webp";
import laptopImg from "../assets/images/laptop.webp";
import Badge from "../components/Badge";

const Products = () => {
  const productsList = [
    {
      id: 1,
      name: "لپ‌تاپ گیمینگ ایسوس",
      price: "75'000'000",
      image: laptopImg,
      stock: 5,
      discount: 12,
      sales: 120,
      category: "laptop",
    },
    {
      id: 2,
      name: "موس بییمیت لاجیتک",
      price: "2'100'000",
      image: mouseImg,
      stock: 0,
      discount: 0,
      sales: 450,
      category: "accessories",
    }, // ناموجود
    {
      id: 3,
      name: "کیبورد مکانیکال ریزر",
      price: "5'500'000",
      image: keyboardImg,
      stock: 15,
      discount: 20,
      sales: 85,
      category: "accessories",
    }, // تخفیف ویژه
    {
      id: 4,
      name: "هدفون سونی XM5",
      price: "18'000'000",
      image: headphoneImg,
      stock: 8,
      discount: 0,
      sales: 300,
      category: "audio",
    }, // پرفروش
    {
      id: 5,
      name: "مانیتور ۳۲ اینچ سامسونگ",
      price: "14'500'000",
      image: monitorImg,
      stock: 3,
      discount: 5,
      sales: 40,
      category: "monitor",
    },
    {
      id: 6,
      name: "پرینتر چندکاره اچ‌پی",
      price: "9'800'000",
      image: printerImg,
      stock: 10,
      discount: 0,
      sales: 15,
      category: "office",
    },
    {
      id: 7,
      name: "لپ‌تاپ مک‌بوک ایر",
      price: "62'000'000",
      image: laptopImg,
      stock: 2,
      discount: 0,
      sales: 210,
      category: "laptop",
    },
    {
      id: 8,
      name: "موس پد گیمینگ",
      price: "450'000",
      image: mouseImg,
      stock: 50,
      discount: 30,
      sales: 600,
      category: "accessories",
    },
    {
      id: 9,
      name: "اسپیکر بلوتوثی جی‌بی‌ال",
      price: "4'200'000",
      image: headphoneImg,
      stock: 0,
      discount: 0,
      sales: 180,
      category: "audio",
    }, // ناموجود
    {
      id: 10,
      name: "کیبورد بیسیم لاجیتک",
      price: "3'100'000",
      image: keyboardImg,
      stock: 25,
      discount: 10,
      sales: 95,
      category: "accessories",
    },
    {
      id: 11,
      name: "مانیتور گیمینگ خمیده",
      price: "22'000'000",
      image: monitorImg,
      stock: 4,
      discount: 15,
      sales: 30,
      category: "monitor",
    },
    {
      id: 12,
      name: "پرینتر لیزری کانن",
      price: "11'200'000",
      image: printerImg,
      stock: 6,
      discount: 0,
      sales: 22,
      category: "office",
    },
    {
      id: 13,
      name: "هدفون گیمینگ هایپرایکس",
      price: "4'800'000",
      image: headphoneImg,
      stock: 12,
      discount: 25,
      sales: 410,
      category: "audio",
    }, // تخفیف + پرفروش
    {
      id: 14,
      name: "لپ‌تاپ لنوو مدل Legion",
      price: "58'000'000",
      image: laptopImg,
      stock: 7,
      discount: 8,
      sales: 55,
      category: "laptop",
    },
    {
      id: 15,
      name: "موس گیمینگ ریزر",
      price: "3'400'000",
      image: mouseImg,
      stock: 18,
      discount: 0,
      sales: 140,
      category: "accessories",
    },
    {
      id: 16,
      name: "وب‌کم لاجیتک 4K",
      price: "8'500'000",
      image: mouseImg,
      stock: 9,
      discount: 0,
      sales: 75,
      category: "accessories",
    },
    {
      id: 17,
      name: "هارد اکسترنال ۲ ترابایت",
      price: "4'100'000",
      image: laptopImg,
      stock: 30,
      discount: 12,
      sales: 280,
      category: "storage",
    },
    {
      id: 18,
      name: "پاوربانک ۲۰ هزار",
      price: "1'900'000",
      image: laptopImg,
      stock: 0,
      discount: 0,
      sales: 500,
      category: "power",
    }, // ناموجود + پرفروش
    {
      id: 19,
      name: "کابل HDMI نسخه ۲.۱",
      price: "850'000",
      image: monitorImg,
      stock: 100,
      discount: 40,
      sales: 1000,
      category: "accessories",
    }, // تخفیف سنگین
    {
      id: 20,
      name: "میکروفون استودیویی",
      price: "15'000'000",
      image: headphoneImg,
      stock: 4,
      discount: 0,
      sales: 12,
      category: "audio",
    },
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
            {/* بخش متن و قیمت */}
            <div className="text-center flex flex-col gap-2 mb-6" dir="rtl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                {item.name}
              </h3>
              {/* قیمت محصول */}
              <div className="flex flex-col items-center justify-center gap-1">
                {/* قیمت خط‌خورده یا فضای خالی معادل آن */}
                <div className="h-6 flex items-center justify-center">
                  {item.discount > 0 ? (
                    <span className="text-sm text-gray-400 line-through decoration-red-500/50">
                      {"\u200E"}
                      {item.price} تومان
                    </span>
                  ) : (
                    /* این فضای خالی باعث می‌شود ارتفاع کارت‌ها بدون تخفیف کم نشود */
                    <div className="invisible">-</div>
                  )}
                </div>

                {/* نمایش قیمت نهایی (محاسبه شده) */}
                <div className="flex justify-center items-center gap-2">
                  <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
                    {"\u200E"}
                    {item.discount > 0
                      ? (
                          parseInt(item.price.replace(/'/g, "")) *
                          (1 - item.discount / 100)
                        ).toLocaleString()
                      : item.price}
                  </span>
                  <span className="text-sm text-gray-500">تومان</span>
                </div>
              </div>
            </div>
            <Button
              variant={item.stock > 0 ? "primary" : "outline"} // اگر موجود بود آبی، نبود توخالی
              disabled={item.stock === 0} // غیرفعال کردن کلیک
              className={`w-full py-3 rounded-xl transition-all ${
                item.stock === 0
                  ? "opacity-50 cursor-not-allowed grayscale"
                  : ""
              }`}
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
