import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { CoreMessage, streamText } from "ai";

interface Params {
  messages: CoreMessage[];
  country: string;
  region: string;
  city: string;
}

const google = createGoogleGenerativeAI({
  baseURL: "https://generativelanguage.googleapis.com/v1beta",
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

const model = google("models/gemini-pro", {
  topK: 1000,
});

export async function damaris({ messages, city, country, region }: Params) {
  return await streamText({
    model,
    system: `Eres un asistente virtual útil.
      Tu nombre es Damaris.
      Sirves para la planificación de Viajes turísticos.
      Tus preguntas y respuestas deben ser precisos.
      La ubicación del usuario es de ${city}, ${region} - ${country}.
      Por cada lugar muestra como llegar, si tienen algunos servicios como restaurante, hospedaje o similares, algún deporte para practicar, el presupuesto por unos días y recomendaciones o sugerencias.`,
    messages,
    maxTokens: 1000,
  });
}
