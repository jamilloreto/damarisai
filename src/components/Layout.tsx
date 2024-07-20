import s from "@/styles/components/Layout.module.css";
import { Logo } from "./Logo";
import {
  Bars3BottomRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Nav } from "./Nav";
import { Form } from "./Form";
import { useState } from "react";
import { useFormStore, useHistoryStore, useMessagesStore } from "@/store";
import { Error } from "./Error";
import Link from "next/link";
import { Drawer } from "./Drawer";
import { useGetIpInfo } from "@/hooks";
import { Loading } from "./Loading";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { loading, error } = useGetIpInfo();

  const [open, setOpen] = useState<boolean>(false);

  if (loading) {
    return <Loading />;
  }

  if (!loading && error) {
    return <Error status={500} />;
  }

  return (
    <>
      <aside className={s.aside}>
        <header className={s.header}>
          <Link href="/" target="_blank" className={s.plus}>
            <PlusCircleIcon width={30} height={30} />
          </Link>

          <div className={s.logo}>
            <Logo size={30} />
            <b className={s.damaris}>Damaris AI</b>
          </div>

          <button className={s.menu} onClick={() => setOpen(true)}>
            <Bars3BottomRightIcon width={30} height={30} />
          </button>
        </header>
        <Nav />
      </aside>

      <main className={s.main}>
        {children}

        <Form />
      </main>

      {open && <Drawer setOpen={setOpen} />}
    </>
  );
}
