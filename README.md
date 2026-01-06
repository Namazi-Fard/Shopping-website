# 🛒 Modern E-commerce Storefront (React + Tailwind)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

یک وب‌سایت فروشگاهی مدرن و پرسرعت که با تمرکز بر **تجربه کاربری (UX)** و **معماری کامپوننت‌محور** طراحی شده است. این پروژه نمونه‌ای از پیاده‌سازی منطق‌های پیچیده فرانت‌اند بدون اتکا به کتابخانه‌های سنگین جانبی است.

---

## ✨ ویژگی‌های برجسته (Key Features)

* **Custom RTL Slider:** طراحی اختصاصی اسلایدر محصولات با پشتیبانی کامل از حالت راست‌چین، بدون استفاده از Swiper/Slick.
* **Dark Mode Support:** قابلیت سوئیچ بین تم تیره و روشن با مدیریت وضعیت سراسری.
* **Fully Responsive:** طراحی واکنش‌گرا برای تمامی ابعاد (Mobile, Tablet, Desktop).
* **Optimized Performance:** استفاده از Hookهای React جهت کاهش Re-render و افزایش سرعت لود.
* **Modern UI:** بهره‌گیری از آیکون‌های Lucide و تایپوگرافی اختصاصی فارسی.

---

## 🛠 تکنولوژی‌های به‌کار رفته (Tech Stack)

| بخش | تکنولوژی |
| :--- | :--- |
| **Framework** | React.js (Vite) |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **State Management** | React Hooks (useState, useEffect, useRef) |
| **Deployment** | Vercel / Netlify |

---

## 🚀 چالش‌های فنی حل شده (Technical Challenges)

### 1. منطق اسلایدر اختصاصی
به جای نصب کتابخانه‌های سنگین، اسلایدری با استفاده از `useRef` و محاسبات ریاضی `scrollLeft` طراحی شد که در سیستم‌های **RTL** (راست‌چین) به درستی عمل می‌کند.

### 2. مدیریت تم (Theme Management)
پیاده‌سازی سیستم Dark Mode که با تنظیمات سیستم‌عامل کاربر هماهنگ شده و قابلیت تغییر دستی نیز دارد.

---

## 💻 نصب و راه‌اندازی (Installation)

```bash
# کلون کردن پروژه
git clone [https://github.com/your-username/shopping-website.git](https://github.com/your-username/shopping-website.git)

# ورود به پوشه پروژه
cd shopping-website

# نصب وابستگی‌ها
npm install

# اجرای پروژه در حالت توسعه
npm run dev

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
