import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section bg-neutral-900 text-blue-200">
      <div className="container">
        <h2 className="section-title text-3xl font-bold text-center mb-10 text-blue-400 transition-colors duration-300 hover:text-blue-500">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="card bg-neutral-800 p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            <h3 className="text-lg font-semibold text-blue-300 transition-colors duration-300 hover:text-blue-400">
              Get in touch
            </h3>
            <p className="mt-2 text-neutral-300">
              I'm open to internships and full-time opportunities in full-stack development.
            </p>
            <ul className="mt-4 text-neutral-300 space-y-1">
              <li>
                <span className="text-neutral-400">Email:</span>{" "}
                <a
                  className="text-blue-400 hover:text-blue-500 underline underline-offset-2 transition-colors duration-300"
                  href="mailto:nagarajkannan2003@gmail.com"
                >
                  nagarajkannan2003@gmail.com
                </a>
              </li>
              <li>
                <span className="text-neutral-400">Phone:</span>{" "}
                <a
                  className="text-blue-400 hover:text-blue-500 underline underline-offset-2 transition-colors duration-300"
                  href="tel:+918523987682"
                >
                  +91 85239 87682
                </a>
              </li>
              <li>
                <span className="text-neutral-400">Location:</span> 45/2 Adhanoor,
                Thoppur, Alanganallur, Madurai
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <form
            className="card bg-neutral-800 p-6 rounded-xl shadow-md space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-sm mb-1 text-blue-300">Name</label>
              <input
                className="w-full rounded-xl bg-neutral-900 border border-blue-700 px-3 py-2 text-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-blue-300">Email</label>
              <input
                type="email"
                className="w-full rounded-xl bg-neutral-900 border border-blue-700 px-3 py-2 text-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-blue-300">Message</label>
              <textarea
                rows="4"
                className="w-full rounded-xl bg-neutral-900 border border-blue-700 px-3 py-2 text-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-colors duration-300"
                placeholder="Write something..."
              />
            </div>
            <button className="rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
