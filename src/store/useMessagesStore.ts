import { CoreMessage } from "ai";
import { create } from "zustand";

interface Props {
  messages: CoreMessage[];
  setMessage: (message: CoreMessage) => void;
}

export const useMessagesStore = create<Props>((set, get) => ({
  messages: [],
  setMessage: (message: CoreMessage): void => {
    const { messages } = get();
    set({ messages: [...messages, message] });
  },
}));
