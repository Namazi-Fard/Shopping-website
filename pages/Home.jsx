import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white p-10 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        به فروشگاه مدرن ما خوش آمدید
      </h1>
      <p className="text-gray-600 mb-8 max-w-lg">
        ما بهترین محصولات تکنولوژی را با کمترین قیمت برای شما آماده کرده‌ایم.
        همین حالا جستجو را شروع کنید!
      </p>

      <div className="flex w-full max-w-md gap-2">
        <Input
          placeholder="نام محصول را جستجو کنید..."
          className="flex-1 border border-gray-300 rounded-lg p-2
          focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <Button variant="primary">جستجو</Button>
      </div>
    </div>
  );
};

export default Home;
