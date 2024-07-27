import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { CoreMessage, streamText, generateText } from "ai";

interface Places {
  country: string;
  region: string;
  city: string;
}
interface Params extends Places {
  messages: CoreMessage[];
}

const google = createGoogleGenerativeAI({
  baseURL: "https://generativelanguage.googleapis.com/v1beta",
  apiKey: process.env.GOOGLE_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
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
      Solo vas a responder a temas referentes a turismo.
      La ubicación del usuario es de ${city}, ${region} - ${country}.
      Por cada lugar muestra, una pequeña descripción, la ubicación, como llegar, si tienen algunos servicios como restaurante, hospedaje o similares, si se practica algún deporte, en que época del años es mejor visitar, el presupuesto y recomendaciones.`,
    messages,
    maxTokens: 1000,
  });
}

export async function getPlaces({ city, country, region }: Places) {
  return await generateText({
    model: google("models/gemini-1.5-flash-latest", {
      topK: 1000,
    }),
    prompt: `Dame 5 lugares turísticos en ${city}, 10 en ${region} y 15 en ${country}, muéstrame solamente los nombres de los lugares, sin descripción. y lo puedes agrupar todo un solo arreglo de strings.`,
    maxTokens: 1000,
  });
}
