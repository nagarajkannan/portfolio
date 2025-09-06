import { Menu, X } from "lucide-react";
import React from "react";
const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ open, setOpen }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
      <div className="container flex items-center justify-between py-3">
        <a href="#" className="text-lg font-semibold tracking-tight">NAGARAJ <span className="text-brand-400">K</span></a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-300 hover:text-white">{l.label}</a>
          ))}
          <a href="/resume.pdf" download className="ml-2 inline-flex items-center rounded-lg bg-brand-600 hover:bg-brand-700 px-4 py-2 text-sm font-medium">Download Resume</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button> 
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-800">
          <div className="container py-3 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-neutral-300 hover:text-white" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="/resume.pdf" download className="inline-flex items-center rounded-lg bg-brand-600 hover:bg-brand-700 px-4 py-2 text-sm font-medium">Download Resume</a>
          </div>
        </div>
      )}
    </header>
  )
}