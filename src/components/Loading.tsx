import { Logo } from ".";
import s from "@/styles/components/Loading.module.css";
export function Loading() {
  return (
    <main className={s.container}>
      <Logo size={60} />
    </main>
  );
}
