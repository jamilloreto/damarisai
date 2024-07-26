import { format } from "@formkit/tempo";

export default function Page() {
  const date = new Date("7/20/24");
  const date2 = new Date(new Date().toLocaleDateString());

  return (
    <div>
      <p>test</p>
      <p>{format(date, "long", "es")}</p>
      <span>------</span>
      <b>{format(date2, "long", "es")}</b>
    </div>
  );
}
