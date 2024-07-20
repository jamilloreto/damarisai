import s from "@/styles/components/Layout.module.css";
import { Logo } from "./Logo";
import {
  Bars3BottomRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Nav } from "./Nav";
import { Form } from "./Form";
import { useState } from "react";
import { useFormStore, useHistoryStore, useMessagesStore } from "@/store";
import { v4 as uuidv4 } from "uuid";
import { damaris } from "@/lib";
import Link from "next/link";
import { Drawer } from "./Drawer";
import { useGetIpInfo } from "@/hooks";
import { Loading } from "./Loading";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { loading, error } = useGetIpInfo();
  const { messages } = useMessagesStore();
  const { setTyping, setMessage } = useMessagesStore();
  const { createMessage, createReply } = useHistoryStore();
  const [userMessage, setUserMessage] = useState<string>("");
  const { setDisabled, setLoading } = useFormStore();
  const [open, setOpen] = useState<boolean>(false);

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

  if (loading) {
    return <Loading />;
  }

  if (!loading && error) {
    return (
      <div>
        <p>error</p>
      </div>
    );
  }

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
