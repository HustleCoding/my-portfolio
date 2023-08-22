import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import DownloadButton from "./DownloadButton";

const Contact: React.FC = () => {
  const iconVariants = {
    hover: { scale: 1.15, y: -8, color: "#ffcc00" },
    initial: { scale: 1, y: 0, color: "#FFFFFF" },
  };

  return (
    <motion.section
      className="py-16 bg-blue-dark text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center space-y-8">
        <h2 className="text-4xl font-bold text-center mb-4">Let's Connect</h2>
        <p className="text-center text-lg leading-relaxed max-w-lg">
          Whether it's for collaboration, questions, or just to say hi, I'd love
          to hear from you. Here's how you can reach me:
        </p>

        <motion.div className="flex space-x-6 text-3xl">
          {[
            {
              icon: faEnvelope,
              link: "mailto:florin.dobinciuc.dev@gmail.com",
            },
            {
              icon: faLinkedin,
              link: "https://www.linkedin.com/in/florin-dobinciuc-57a6121aa/",
            },
            { icon: faGithub, link: "https://github.com/FlorinDobinciuc" },
          ].map(({ icon, link }) => (
            <motion.a
              key={link}
              href={link}
              className="text-gray-300 hover:text-gray-100 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              initial="initial"
            >
              <FontAwesomeIcon icon={icon} />
            </motion.a>
          ))}
        </motion.div>

        <div className="text-center mt-4">
          <DownloadButton />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
