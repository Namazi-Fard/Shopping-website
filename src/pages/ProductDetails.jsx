import React, { useEffect } from "react";
import { productsList } from "../data/products";
import { formatPrice } from "../utils/formatPrice";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = productsList.find((p) => p.id === parseInt(id));
  // Auto scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  // error page if product not found
  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          متأسفانه محصول مورد نظر پیدا نشد!
        </h2>
        {/* استفاده از navigate(-1) دقیقا همان کار back را انجام می‌دهد */}
        <Button onClick={() => navigate(-1)}>بازگشت به صفحه قبل</Button>
      </div>
    );
  }

  return (
    <>
      <div
        className="container mx-auto p-8 flex flex-col md:flex-row-reverse gap-12"
        dir="rtl"
      >
        {/* بخش تصویر */}
        <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-3xl p-10 flex  items-center justify-center relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-3/4 h-auto"
          />
          <div className="absolute top-5 right-5">
            {product.discount > 0 && (
              <Badge variant="danger">{product.discount}٪ تخفیف</Badge>
            )}
          </div>
        </div>

        {/* بخش اطلاعات */}
        <div className="flex-1 flex flex-col gap-6 justify-evenly">
          <h1 className="text-4xl font-black">{product.name}</h1>
          <Badge variant="primary" className="w-fit">
            {product.category}
          </Badge>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            توضیحات محصول در اینجا قرار می‌گیرد. این یک {product.name} با کیفیت
            عالی و گارانتی معتبر است.
          </p>

          <div
            className="flex items-center justify-center gap-4 border-t border-b py-6 dark:border-gray-700"
            dir="ltr"
          >
            {/* normal price */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-blue-600">تومان</span>
              <span className="text-3xl font-black text-blue-600">
                {"\u200E"}
                {formatPrice(product.price, product.discount)}
              </span>
            </div>
            {/* discount price */}
            {product.discount > 0 && (
              <div className="flex items-center gap-1 text-gray-400 line-through">
                <span className="text-xs">تومان</span>
                <span>
                  {"\u200E"}
                  {formatPrice(product.price)}
                </span>
              </div>
            )}
          </div>
          <Button
            variant={product.stock > 0 ? "primary" : "outline"}
            disabled={product.stock === 0}
            className="mx-auto w-5/6 py-4 text-xl"
          >
            {product.stock > 0 ? "افزودن به سبد خرید" : "ناموجود"}
          </Button>
        </div>
      </div>
      {/* comments and futures */}
      <div className="">
        {/* بخش ویژگی‌های کلیدی */}
        <div className="mt-12 w-full">
          <h3 className="text-2xl font-black mb-6 text-center md:text-right md:ms-13">
            ویژگی‌های کلیدی:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.features?.map((feature, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl text-center md:text-right w-9/10 mx-auto"
              >
                {/* تیک سبز که در موبایل بالای متن و در دسکتاپ سمت راست قرار می‌گیرد */}
                <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full hidden md:block"></span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* بخش نظرات کاربران */}
        <div className="mt-16 border-t pt-10 w-full">
          <h3 className="text-2xl font-black mb-8 text-center md:text-right md:ms-23">
            نظرات کاربران:
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {product.reviews?.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl flex flex-col items-center md:items-start text-center md:text-right w-9/10 mx-auto"
              >
                <div className="flex flex-col md:flex-row justify-between w-full items-center mb-4 gap-2">
                  <span className="font-black text-lg">{review.user}</span>
                  {/* Method 1 */}
                  <div className="flex text-yellow-500 text-xl justify-center md:justify-start w-full" dir="ltr">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                  {/* Method 2 */}
                  {/* <div className="flex gap-1" dir="ltr">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={
                          index < review.rating ? "text-yellow-400" : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div> */}
                  {/* end Method 2 */}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
