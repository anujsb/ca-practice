import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateBillingInsight(data: any) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const prompt = `Generate a billing insight based on this data: ${JSON.stringify(data)}`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}