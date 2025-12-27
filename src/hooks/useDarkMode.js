import { useEffect, useState } from "react";

export const useDarkMode = () => {
  // ۱. گرفتن تم از حافظه مرورگر یا گذاشتن روی لایت به صورت پیش‌فرض
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // ۲. محاسبه و اعمال تم
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // ذخیره در حافظه برای دفعه بعد
    localStorage.setItem("theme", theme);
  }, [theme]);
  // ۵. برگرداندن `theme` و `setTheme` (خواناتر از بازگرداندن معکوس)
  return [theme, setTheme];
};
