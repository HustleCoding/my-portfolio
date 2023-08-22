import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faCode, faServer, faCloud } from "@fortawesome/free-solid-svg-icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills: React.FC = () => {
  return (
    <motion.section
      className="py-12 dynamic-gradient"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2 className="text-3xl font-bold text-center mb-8 text-white">
          Skills
        </motion.h2>

        <div className="absolute inset-0 from-purple-400 to-purple-600 opacity-20"></div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {[
            {
              icon: faCode,
              title: "Frontend Development",
              description:
                "React, Next.js, JavaScript, TypeScript, HTML, CSS, Sass, TailwindCSS, Storybook",
            },
            {
              icon: faServer,
              title: "Backend Development",
              description: "Node.js, Django, RESTful APIs, Python",
            },
            {
              icon: faCloud,
              title: "Cloud & DevOps",
              description: "AWS, Docker, CI/CD, Vercel",
            },
          ].map((skill) => (
            <motion.div
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                size="6x"
                className="mb-4 text-white hover:text-blue-400 transition-all duration-300"
              />
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {skill.title}
              </h3>
              <p className="text-white">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
