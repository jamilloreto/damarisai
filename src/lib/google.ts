import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  baseURL: "https://generativelanguage.googleapis.com/v1beta",
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
});

export const model = google("models/gemini-pro", {
  topK: 1000,
});
