import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import s from "@/styles/components/Nav.module.css";
import { Hr } from ".";
import { useHistoryStore } from "@/store";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { History } from "./History";
dayjs.extend(relativeTime);

export function Nav() {
  return (
    <nav className={s.container}>
      <Link href="/" target="_blank" className={s.link}>
        <PlusCircleIcon width={30} height={30} />
        Nuevo chat
      </Link>
      <Hr margin="1rem 0.5rem" />
      <section className={s.wrapMessages}>
        <History />
      </section>
    </nav>
  );
}
