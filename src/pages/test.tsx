import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/es";
dayjs.extend(localizedFormat).locale("es");

export default function Page() {
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <p>Test</p>
      <span>
        {new Date().toLocaleDateString("es", {
          day: "2-digit",
          month: "long",
        })}
      </span>
      <p>----</p>
      <span>
        {new Date(`${date} 00:00:00`).toLocaleDateString("es", {
          day: "2-digit",
          month: "long",
        })}
      </span>
    </div>
  );
}
