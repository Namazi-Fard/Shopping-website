import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

// App Component
// This is the main entrance of our application.
// این فایل نقطه شروع برنامه ماست.

const myLinks = [
  { title: "خانه", href: "/" },
  { title: "محصولات", href: "/products" },
  { title: "درباره ما", href: "/about us" },
  { title: "تماس با ما", href: "/contact us" },
  { title: "سبد خرید", href: "/cart" },
  { title: "سوالات متداول", href: "/faq" },
  { title: "راهنما", href: "/help" },
  { title: "پشتیبانی", href: "/support" },
];

const authButtons = (
  <>
    <Button variant="outline" className="text-sm md:text-base">
      ورود
    </Button>
    <Button variant="primary" className="text-sm md:text-base">
      ثبت‌نام
    </Button>
  </>
);
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <MainLayout links={myLinks} logo="فروشگاه من" actions={authButtons}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </MainLayout>
      </div>
    </>
  );
}

export default App;
