import React from "react";

export default function Certifications() {
  return (
    <section id="certifications" className="section bg-neutral-900 text-blue-200">
      <div className="container">
        <h2 className="section-title text-3xl font-bold text-center mb-10 text-blue-400 transition-colors duration-300 hover:text-blue-500">
          Certificates & Coursework
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Certificates */}
          <div className="card bg-neutral-800 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            <h3 className="text-lg font-semibold text-blue-300 transition-colors duration-300 hover:text-blue-400">
              Certificates
            </h3>
            <ul className="mt-2 list-disc list-inside text-neutral-300 space-y-1">
              <li>C Programming — SVS Academy</li>
              <li>Java — SVS Academy</li>
            </ul>
          </div>

          {/* Coursework */}
          <div className="card bg-neutral-800 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            <h3 className="text-lg font-semibold text-blue-300 transition-colors duration-300 hover:text-blue-400">
              Coursework
            </h3>
            <ul className="mt-2 list-disc list-inside text-neutral-300 space-y-1">
              <li>Object-Oriented Programming (Java)</li>
              <li>Database Management Systems (SQL, MongoDB basics)</li>
              <li>Web Technologies (HTML, CSS, JavaScript, MERN stack)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
