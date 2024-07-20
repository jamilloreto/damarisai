import s from "@/styles/components/Error.module.css";
import { Logo } from "./Logo";

interface Props {
  status: number;
}

export function Error({ status }: Props) {
  return (
    <>
      <header className={s.header}>
        <Logo size={60} />
      </header>

      <main className={s.container}>
        <h1 className={s.title}>{`Error: ${status}`}</h1>
        <p className={s.text}>
          {status === 500
            ? "Lo sentimos, ocurrió un error inesperado"
            : "Lo sentimos, por el momento esta página no esta disponible"}
        </p>
      </main>
    </>
  );
}
