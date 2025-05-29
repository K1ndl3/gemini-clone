
const apiKey = "AIzaSyBdhqMmNGYzXJ6WaDtQnudfPt7R5b4prM0"
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: apiKey });

export async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  return (console.log(response.text));
}
