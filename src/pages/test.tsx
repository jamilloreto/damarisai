import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/es";
dayjs.extend(localizedFormat).locale("es");

export default function Page() {
  const date = new Date().toLocaleDateString();
  const parts = date.split("/");
  const mm = parts[0].length === 1 ? `0${parts[0]}` : parts[0];
  const newFormat = `${parts[2]}-${mm}-${parts[1]}`;
  return (
    <div>
      <p>Test 5</p>
      <span>{date}</span>
      <span>
        {new Date().toLocaleDateString("es", {
          day: "2-digit",
          month: "long",
        })}
      </span>
      <p>----</p>
      <span>
        {new Date(newFormat).toLocaleDateString("es", {
          day: "2-digit",
          month: "long",
        })}
      </span>
    </div>
  );
}
