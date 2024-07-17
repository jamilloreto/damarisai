import { streamText } from "ai";
import { useEffect, useState } from "react";
import { model } from "@/lib";
import { Form, Layout, Messages } from "@/components";
import { useHistoryStore, useMessagesStore } from "@/store";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const { setMessage } = useMessagesStore();
  const { history } = useHistoryStore();

  useEffect(() => {
    const findMessage = history.find((h) => h.id === id);
    if (findMessage) {
      setMessage({
        role: "user",
        content: findMessage.message.content as string,
      });
      setMessage({
        role: "assistant",
        content: findMessage.reply?.content as string,
      });
    }
  }, [id]);
  return (
    <Layout>
      <Messages />
    </Layout>
  );
}
