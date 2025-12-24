import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children, links, logo, actions }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={links} logo={logo} actions={actions} className="bg-white shadow-md " />
      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
