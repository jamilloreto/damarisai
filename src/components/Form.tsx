import { useFormStore } from "@/store";
import s from "@/styles/components/Form.module.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface Props {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  length: number;
}

export function Form({ onSubmit, onChange, length }: Props) {
  const { disabled } = useFormStore();
  return (
    <form onSubmit={onSubmit} className={s.container}>
      <input
        type="text"
        placeholder="¿Que lugar te gustaría conocer?"
        onChange={onChange}
        className={s.input}
        maxLength={250}
        required
      />
      <footer className={s.footer}>
        <span className={s.span}>{`${length}/250`}</span>
        <button type="submit" className={s.submit} disabled={disabled}>
          <ArrowRightIcon width={22} height={22} />
        </button>
      </footer>
    </form>
  );
}
