import s from "@/styles/components/Presentation.module.css";
import { Cards } from "./Cards";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getRandom } from "@/utils";

export function Presentation() {
  const [prompts, setPrompts] = useState<number[]>([]);

  useEffect(() => {
    setPrompts(getRandom());
  }, []);

  return (
    <section className={s.container}>
      <article className={s.hello}>
        <h1>Hola soy Damaris.</h1>
        <h2>¿Que lugar te gustaría conocer?</h2>
      </article>
      <Cards data={prompts} />
      <button className={s.refresh} onClick={() => setPrompts(getRandom())}>
        <ArrowPathIcon width={20} height={20} />
        Refrescar
      </button>
    </section>
  );
}
