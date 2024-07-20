import styled from "styled-components";
import TabTitle from "@/components/elements/TabTitle";
import Link from "next/link";

export default function FAQ() {
  return (
    <>
      <h1>FAQ</h1>
      <p>Inhaltsverzeichnis</p>
      <br />
      <h2>1. YumeKai</h2>
      <TabTitle
        title="Was ist YumeKai?"
        content={
          <p>
            <Link href={"/"}>test</Link>
            <span> fafg</span>
          </p>
        }
      />
      <TabTitle
        title="Wann ist die YumeKai?"
        content="Der Termin der YumeKai 2025 ist noch nicht bekannt."
      />
      <TabTitle
        title="Wo ist die YumeKai?"
        content="Die YumeKai 2024 wird in der Stadthalle Memmingen (Platz der Deutschen Einheit 1, 87700 Memmingen) stattfinden."
      />
    </>
  );
}
