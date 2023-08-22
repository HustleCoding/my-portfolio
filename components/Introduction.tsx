import React from "react";
import { motion } from "framer-motion";

const Introduction: React.FC = () => {
  return (
    <section className="py-12 px-4 text-center bg-blue-dark text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
      >
        <motion.img
          src="/profile.jpeg"
          alt="Profile"
          className="mx-auto w-32 h-32 mb-4 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        />
        <h2 className="text-4xl font-bold mb-2 text-white">Florin Dobinciuc</h2>
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Frontend Developer
        </h3>
      </motion.div>
      <motion.p
        className="leading-loose max-w-xl mx-auto mb-4 text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.5 }}
      >
        Hey there! I'm Florin, a passionate Frontend Developer with a knack for
        crafting intuitive user experiences. With a keen eye for design and a
        dedication to continuous learning, I always aim to stay at the forefront
        of industry trends.
      </motion.p>

      <motion.p
        className="max-w-xl mx-auto mb-6 text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.7 }}
      >
        Dive deep into my portfolio and explore the blog posts that showcase my
        skills and expertise. Let's create something amazing together!
      </motion.p>
      <motion.a
        href="/blog"
        className="dynamic-gradient text-blue-dark rounded-full px-6 py-3 hover:bg-opacity-90 transition duration-300"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1.9 }}
      >
        Discover My Blog Posts
      </motion.a>
    </section>
  );
};

export default Introduction;
