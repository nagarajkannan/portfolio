import React from "react";

const projects = [
  {
    title: "CryptoPlace — Real-Time Cryptocurrency Dashboard",
    period: "2025",
    about:
      "Live crypto price tracker with dynamic search and filtering using the CoinGecko API.",
    highlights: [
      "Real-time price, market cap, and volume",
      "Responsive UI with Bootstrap 5 + Tailwind CSS",
      "Clean table with sorting and search",
    ],
    stack: ["React", "Bootstrap 5", "Tailwind CSS", "CoinGecko API"],
    links: [
    
      { label: "GitHub", href: "https://github.com/nagarajkannan/cryptoplace" },
    ],
  },
  {
    title: "E-commerce Website (MERN Stack)",
    period: "2025",
    about:
      "Full-stack e-commerce platform with product listing, cart, orders, payments, and admin dashboard.",
    highlights: [
      "JWT authentication & role-based access",
      "RESTful APIs with Express.js",
      "Stripe/Razorpay payments",
      "MongoDB for data management",
    ],
    stack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Stripe/Razorpay",
    ],
    links: [
      
      { label: "GitHub", href: "https://github.com/nagarajkannan/Ecommerce-Application" },
    ],
  },
  {
    title: "To-Do List Web Application",
    period: "2025",
    about: "Interactive task manager to add, delete, and mark tasks complete.",
    highlights: [
      "React state with useState",
      "Responsive card layout",
      "Clean UX for task management",
    ],
    stack: ["React", "Bootstrap", "Tailwind CSS"],
    links: [
      
      { label: "GitHub", href: "https://github.com/yourusername/todo-app" },
    ],
  },
  {
    title: "Login Authentication Form (MERN)",
    period: "2025",
    about:
      "Simple MERN login form with basic user authentication and MongoDB storage.",
    highlights: [
      "JWT + password hashing",
      "RESTful API endpoints",
      "Form validation and error states",
    ],
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    links: [
     
      {
        label: "GitHub",
        href: "https://github.com/nagarajkannan/login",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section bg-neutral-900 text-blue-200">
      <div className="container">
        <h2 className="section-title text-3xl font-bold text-center mb-10 text-blue-400 transition-colors duration-300 hover:text-blue-500">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card bg-neutral-800 p-6 rounded-xl shadow-md flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <header>
                <h3 className="text-xl font-semibold text-blue-300 transition-colors duration-300 hover:text-blue-400">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-400 mt-1">{p.period}</p>
              </header>

              <p className="mt-3 text-neutral-300">{p.about}</p>

              <ul className="mt-3 list-disc list-inside text-neutral-300 space-y-1">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="badge px-3 py-1 rounded-lg bg-blue-900/40 text-blue-200 border border-blue-700 transition-colors duration-300 hover:bg-blue-600 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {p.links?.length ? (
                <div className="mt-4 flex gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-transform duration-200 hover:scale-105 ${
                        l.label === "GitHub"
                          ? "bg-green-900 hover:bg-green-700 text-white"
                          : ""  
                      }`}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
