import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateHouseConcept(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Siz professional arxitektorsiz. Quyidagi tavsif asosida zamonaviy uy loyihasi konseptini ishlab chiqing: "${prompt}". 
      Javobni JSON formatida qaytaring: { "name": "Loyiha nomi", "style": "Uslub", "description": "Batafsil tavsif (3-4 jumla)", "features": ["xususiyat1", "xususiyat2"], "materials": ["material1", "material2"] }. 
      Faqat o'zbek tilida yozing.`,
      config: {
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}
