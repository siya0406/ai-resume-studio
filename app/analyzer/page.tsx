"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function ResumeAnalyzer() {
  const [fileName, setFileName] = useState("");

  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-950 text-white flex flex-col md:flex-row">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 p-4 sm:p-6 md:p-10">

        {/* HEADER */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Resume Analyzer
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base mb-8">
          Upload your resume and get AI-powered ATS insights
        </p>

        {/* UPLOAD BOX */}
        <div className="border border-zinc-800 bg-zinc-900/40 rounded-2xl p-4 sm:p-6 md:p-8">

          {/* FILE INPUT */}
          <input
            id="resume-upload"
            type="file"
            className="hidden"
            onChange={(e) =>
              setFileName(e.target.files?.[0]?.name || "")
            }
          />

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

            <label
              htmlFor="resume-upload"
              className="w-full sm:w-auto text-center cursor-pointer bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500 transition"
            >
              Choose File
            </label>

            <button className="w-full sm:w-auto bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500 transition">
              Analyze Resume
            </button>

          </div>

          {/* FILE NAME */}
          {fileName && (
            <p className="text-green-400 mt-4 text-sm">
              Uploaded: {fileName}
            </p>
          )}

        </div>

      </main>
    </div>
  );
}