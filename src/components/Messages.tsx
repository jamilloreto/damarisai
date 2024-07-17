import { useMessagesStore } from "@/store";
import { Presentation } from ".";
import { Message } from "./Message";
import s from "@/styles/components/Messages.module.css";

export function Messages() {
  const { messages } = useMessagesStore();

  if (messages.length === 0) {
    return <Presentation />;
  }

  return (
    <ul className={s.container}>
      {messages.map((m, k) => (
        <Message key={k} message={m} />
      ))}
    </ul>
  );
}
