import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/es";
dayjs.extend(localizedFormat).locale("es");

export default function Page() {
  const date = new Date().toLocaleDateString();
  const parts = date.split("/");
  const mm = parts[0].length === 1 ? `0${parts[0]}` : parts[0];
  const newFormat = `${parts[2]}-${mm}-${parts[1]} 00:00:00`;
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
      <p>------</p>
      <b>
        {" "}
        {new Date(newFormat).toLocaleDateString("es", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </b>
    </div>
  );
}
