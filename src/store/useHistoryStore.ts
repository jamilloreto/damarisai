import { CoreMessage } from "ai";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface History {
  id: string;
  message: CoreMessage;
  reply?: CoreMessage;
  created_at: Date;
}

type CreateMessage = Omit<History, "reply">;

interface Props {
  history: History[];
  createMessage: (message: CreateMessage) => void;
  removeMessage: (id: string) => void;
  createReply: (id: string, reply: CoreMessage) => void;
}

export const useHistoryStore = create(
  persist<Props>(
    (set, get) => ({
      history: [],
      createMessage: (message: CreateMessage): void => {
        const { history } = get();
        set({ history: [...history, message] });
      },
      createReply: (id: string, reply: CoreMessage) => {
        const { history } = get();
        const newHistory = history.map((h) =>
          h.id === id ? { ...h, reply } : h
        );
        set({ history: newHistory });
      },
      removeMessage: (id: string) => {
        const { history } = get();
        const newData = history.filter((h) => h.id !== id);
        set({ history: newData });
      },
    }),
    {
      name: "history",
    }
  )
);
