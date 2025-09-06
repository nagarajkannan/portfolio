import React from "react";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-800 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-neutral-400 text-sm">© {year} Nagaraj K. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          {/* Replace '#' with your actual profiles if available */}
          <a className="link" href="#" target="_blank" rel="noreferrer">GitHub</a>
          <a className="link" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}