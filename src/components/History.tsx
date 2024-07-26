import { useHistoryStore } from "@/store";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import s from "@/styles/components/History.module.css";

export function History() {
  const { history } = useHistoryStore();
  const { removeMessage } = useHistoryStore();

  const onlyDates = history.map((h) =>
    new Date(h.created_at).toLocaleDateString("es")
  );

  const setDates = Array.from(new Set(onlyDates));

  return (
    <ul className={s.messages}>
      {setDates?.map((d, k) => (
        <li key={k}>
          <span className={s.date}>{d}</span>
          <article className={s.wrapMessage}>
            {history?.map((h, k) => (
              <div key={k}>
                {d === new Date(h.created_at).toLocaleDateString() && (
                  <div className={s.message}>
                    <Link
                      href={`/m/${h.id}`}
                      target="_blank"
                      className={s.content}
                    >
                      {h.message.content.toString()}
                    </Link>
                    <button
                      className={s.btn}
                      onClick={() => removeMessage(h.id)}
                    >
                      <XMarkIcon width={20} height={20} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </article>
        </li>
      ))}
    </ul>
  );
}
