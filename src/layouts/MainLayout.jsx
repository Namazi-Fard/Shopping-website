import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children, links, logo, actions }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar
        links={links}
        logo={logo}
        actions={actions}
        className="bg-white dark:bg-gray-900 shadow-md"
      />
      <main className="container mx-auto px-4 md:px-8 grow text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
