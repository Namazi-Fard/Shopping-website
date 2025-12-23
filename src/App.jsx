import Button from "../components/Button.jsx";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";

// App Component
// This is the main entrance of our application.
// این فایل نقطه شروع برنامه ماست.

const myLinks = [
  { title: "خانه", href: "/" },
  { title: "محصولات", href: "/products" },
];
function App() {
  return (
    <>
      {/* تست نوبار */}
      <div>
        <Navbar links={myLinks} logo="فروشگاه من" />
        <Routes>
          <Route
            path="/"
            element={
              <div className="p-10">
                <h2>به صفحه اصلی خوش آمدید</h2>
              </div>
            }
          />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
