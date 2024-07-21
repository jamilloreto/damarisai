export default function Page() {
  const date = new Date().toLocaleDateString();

  return (
    <div>
      <p>Test</p>
      <span>
        {new Date(new Date(date)).toLocaleDateString("es", {
          day: "2-digit",
          month: "long",
        })}
      </span>
    </div>
  );
}
