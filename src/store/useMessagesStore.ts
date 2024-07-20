import { CoreMessage } from "ai";
import { create } from "zustand";

interface Props {
  messages: CoreMessage[];
  typing: string;
  setMessage: (message: CoreMessage) => void;
  setTyping: (typing: string) => void;
}

export const useMessagesStore = create<Props>((set, get) => ({
  messages: [],
  typing: "",
  setMessage: (message: CoreMessage): void => {
    const { messages } = get();
    set({ messages: [...messages, message] });
  },
  setTyping: (typing: string) => {
    set({ typing });
  },
}));
