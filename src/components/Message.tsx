import { CoreMessage } from "ai";
import { useEffect, useRef } from "react";
import s from "@/styles/components/Message.module.css";
import { Logo } from ".";

interface Props {
  message: CoreMessage;
}

export function Message({ message }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current) {
      const content = message.content as string;
      ref.current.innerText = content.replaceAll("*", "");
    }
  });
  return (
    <li className={`${s.container} ${message.role === "user" ? s.user : ""}`}>
      {message.role === "assistant" && <Logo size={20} />}
      <p
        ref={ref}
        className={`${s.p} ${message.role === "user" ? s.userText : ""}`}
      />
    </li>
  );
}
