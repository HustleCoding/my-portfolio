import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="py-12 bg-cyan-light text-blue-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-dark">
          Projects
        </h2>
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg w-full max-w-md shadow-33cccc">
            <img
              src="/ai.png"
              alt="Project 1"
              className="w-full h-48 object-cover object-center rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Open AI Chat</h3>
              <p className="text-blue-dark">
                A brief description of Open AI Chat. This project uses Next.js,
                Node.js, TailwindCSS, and OpenAI API. More information can be
                found in the README file.
              </p>
              <div className="mt-4 flex justify-between">
                <a
                  href="https://github.com/HustleCoding/my-openai-app"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://my-openai-app-phi.vercel.app/"
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
