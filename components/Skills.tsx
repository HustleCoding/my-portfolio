import React from "react";

const Skills: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <i className="fas fa-code text-6xl mb-4 text-blue-600"></i>
            <h3 className="text-2xl font-semibold mb-4">
              Frontend Development
            </h3>
            <p>
              React, Redux, Angular, Vue.js, Next.js, Gatsby, JavaScript,
              TypeScript, HTML, CSS, Sass, TailwindCSS
            </p>
          </div>
          <div className="text-center">
            <i className="fas fa-server text-6xl mb-4 text-green-600"></i>
            <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
            <p>
              Node.js, Express, Django, Ruby on Rails, PHP, Laravel, RESTful
              APIs, GraphQL
            </p>
          </div>
          <div className="text-center">
            <i className="fas fa-database text-6xl mb-4 text-yellow-600"></i>
            <h3 className="text-2xl font-semibold mb-4">Databases</h3>
            <p>MySQL, PostgreSQL, MongoDB, Firebase, Redis, Elasticsearch</p>
          </div>
          <div className="text-center">
            <i className="fas fa-cloud text-6xl mb-4 text-purple-600"></i>
            <h3 className="text-2xl font-semibold mb-4">Cloud & DevOps</h3>
            <p>
              AWS, Azure, GCP, Docker, Kubernetes, CI/CD, Vercel, Netlify,
              Heroku
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
