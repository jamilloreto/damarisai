import s from "@/styles/components/Layout.module.css";
import { Logo } from "./Logo";
import {
  Bars3BottomRightIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Nav } from "./Nav";
import { Form } from "./Form";
import { useState } from "react";
import { useFormStore, useHistoryStore, useMessagesStore } from "@/store";
import { v4 as uuidv4 } from "uuid";
import { streamText } from "ai";
import { model } from "@/lib";
import Link from "next/link";
import { Drawer } from "./Drawer";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { messages, setMessage } = useMessagesStore();
  const { createMessage, createReply } = useHistoryStore();
  const [userMessage, setUserMessage] = useState<string>("");
  const { setDisabled } = useFormStore();
  const [open, setOpen] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setDisabled(true);
    e.currentTarget.reset();
    e.preventDefault();
    const id = uuidv4();
    setMessage({ role: "user", content: userMessage });
    createMessage({
      id,
      message: {
        role: "user",
        content: userMessage,
      },
      created_at: new Date(),
    });
    const result = await streamText({
      model,
      system:
        "Eres un asistente virtual útil. Tu nombre es Damaris. Sirves para la planificación de Viajes turísticos. Tus preguntas y respuestas deben ser precisos. Por cada lugar muestra como llegar, si tienen algunos servicios como restaurante, hospedaje, similares y el presupuesto por unos dias.",
      messages: [...messages, { role: "user", content: userMessage }],
      maxTokens: 1000,
    });

    let res = "";
    for await (const part of result.textStream) {
      res += part;
    }
    setUserMessage("");
    setMessage({ role: "assistant", content: res });
    createReply(id, { role: "assistant", content: res });
    setDisabled(false);
  };
  return (
    <>
      <aside className={s.aside}>
        <header className={s.header}>
          <Link href="/" target="_blank" className={s.plus}>
            <PlusCircleIcon width={30} height={30} />
          </Link>

          <div className={s.logo}>
            <Logo size={30} />
            <b className={s.damaris}>Damaris</b>
          </div>

          <button className={s.menu} onClick={() => setOpen(true)}>
            <Bars3BottomRightIcon width={30} height={30} />
          </button>
        </header>
        <Nav />
      </aside>

      <main className={s.main}>
        {children}
        <Form
          length={userMessage.length}
          onSubmit={onSubmit}
          onChange={(e) => setUserMessage(e.target.value)}
        />
      </main>

      {open && <Drawer setOpen={setOpen} />}
    </>
  );
}
