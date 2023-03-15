import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <p className="text-center mb-8">
          If you'd like to get in touch, feel free to reach out to me via email
          or through my social media profiles.
        </p>
        <div className="text-center">
          <a
            href="mailto:florin.dobinciuc@learninglab.cloud"
            className="text-gray-300 hover:text-gray-100 text-2xl px-4"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://www.linkedin.com/in/florin-dobinciuc-57a6121aa/"
            className="text-gray-300 hover:text-gray-100 text-2xl px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/FlorinDobinciuc"
            className="text-gray-300 hover:text-gray-100 text-2xl px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
