import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="section bg-neutral-900 text-blue-200">
      <div className="container">
        <h2 className="section-title text-3xl font-bold text-center mb-10 text-blue-400 transition-colors duration-300 hover:text-blue-500">
          Experience
        </h2>

        <div className="card bg-neutral-800 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
          <h3 className="text-lg font-semibold text-blue-300 transition-colors duration-300 hover:text-blue-400">
            Intern — NitroWare Technology Pvt Ltd
          </h3>
          <p className="text-neutral-400 text-sm mt-1">Web Development</p>

          <ul className="mt-3 list-disc list-inside text-neutral-300 space-y-1">
            <li>
              Worked on web development tasks using MERN stack and modern UI frameworks.
            </li>
            <li>
              Collaborated on building responsive pages and integrating REST APIs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
