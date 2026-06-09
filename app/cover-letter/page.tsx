"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function CoverLetter() {
  const [jobDesc, setJobDesc] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col md:flex-row pt-14 md:pt-0">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 p-4 sm:p-6 md:p-10">

        {/* HEADER */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Cover Letter Generator
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base mb-6">
          Paste job description and generate AI cover letter
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* INPUT BOX */}
          <div className="border border-zinc-800 bg-zinc-900/40 rounded-2xl p-4 sm:p-6">

            <h2 className="font-semibold mb-3">Job Description</h2>

            <textarea
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
              placeholder="Paste job description here..."
              className="w-full h-56 sm:h-64 bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm sm:text-base outline-none focus:border-purple-500 resize-none"
            />

            <button
              onClick={() =>
                setCoverLetter(
                  "✨ AI generated cover letter will appear here..."
                )
              }
              className="w-full mt-4 bg-purple-600 hover:bg-purple-500 transition px-4 py-3 rounded-lg"
            >
              Generate Cover Letter
            </button>

          </div>

          {/* OUTPUT BOX */}
          <div className="border border-zinc-800 bg-zinc-900/40 rounded-2xl p-4 sm:p-6">

            <h2 className="font-semibold mb-3">Generated Letter</h2>

            <div className="w-full h-56 sm:h-64 bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm sm:text-base overflow-auto">
              {coverLetter || (
                <span className="text-zinc-500">
                  Your cover letter will appear here...
                </span>
              )}
            </div>

            {/* COPY BUTTON */}
            {coverLetter && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(coverLetter)
                  }
                  className="bg-green-600 hover:bg-green-500 transition px-5 py-2 rounded-lg"
                >
                  Copy
                </button>
              </div>
            )}

          </div>

        </div>
      </main>
    </div>
  );
}