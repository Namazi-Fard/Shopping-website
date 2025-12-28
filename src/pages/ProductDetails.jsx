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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
    <div
      className="container mx-auto p-8 flex flex-col md:flex-row-reverse gap-12"
      dir="rtl"
    >
      {/* بخش تصویر */}
      <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-3xl p-10 flex  items-center justify-center relative">
        <img src={product.image} alt={product.name} className="w-3/4 h-auto" />
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
  );
};

export default ProductDetails;
