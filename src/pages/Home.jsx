import React from "react";
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories.jsx";

const Home = () => {
  return (
    <main className="bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      <Hero />
      <Categories />
    </main>
  );
};

export default Home;
