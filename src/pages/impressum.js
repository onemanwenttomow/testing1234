import Link from "next/link";
import styled from "styled-components";

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageContent = styled.div`
  width: 1200px;
  max-width: 90vw;
`;

export default function Impressum() {
  return (
    <PageWrapper>
      <PageContent>
        <h1>Impressum</h1>
        <p>Dreamfly-Events UG (Haftungsbeschränkt)</p>
        <p>Sitz in: Trunkelsberg</p>
        <p>Registergericht: Amtsgericht Memmingen</p>
        <p>Registernummer: HRB 20785</p>
        <p>USt-id: DE366635441</p>
        <p>Talbergstraße 7a</p>
        <p>87779 Trunkelsberg</p>
        <p>info@dreamfly-events.de</p>
        <b>Vertreten durch:</b>
        <p>Alexander Hafner, Markus Sibbe, Yannick Schesser</p>
        <b>Verantwortlich für den Inhalt (gem. § 55 Abs. 2 RStV)</b>
        <p>Markus Sibbe, Talbergstraße 7a. 87779 Trunkelsberg</p>
        <br />
        <h2>Disclaimer - rechtliche Hinweise</h2>
        <p>
          § 1 Haftungsbeschränkung Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
          erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit
          und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt
          auf eigene Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die Meinung des
          jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Mit der reinen Nutzung
          der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem
          Anbieter zustande.
        </p>
        <p>
          § 2 Externe Links Diese Website enthält Verknüpfungen zu Websites Dritter („externe
          Links“). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat
          bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin
          überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße
          ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige
          Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links
          bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte
          zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne
          konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen
          werden jedoch derartige externe Links unverzüglich gelöscht.
        </p>
        <p>
          § 3 Urheber- und Leistungsschutzrechte Die auf dieser Website veröffentlichten Inhalte
          unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber-
          und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen
          Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für
          Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe
          von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und
          Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder
          Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar.
          Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und
          nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames
          ist nur mit schriftlicher Erlaubnis zulässig.
        </p>
        <p>
          § 4 Besondere Nutzungsbedingungen Soweit besondere Bedingungen für einzelne Nutzungen
          dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle
          ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die
          besonderen Nutzungsbedingungen.
        </p>
      </PageContent>
    </PageWrapper>
  );
}
