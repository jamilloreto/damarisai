import {
  useFormStore,
  useHistoryStore,
  useMessagesStore,
  usePromptsStore,
} from "@/store";
import s from "@/styles/components/Form.module.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";
import { damaris } from "@/lib";
import { useState } from "react";

export function Form() {
  const { disabled } = useFormStore();
  const { messages } = useMessagesStore();
  const { setTyping, setMessage } = useMessagesStore();
  const { createMessage, createReply } = useHistoryStore();
  const [userMessage, setUserMessage] = useState<string>("");
  const { setDisabled, setLoading } = useFormStore();
  const { city, country, region } = usePromptsStore();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabled(true);
    setLoading(true);
    const content = userMessage;
    e.currentTarget.reset();
    const id = uuidv4();
    setUserMessage("");
    setMessage({ role: "user", content });
    createMessage({
      id,
      message: {
        role: "user",
        content,
      },
      created_at: new Date(),
    });

    const result = await damaris({
      messages: [...messages, { role: "user", content }],
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
    <form onSubmit={onSubmit} className={s.container}>
      <input
        type="text"
        placeholder="¿Que lugar te gustaría conocer?"
        onChange={(e) => setUserMessage(e.target.value)}
        className={s.input}
        maxLength={250}
        required
      />
      <footer className={s.footer}>
        <span className={s.span}>{`${userMessage.length}/250`}</span>
        <button type="submit" className={s.submit} disabled={disabled}>
          <ArrowRightIcon width={22} height={22} />
        </button>
      </footer>
    </form>
  );
}
