import { ChevronRightIcon } from "@heroicons/react/24/outline";
import s from "@/styles/components/Card.module.css";
import { model } from "@/lib";
import { useFormStore, useHistoryStore, useMessagesStore } from "@/store";
import { v4 as uuidv4 } from "uuid";
import { streamText } from "ai";

interface Props {
  title: string;
}

export function Card({ title }: Props) {
  const { messages, setMessage } = useMessagesStore();
  const { createMessage, createReply } = useHistoryStore();
  const { setDisabled } = useFormStore();
  const onClick = async () => {
    setDisabled(true);
    const id = uuidv4();
    setMessage({ role: "user", content: title });
    createMessage({
      id,
      message: {
        role: "user",
        content: title,
      },
      created_at: new Date(),
    });
    const result = await streamText({
      model,
      system:
        "Eres un asistente virtual útil. Tu nombre es Damaris. Sirves para la planificación de Viajes turísticos. Tus preguntas y respuestas deben ser precisos. Por cada lugar muestra como llegar, si tienen algunos servicios como restaurante, hospedaje, similares y el presupuesto por unos dias.",
      messages: [...messages, { role: "user", content: title }],
      maxTokens: 1000,
    });

    let res = "";
    for await (const part of result.textStream) {
      res += part;
    }
    setMessage({ role: "assistant", content: res });
    createReply(id, { role: "assistant", content: res });
    setDisabled(false);
  };
  return (
    <li className={s.container} onClick={onClick}>
      <p>{title}</p>
      <div className={s.icon}>
        <ChevronRightIcon
          width={22}
          height={22}
          className={s.icon}
          color="var(--secondary-text-color)"
        />
      </div>
    </li>
  );
}
