import { create } from "zustand";

interface Props {
  disabled: boolean;
  loading: boolean;
  setDisabled: (disabled: boolean) => void;
  setLoading: (loading: boolean) => void;
}

export const useFormStore = create<Props>((set, get) => ({
  disabled: false,
  loading: false,
  setDisabled: (disabled: boolean): void => {
    set({ disabled });
  },
  setLoading: (loading: boolean): void => {
    set({ loading });
  },
}));
