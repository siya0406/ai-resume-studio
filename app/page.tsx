"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const leftVariant = {
  hidden: { x: -80, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const rightVariant = {
  hidden: { x: 80, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-zinc-950 to-zinc-900 text-white">
      {/* HEADER */}
      <motion.header
        variants={fadeVariant}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 flex items-center justify-between sm:px-8 py-4
  border-b border-white/10
  bg-black/30
  backdrop-blur-xl"
      >
        {/* LOGO */}
        <h1 className="text-xl font-bold">AI Resume Studio</h1>

        {/* BUTTONS */}
        <div className="flex items-center gap-5">
          {/* LOGIN */}
          <a
            href="/login"
            className="text-white/80 hover:text-white transition-all duration-200
      hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
          >
            Login
          </a>

          {/* GET STARTED */}
          <a
            href="/dashboard"
            className="bg-green-600 px-4 py-2 rounded-lg
      hover:bg-green-500 transition-all duration-200
      hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
          >
            Get Started
          </a>
        </div>
      </motion.header>

      {/* HERO SECTION */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.h1
          variants={rightVariant}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
        >
          AI Resume Studio
        </motion.h1>

        <motion.p
          variants={rightVariant}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl text-base sm:text-lg text-gray-400 mb-8"
        >
          Analyze resumes, improve ATS scores, generate cover letters, and stand
          out in job applications.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          {/* LAUNCH APP */}
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-zinc-700 bg-zinc-900/40
    hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-lg
    transition-all duration-300"
          >
            🚀 Launch App
          </Link>

          {/* RESUME ANALYZER */}
          <Link
            href="/analyzer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-zinc-700 bg-zinc-900/40
    hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-lg
    transition-all duration-300"
          >
            📄 Resume Analyzer
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-10 pb-24 max-w-6xl mx-auto">
        {[
          {
            title: "Resume Analysis",
            desc: "Analyze ATS score and resume quality.",
          },
          {
            title: "AI Enhancement",
            desc: "Improve resume bullet points instantly.",
          },
          {
            title: "Cover Letter Generator",
            desc: "Generate professional cover letters.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={leftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group rounded-2xl border border-zinc-700 bg-zinc-900/40 backdrop-blur-lg p-6 
            hover:-translate-y-3 hover:scale-105 hover:rotate-1 transition-all cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#A5CF83] transition-all">
              {item.title}
            </h3>
            <p className="text-zinc-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* FOOTER */}
      <motion.footer
        variants={fadeVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border-t border-zinc-800 py-10 px-4 text-center text-zinc-500"
      >
        © 2026 AI Resume Studio. Built for modern job seekers.
      </motion.footer>
    </main>
  );
}
