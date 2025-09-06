import React from "react";

export default function Skills() {
  const skills = [
    { group: "Languages", items: ["C", "Java", "JavaScript"] },
    { group: "Frontend", items: ["React", "HTML", "CSS", "Bootstrap 5", "Tailwind CSS"] },
    { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
    { group: "Databases", items: ["MongoDB", "SQL (basics)"] },
    { group: "CS Fundamentals", items: ["OOP (Java)", "DBMS", "Data Structures & Algorithms (DSA)"] },
    { group: "Tools", items: ["Git", "GitHub", "Vite"] },
  ];

  return (
    <section id="skills" className="section bg-neutral-900   text-blue-200">
      <div className="container  ">
        <h2 className="section-title text-3xl font-bold text-center mb-10 text-blue-400 transition-colors duration-300 hover:text-blue-500">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div
              key={s.group}
              className="card bg-neutral-800 p-5 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <h3 className="text-lg font-semibold mb-3 text-blue-300 transition-colors duration-300 hover:text-blue-400">
                {s.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span
                    key={i}
                    className="badge px-3 py-1 rounded-lg bg-blue-900/40 text-blue-200 border border-blue-700 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
