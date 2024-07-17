import { Card } from "./Card";
import s from "@/styles/components/Cards.module.css";
import prompts from "@/assets/prompts.json";

interface Props {
  data: number[];
}

export function Cards({ data }: Props) {
  return (
    <ul className={s.container}>
      {data?.map((i, k) => (
        <Card key={k} title={prompts[i]} />
      ))}
    </ul>
  );
}
