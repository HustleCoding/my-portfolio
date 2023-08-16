import React from "react";
import { motion } from "framer-motion";

const Introduction: React.FC = () => {
  return (
    <section className="py-12 px-4 text-center bg-blue-dark text-white">
      <motion.img
        src="/profile.jpeg"
        alt="Profile"
        className="mx-auto w-32 h-32 mb-4 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
      />
      <h2 className="text-4xl font-bold mb-4 text-white">Florin Dobinciuc</h2>
      <h3 className="text-2xl font-semibold mb-6 text-white">
        Frontend Developer
      </h3>
      <p className="leading-loose max-w-xl mx-auto text-white">
        👋 Frontend Developer skilled in JavaScript and dedicated to continuous
        learning. I adhere to industry best practices to consistently deliver
        top-notch software solutions.
      </p>
      <br />
      <p>Discover my skills below.</p>
    </section>
  );
};

export default Introduction;
