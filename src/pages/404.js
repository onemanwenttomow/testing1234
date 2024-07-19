import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <h1>404 - Seite nicht gefunden</h1>
      <p>Die Seite, die du suchst, existiert nicht.</p>
      <Link href="/">Zurück zur Startseite</Link>
    </>
  );
}
