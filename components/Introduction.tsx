import React from "react";

const Introduction: React.FC = () => {
  return (
    <section className="py-12 px-4 text-center">
      <img
        src="/profile.jpeg"
        alt="Profile"
        className="mx-auto w-32 h-32 mb-4 rounded-full"
      />
      <h2 className="text-4xl font-bold mb-4">Florin Dobinciuc</h2>
      <h3 className="text-2xl font-semibold mb-6">Software Developer</h3>
      <p className="leading-loose max-w-xl mx-auto">
        👋 Dedicated Software Developer with a strong foundation in JavaScript
        and Python programming languages. Passionate about continuous learning
        and staying up-to-date with industry best practices to ensure delivering
        high-quality software solutions.
      </p>
      <br />
      <p>Take a look at my skills below!</p>
    </section>
  );
};

export default Introduction;
