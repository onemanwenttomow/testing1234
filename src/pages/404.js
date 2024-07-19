import Link from "next/link";
import { PageContent, PageWrapper } from "@/components/styledComponents";

export default function Custom404() {
  return (
    <PageWrapper>
      <PageContent>
        <h1>404 - Seite nicht gefunden</h1>
        <p>Die Seite, die du suchst, existiert nicht.</p>
        <Link href="/">Zurück zur Startseite</Link>
      </PageContent>
    </PageWrapper>
  );
}
