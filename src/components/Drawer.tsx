import s from "@/styles/components/Drawer.module.css";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { History } from "./History";

interface Props {
  setOpen: React.Dispatch<boolean>;
}

export function Drawer({ setOpen }: Props) {
  return (
    <aside className={s.container}>
      <section className={s.box}>
        <header className={s.header}>
          <button className={s.btn} onClick={() => setOpen(false)}>
            <Bars3BottomRightIcon width={30} height={30} />
          </button>
        </header>
        <article className={s.body}>
          <History />
        </article>
      </section>
    </aside>
  );
}
