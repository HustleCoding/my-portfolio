import React from "react";
import { motion } from 'framer-motion';

const Introduction: React.FC = () => {
    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.section
            className="py-12 px-4 text-center"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.8 }}
        >
            <motion.img
                src="/profile.jpeg"
                alt="Profile"
                className="mx-auto w-32 h-32 mb-4 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
            />
            <h2 className="text-4xl font-bold mb-4">Florin Dobinciuc</h2>
            <h3 className="text-2xl font-semibold mb-6">Frontend Developer</h3>
            <p className="leading-loose max-w-xl mx-auto">
                👋 Dedicated Frontend Developer with a strong foundation in JavaScript programming language.
                Passionate about continuous learning and staying up-to-date with industry best practices to ensure delivering high-quality software solutions.
            </p>
            <br />
            <p>Take a look at my skills below.</p>
        </motion.section>
    );
};

export default Introduction;
