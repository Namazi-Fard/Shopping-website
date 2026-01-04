import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import ProductDetails from "./pages/ProductDetails";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import React, { useState } from "react";
import LoginModal from "./components/LoginModal";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Navigation links configuration
const myLinks = [
  { title: "خانه", href: "/" },
  { title: "محصولات", href: "/products" },
  { title: "سبد خرید", href: "/cart" },
  { title: "سوالات متداول", href: "/faq" },
  { title: "راهنما", href: "/help" },
  { title: "پشتیبانی", href: "/support" },
  { title: "درباره ما", href: "/about us" },
  { title: "تماس با ما", href: "/contact us" },
];

// Site logo configuration
const logo = (
  <span className=" flex gap-5 items-center justify-center text-2xl font-black text-blue-600 dark:text-blue-400">
    <HiMiniComputerDesktop />
    فروشگاه من
  </span>
);

function App() {
  // 1. We need a state to control the mobile menu if it's not already there
  // Usually, this state is inside Navbar, but for global control, we can move it here
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Hook to handle navigation
  const navigate = useNavigate();
  // If the screen width is less than 768 pixels (mobile), it will take the user to the login page, otherwise it will open the medal.
  // Logic to detect mobile or desktop for login
  const handleAuthClick = () => {
    setIsMenuOpen(false);
    // If screen width is less than 768px (Mobile)
    if (window.innerWidth < 768) {
      navigate("/login");
    } else {
      // If Desktop, open the modal
      setIsModalOpen(true);
    }
  };
  // Define buttons inside the function to access handleAuthClick
  const authButtons = (
    <>
      <Button
        onClick={handleAuthClick}
        variant="outline"
        className="text-sm md:text-base dark:border-gray-400 dark:text-gray-300"
      >
        ورود
      </Button>
      <Button
        variant="primary"
        className="text-sm md:text-base dark:border-gray-400 dark:text-gray-300"
      >
        ثبت‌نام
      </Button>
    </>
  );
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <MainLayout
          links={myLinks}
          logo={logo}
          actions={authButtons}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MainLayout>
        {/* Render modal only if isModalOpen is true */}
        {isModalOpen && (
          <LoginModal
            key={isModalOpen ? "login-open" : "login-closed"}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </>
  );
}

export default App;
