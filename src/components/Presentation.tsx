import s from "@/styles/components/Presentation.module.css";
import { Cards } from "./Cards";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getRandom } from "@/utils";
import { usePromptsStore } from "@/store";

export function Presentation() {
  const { prompts } = usePromptsStore();
  const [promptsIndex, setPromptsIndex] = useState<number[]>([]);

  useEffect(() => {
    setPromptsIndex(getRandom(prompts.length));
  }, [prompts.length]);

  return (
    <section className={s.container}>
      <article className={s.hello}>
        <h1>Hola soy Damaris.</h1>
        <h2>¿Que lugar te gustaría conocer?</h2>
      </article>
      <Cards data={promptsIndex} />
      <button
        className={s.refresh}
        onClick={() => setPromptsIndex(getRandom(prompts.length))}
      >
        <ArrowPathIcon width={20} height={20} />
        Refrescar
      </button>
    </section>
  );
}
