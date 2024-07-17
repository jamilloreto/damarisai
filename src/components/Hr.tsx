import s from "@/styles/components/Hr.module.css";

interface Props {
  margin: string;
}

export function Hr({ margin }: Props) {
  return <hr className={s.border} style={{ margin }} />;
}
