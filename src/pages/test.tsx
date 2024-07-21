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
        {new Date(new Date()).toLocaleDateString("es", {
          day: "2-digit",
          month: "long",
        })}
      </span>
      <p>----</p>

      <span>
        {new Date(new Date(date).getTime()).toLocaleDateString("es", {
          day: "2-digit",
          month: "long",
        })}
      </span>
    </div>
  );
}
