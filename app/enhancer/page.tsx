"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import jsPDF from "jspdf";

export default function ResumeEnhancer() {
  const [outputText, setOutputText] = useState("");

  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleEnhance = async () => {
    try {
      if (!file) {
        setOutputText("Please upload a file first");
        return;
      }

      const text = await file.text();

      setOutputText("⏳ AI is improving your resume...");

      const res = await fetch("/api/enhance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resumeText: text }),
      });

      const data = await res.json();

      setOutputText(data.result);
    } catch (error) {
      setOutputText("❌ Something went wrong");
    }
  };

  // ===================== ADDED DOWNLOAD FUNCTIONS =====================

  const downloadTXT = () => {
    if (!outputText) return;

    const blob = new Blob([outputText], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "enhanced-resume.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    if (!outputText) return;

    const doc = new jsPDF();

    const lines = doc.splitTextToSize(outputText, 180);

    doc.text(lines, 10, 10);

    doc.save("enhanced-resume.pdf");
  };

  // ===================================================================

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col md:flex-row pt-14 md:pt-0">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 p-4 sm:p-6 md:p-10">
        {/* HEADER */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Resume Enhancer
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base mb-6">
          Upload your resume and get AI-powered improvements
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT - UPLOAD */}
          <div className="border border-zinc-800 bg-zinc-900/40 rounded-2xl p-4 sm:p-6">
            <h2 className="font-semibold mb-4">Upload Resume</h2>

            {/* FILE INPUT */}
            <input
              type="file"
              accept=".pdf,.doc,.docx,.txt,text/plain"
              id="resume-upload"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0] || null;
                setFile(f);
                setFileName(f?.name || "");
              }}
            />

            {/* UPLOAD BOX */}
            <label
              htmlFor="resume-upload"
              className="flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-zinc-700 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/50 cursor-pointer transition"
            >
              <div className="text-center">
                <p className="text-lg font-semibold">📄 Drop your resume here</p>

                <p className="text-zinc-400 text-sm mt-2">
                  or click to upload (PDF, DOC, DOCX)
                </p>

                {fileName && (
                  <p className="text-green-400 mt-4 text-sm">
                    Selected: {fileName}
                  </p>
                )}
              </div>
            </label>

            {/* ENHANCE BUTTON */}
            <button
              onClick={handleEnhance}
              className="w-full mt-4 bg-purple-600 hover:bg-purple-500 transition px-4 py-3 rounded-lg"
            >
              Enhance Resume
            </button>
          </div>

          {/* RIGHT - OUTPUT */}
          <div className="border border-zinc-800 bg-zinc-900/40 rounded-2xl p-4 sm:p-6">
            <h2 className="font-semibold mb-3">Enhanced Resume</h2>

            <div className="w-full h-60 bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm sm:text-base overflow-auto">
              {outputText || (
                <span className="text-zinc-500">
                  Enhanced result will appear here...
                </span>
              )}
            </div>

            {/* BUTTONS SECTION (UPDATED) */}
            {outputText ? (
              <div className="mt-4 flex flex-wrap justify-end gap-3">
                <button
                  onClick={() => navigator.clipboard.writeText(outputText)}
                  className="bg-green-600 hover:bg-green-500 transition px-5 py-2 rounded-lg"
                >
                  Copy Output
                </button>

                <button
                  onClick={downloadTXT}
                  className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-lg"
                >
                  Download TXT
                </button>

                <button
                  onClick={downloadPDF}
                  className="bg-purple-600 hover:bg-purple-500 transition px-5 py-2 rounded-lg"
                >
                  Download PDF
                </button>
              </div>
            ) : (
              <p className="text-zinc-500 mt-4 text-sm text-right">
                No output yet
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}