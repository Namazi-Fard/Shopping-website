import React from "react";
import Hero from "../components/Hero.jsx";

const Home = () => {
  return (
    <main className="bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      <Hero />
      {/*We will add more sections like "Categories" here later */}
    </main>
  );
};

export default Home;