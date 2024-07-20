import { ChevronRightIcon } from "@heroicons/react/24/outline";
import s from "@/styles/components/Card.module.css";
import { damaris } from "@/lib";
import {
  useFormStore,
  useHistoryStore,
  useMessagesStore,
  usePromptsStore,
} from "@/store";
import { v4 as uuidv4 } from "uuid";

interface Props {
  title: string;
}

export function Card({ title }: Props) {
  const { messages } = useMessagesStore();
  const { setTyping, setMessage } = useMessagesStore();
  const { createMessage, createReply } = useHistoryStore();
  const { setDisabled, setLoading } = useFormStore();
  const { city, country, region } = usePromptsStore();

  const onClick = async () => {
    setLoading(true);
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

    const result = await damaris({
      messages: [...messages, { role: "user", content: title }],
      city,
      country,
      region,
    });
    setLoading(false);
    let res = "";
    for await (const part of result.textStream) {
      res += part;
      setTyping(res);
    }
    setTyping("");
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
