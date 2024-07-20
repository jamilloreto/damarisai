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
  country: string;
  region: string;
  city: string;
}

export const usePromptsStore = create(
  persist<Props>(
    (set, get) => ({
      prompts: [],
      city: "",
      country: "",
      region: "",
      setPrompt: ({ region, city, country }: Prompt): void => {
        set({
          prompts: [
            `¿Que lugares turísticos me recomiendas visitar en ${city}?`,
            `¿Cual es el lugar turístico mas visitado en ${city}?`,
            `¿Que zonas turísticas cercanas hay de la ciudad de ${city}?`,
            `¿Que zonas turísticas cercanas hay a la ${region}?`,
            `¿Que lugares turísticos me recomiendas visitar en ${region}?`,
            `¿Cual es el lugar turístico mas popular en ${region}?`,
            `¿Que lugares turísticos me recomiendas visitar en ${country}?`,
            `¿Cual es el lugar turístico mas popular en ${country}?`,
            `¿Qué atracciones turísticas no debo perderme en ${region}?`,
            `¿Qué destinos turísticos son ideales para una escapada de fin de semana cerca de ${city}?`,
            `¿Cuáles son los mejores sitios arqueológicos para explorar en el ${country}?`,
            `¿Qué festivales o eventos culturales son imperdibles en ${country}?`,
            `¿Qué festivales o eventos culturales son imperdibles en ${region}?`,
            `¿Qué actividades turísticas me recomiendas hacer en ${city}?`,
            `¿Qué atracciones turísticas no debo perderme en ${region}?`,
            `¿Cuáles son los pueblos más pintorescos para visitar en ${city}?`,
            `¿Qué ciudades coloniales en ${country} son más interesantes para los turistas?`,
            `¿Qué zona turísticas coloniales en ${region} son más interesantes para los turistas?`,
            `¿Cuáles son los principales atractivos turísticos en ${region}?`,
            `¿Cuáles son los principales atractivos turísticos en ${country}?`,
            `¿Qué destinos turísticos ofrecen las mejores vistas panorámicas en ${country}?`,
            `¿Qué destinos turísticos ofrecen las mejores vistas panorámicas en ${region}?`,
            `¿Cuáles son los mejores lugares para practicar deportes de aventura en ${country}?`,
            `¿Cuáles son los mejores lugares para practicar deportes de aventura en ${region}?`,
            `¿Qué museos y centros culturales son imprescindibles en ${country}?`,
            `¿Qué museos y centros culturales debo visitar en ${region}?`,
          ],
          city,
          country,
          region,
        });
      },
    }),
    {
      name: "prompts",
    }
  )
);
