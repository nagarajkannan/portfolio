import nagaraj from '../assets/nagarajimg.jpg'
import { Download } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center mx-20">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-brand-400">Nagaraj K</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Full Stack Developer passionate about building clean, fast, and useful web apps.
          </p>
          <p className="mt-3 text-neutral-400">
            Focused on MERN stack, real-time dashboards, secure authentication, and crisp UI with Tailwind CSS.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg border border-neutral-700 px-4 py-2 text-sm hover:border-brand-600">View Projects</a>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-lg bg-brand-600 hover:bg-brand-700 px-4 py-2 text-sm font-medium">
              <Download size={18}/> Download Resume
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <img src={nagaraj} alt="Profile" className="h-80  rounded-2xl object-cover ring-1 ring-neutral-800" />
        </div>
      </div>
    </section>
  )
}