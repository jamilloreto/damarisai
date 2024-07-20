import { usePromptsStore } from "@/store";
import { Card } from "./Card";
import s from "@/styles/components/Cards.module.css";

interface Props {
  data: number[];
}

export function Cards({ data }: Props) {
  const { prompts } = usePromptsStore();
  return (
    <ul className={s.container}>
      {data?.map((i, k) => (
        <Card key={k} title={prompts[i]} />
      ))}
    </ul>
  );
}
