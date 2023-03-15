import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faServer, faCloud } from "@fortawesome/free-solid-svg-icons";

const Skills: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <FontAwesomeIcon
              icon={faCode}
              size="6x"
              className="mb-4 text-blue-600"
            />
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Development
            </h3>
            <p>
              React, Next.js, JavaScript, TypeScript, HTML, CSS, Sass,
              TailwindCSS, Storybook
            </p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon
              icon={faServer}
              size="6x"
              className="mb-4 text-green-600"
            />
            <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
            <p>Node.js, Django, RESTful APIs, Python</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon
              icon={faCloud}
              size="6x"
              className="mb-4 text-purple-600"
            />
            <h3 className="text-2xl font-semibold mb-4">Cloud & DevOps</h3>
            <p>AWS, Docker, CI/CD, Vercel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
