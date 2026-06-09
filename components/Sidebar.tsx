"use client";

import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-950">
        <h1 className="font-bold">AI Resume Studio</h1>

        <button
          onClick={() => setOpen(true)}
          className="text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          h-full w-64 bg-zinc-950 border-r border-zinc-800 p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* CLOSE BUTTON */}
        <div className="md:hidden flex justify-end mb-4">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>

        <h1 className="text-xl font-bold mb-8 hidden md:block">
          AI Resume Studio
        </h1>

        <nav className="space-y-4 text-zinc-400">

          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="block hover:text-white"
          >
            📊 Dashboard
          </Link>

          <Link
            href="/analyzer"
            onClick={() => setOpen(false)}
            className="block hover:text-white"
          >
            📄 Resume Analyzer
          </Link>

          <Link
            href="/enhancer"
            onClick={() => setOpen(false)}
            className="block hover:text-white"
          >
            ✨ Resume Enhancer
          </Link>

          <Link
            href="/cover-letter"
            onClick={() => setOpen(false)}
            className="block hover:text-white"
          >
            📝 Cover Letter
          </Link>

          <div className="pt-6 border-t border-zinc-800 mt-6">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block hover:text-white"
            >
              🏠 Landing Page
            </Link>

          </div>

        </nav>
      </aside>
    </>
  );
}