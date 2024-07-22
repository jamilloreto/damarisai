import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/es";
dayjs.extend(localizedFormat).locale("es");

export default function Page() {
  const date = new Date().toLocaleDateString();
  const newDate = new Date(date);
  return (
    <div>
      <p>Test 5</p>
      <span>{date}</span>

      <p>----</p>
      <b>
        {new Date(newDate).toLocaleDateString("es", {
          day: "2-digit",
          month: "long",
        })}
      </b>
    </div>
  );
}
