import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Prompt {
  country: string;
  region: string;
  city: string;
}

interface Props {
  prompts: string[];
  setPrompt: ({ city, country, region }: Prompt) => void;
}

export const usePromptsStore = create(
  persist<Props>(
    (set, get) => ({
      prompts: [],
      setPrompt: ({ region, city, country }: Prompt): void => {
        set({
          prompts: [
            `¿Que lugares turísticos me recomiendas visitar en ${city}?`,
            `¿Cual es el lugar turístico mas visitado en ${city}?`,
            `¿Que lugares turísticos me recomiendas visitar en la región de ${region}?`,
            `¿Que lugares turísticos me recomiendas visitar en ${country}?`,
            `Prompt 5`,
            `Prompt 6`,
            `Prompt 7`,
            `Prompt 8`,
            `Prompt 9`,
            `Prompt 10`,
            `Prompt 11`,
            `Prompt 12`,
            `Prompt 13`,
            `Prompt 14`,
            `Prompt 15`,
            `Prompt 16`,
            `Prompt 17`,
            `Prompt 18`,
            `Prompt 19`,
            `Prompt 20`,
          ],
        });
      },
    }),
    {
      name: "prompts",
    }
  )
);
