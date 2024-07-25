import TabCard from "@/components/elements/TabCard";
import { SpacerEmpty, BoldText } from "@/components/styledComponents";
import YumekaiRules from "@/components/waffenkostuemregeln/yumekai-rules";

export default function Waffenkostuemregeln() {
  return (
    <>
      <h1>Regeln für Cosplay und Cosplay-Waffen</h1>
      <BoldText>Cosplay-Regeln</BoldText>
      <p>
        Warum benötigen wir Cosplay- und Waffenregeln? Viele Cosplayer können nicht ohne die
        Nachbildung von Waffen, Requisiten oder anderen „Props“ auskommen. Oft stecken in diesen
        Gegenständen viel Detailarbeit und Liebe, sei es, um das Erscheinungsbild noch
        beeindruckender zu gestalten oder weil sie das charakteristische Merkmal der Figur sind. Ein
        Ritter ohne sein Schwert wäre einfach nicht dasselbe, und was wäre Darth Vader ohne sein
        Lichtschwert? Diese Regeln sind nicht dazu da, um jemanden zu ärgern. Wir müssen die Gesetze
        der Bundesrepublik Deutschland und die Anweisungen des Ordnungsamtes in Memmingen befolgen.
        Daraus ergeben sich die Regeln für die YumeKai. Wir sind sicher, dass niemand mit seinem in
        Liebe hergestellte Cosplay absichtlich Gefahrensituationen erzeugen will. Dennoch könnte es
        zu Unfällen kommen, daher müssen wir bestimmte Vorsichtsmaßnahmen treffen.
      </p>
      <BoldText>
        HINWEIS: Unsere Helfer in der Halle haben immer das letzte Wort. Es kann vorkommen, dass
        etwas übersehen wurde, und daher können Entscheidungen des Waffen-Checks rückgängig gemacht
        werden.
      </BoldText>
      <SpacerEmpty />
      <TabCard
        tabs={[
          {
            title: "YumeKai",
            content: (
              <>
                <YumekaiRules />
              </>
            ),
          },
          {
            title: "YumeKai - Night",
            content: (
              <>
                <h2>Tab 2 Inhalt</h2>
                <p>Lorem Impsum Dolor für Tab 2</p>
              </>
            ),
          },
        ]}
      />
    </>
  );
}
