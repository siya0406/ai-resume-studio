"use client";

import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col md:flex-row">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 sm:p-6 md:p-10">

        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          Dashboard
        </h1>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h2 className="font-semibold">ATS Score</h2>
            <p className="text-3xl text-green-400 mt-2">82%</p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h2 className="font-semibold">My Resumes</h2>
            <p className="text-3xl mt-2">3</p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h2 className="font-semibold">AI Suggestions</h2>
            <p className="text-3xl mt-2">12</p>
          </div>

        </div>

        {/* ACTION BOX */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h2 className="font-semibold mb-2">Create Resume</h2>
            <p className="text-zinc-400 mb-4">Start building new resume</p>
            <button className="bg-green-600 px-4 py-2 rounded-lg" onClick={() => alert("Coming soon 🚀")}>
              Create
            </button>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h2 className="font-semibold mb-2">Improve Resume</h2>
            <p className="text-zinc-400 mb-4">Get AI suggestions</p>
            <button className="bg-blue-600 px-4 py-2 rounded-lg" onClick={() => alert("Coming soon 🚀")}>
              Improve
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}