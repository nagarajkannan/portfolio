import React from "react";

export default function Education() {
  return (
    <section id="education" className="section bg-neutral-900 text-blue-200">
      <div className="container">
        <h2 className="section-title text-3xl font-bold text-center mb-10 text-blue-400 transition-colors duration-300 hover:text-blue-500">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-neutral-800 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            <h3 className="text-lg font-semibold text-blue-300 transition-colors duration-300 hover:text-blue-400">
              B.E. Computer Science and Engineering
            </h3>
            <p className="text-neutral-300">
              PSNA College of Engineering and Technology, Dindigul, Tamil Nadu
            </p>
            <p className="text-neutral-400 text-sm mt-1">
              2021 – Present • CGPA: 7.40
            </p>
          </div>

          <div className="card bg-neutral-800 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            <h3 className="text-lg font-semibold text-blue-300 transition-colors duration-300 hover:text-blue-400">
              Higher Secondary Certificate (HSC)
            </h3>
            <p className="text-neutral-300">
              CEOA Matriculation Higher Secondary School
            </p>
            <p className="text-neutral-400 text-sm mt-1">
              May 2019 – May 2021 • 77.83%
            </p>
          </div>

          <div className="card bg-neutral-800 p-6 rounded-xl shadow-md md:col-span-2 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            <h3 className="text-lg font-semibold text-blue-300 transition-colors duration-300 hover:text-blue-400">
              Secondary School Leaving Certificate (SSLC)
            </h3>
            <p className="text-neutral-300">SEV Matriculation School</p>
            <p className="text-neutral-400 text-sm mt-1">
              March 2019 • 71.4%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
