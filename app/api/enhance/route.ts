import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { resumeText } = await req.json();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a professional resume expert. Improve this resume in ATS-friendly format:\n\n${resumeText}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("GEMINI RESPONSE:", JSON.stringify(data, null, 2));

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.error?.message ||
      "No response from Gemini";

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({
      result: "Server error while calling Gemini",
    });
  }
}