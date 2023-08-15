import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  const iconVariants = {
    hover: { scale: 1.2, color: "#ffcc00" },
    initial: { scale: 1, color: "#FFFFFF" },
  };

  return (
    <section className="py-12 bg-blue-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <p className="text-center mb-8">
          If you'd like to get in touch, feel free to reach out to me via email
          or through my social media profiles.
        </p>
        <div className="text-center">
          <motion.a
            href="mailto:florin.dobinciuc@learninglab.cloud"
            className="text-gray-300 hover:text-gray-100 text-2xl px-4"
            variants={iconVariants}
            whileHover="hover"
            initial="initial"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/florin-dobinciuc-57a6121aa/"
            className="text-gray-300 hover:text-gray-100 text-2xl px-4"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            initial="initial"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>

          <motion.a
            href="https://github.com/FlorinDobinciuc"
            className="text-gray-300 hover:text-gray-100 text-2xl px-4"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            initial="initial"
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
