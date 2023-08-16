import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faCode, faServer, faCloud } from "@fortawesome/free-solid-svg-icons";

const Skills: React.FC = () => {
  const iconVariants = {
    hover: { scale: 1.1, y: -10 },
    initial: { scale: 1, y: 0 },
  };

  return (
    <section className="py-12 dynamic-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              initial="initial"
            >
              <FontAwesomeIcon
                icon={faCode}
                size="6x"
                className="mb-4 text-white"
              />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Frontend Development
            </h3>
            <p className="text-white">
              React, Next.js, JavaScript, TypeScript, HTML, CSS, Sass,
              TailwindCSS, Storybook
            </p>
          </div>

          <div className="text-center">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              initial="initial"
            >
              <FontAwesomeIcon
                icon={faServer}
                size="6x"
                className="mb-4 text-white"
              />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Backend Development
            </h3>
            <p className="text-white">Node.js, Django, RESTful APIs, Python</p>
          </div>

          <div className="text-center">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              initial="initial"
            >
              <FontAwesomeIcon
                icon={faCloud}
                size="6x"
                className="mb-4 text-white"
              />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Cloud & DevOps
            </h3>
            <p className="text-white">AWS, Docker, CI/CD, Vercel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
