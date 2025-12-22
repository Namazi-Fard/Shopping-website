import React from "react";

const Input = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {/* نمایش لیبل در صورت وجود */}
      {label && (
        <label className="text-sm font-medium text-gray-700 mr-1">
          {label}
        </label>
      )}

      {/* فیلد ورودی اصلی */}
      <input
        className={`
          px-4 py-2 rounded-lg border transition-all outline-none
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          }
        `}
        {...props}
      />

      {/* نمایش پیغام خطا در صورت وجود */}
      {error && <span className="text-xs text-red-500 mt-1 mr-1">{error}</span>}
    </div>
  );
};

export default Input;
