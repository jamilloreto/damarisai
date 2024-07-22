import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/es";
dayjs.extend(localizedFormat).locale("es");

export default function Page() {
  const date = new Date().toLocaleDateString();
  const parts = date.split("/");
  const newFormat = `${parts[2]}-0${parts[0]}-${parts[1]}`;
  return (
    <div>
      <p>Test 8</p>
      <b>
        {new Date("2024-07-21 00:00:00").toLocaleDateString("es", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </b>
    </div>
  );
}
