export default function Page() {
  const date = new Date().toLocaleDateString();
  const date1 = new Date(date).toLocaleDateString("es", {
    day: "numeric",
    month: "long",
  });
  const date2 = new Date().toLocaleDateString("es", {
    day: "numeric",
    month: "long",
  });
  const date3 = new Date(new Date(date).toISOString()).toLocaleDateString(
    "es",
    {
      day: "numeric",
      month: "long",
    }
  );
  const date4 = new Date(new Date(date)).toLocaleDateString("es", {
    day: "numeric",
    month: "long",
  });
  return (
    <div>
      <p>Test</p>
      <span>{date}</span>
      <p>----</p>
      <span>{date1}</span>
      <p>--------</p>
      <span>{date2}</span>
      <p>--------</p>
      <span>{date3}</span>
      <p>---------</p>
      <span>{date4}</span>
    </div>
  );
}
