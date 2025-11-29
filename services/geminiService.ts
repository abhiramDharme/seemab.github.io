import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingAudit = async (industry: string, challenge: string): Promise<string> => {
  try {
    const prompt = `
      You are Seema Bhonde, an expert Digital Marketer specializing in the Manufacturing and Industrial sectors.
      
      A potential client in the "${industry}" industry is facing a challenge with "${challenge}".
      
      Provide 3 brief, high-impact, data-driven strategic recommendations to solve their problem.
      The tone should be professional, ROI-focused, and direct.
      
      Format the output as a simple HTML unordered list (<ul><li>...</li></ul>) without markdown code blocks.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        maxOutputTokens: 300,
        temperature: 0.7,
      }
    });

    return response.text || "Unable to generate audit at this time. Please contact me directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while generating your audit. Please try again later.";
  }
};