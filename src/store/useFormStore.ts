import { create } from "zustand";

interface Props {
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
}

export const useFormStore = create<Props>((set, get) => ({
  disabled: false,
  setDisabled: (disabled: boolean): void => {
    set({ disabled });
  },
}));
