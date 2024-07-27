import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Data {
  country: string;
  region: string;
  city: string;
  prompts: string[];
}

interface Props {
  prompts: string[];
  setData: ({ city, country, region }: Data) => void;
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
      setData: ({ region, city, country, prompts }: Data): void => {
        set({
          prompts,
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
