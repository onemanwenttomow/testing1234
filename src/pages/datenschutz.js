import styled from "styled-components";
import Link from "next/link";

const DatenschutzWrapper = styled.div`
  width: 100%;
  h2,
  h3 {
    margin: 25px 0 10px 0;
  }
  p {
    margin: 5px 0;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1.4rem;
    }
  }
`;

export default function Datenschutz() {
  return (
    <DatenschutzWrapper>
      <h1>Datenschutzerklärung</h1>

      <h2>Allgemeiner Hinweis und Pflichtinformationen</h2>
      <p>Benennung der verantwortlichen Stelle</p>
      <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
      <p>
        Dreamfly-Events UG (Haftungsbeschränkt)
        <br />
        Markus Sibbe
        <br />
        Talbergstraße 7a
        <br />
        87779 Trunkelsberg
      </p>
      <p>
        Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und
        Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
      </p>

      <h2>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
      <p>
        Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung
        möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den
        Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf
        erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>

      <h2>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h2>
      <p>
        Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde
        bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des
        Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet.
      </p>

      <h2>Recht auf Datenübertragbarkeit</h2>
      <p>
        Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
        eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
        Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung
        der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
        machbar ist.
      </p>

      <h2>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h2>
      <p>
        Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf
        unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten,
        deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
        Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema
        personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten
        Kontaktmöglichkeiten an uns wenden.
      </p>

      <h2>SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns
        als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit
        sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen
        eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am
        Schloss-Symbol in der Browserzeile.
      </p>

      <h2>Server-Log-Dateien</h2>
      <p>
        In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch
        Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:
      </p>
      <ul>
        <li>Besuchte Seite auf unserer Domain</li>
        <li>Datum und Uhrzeit der Serveranfrage</li>
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>IP-Adresse</li>
      </ul>
      <p>
        Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der
        Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur
        Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
      </p>

      <h2>Hosting</h2>
      <p>
        Diese Website wird bei einem externen Dienstleister gehostet, der Hetzner Online GmbH.
        Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des
        Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
        Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige
        Daten, die über eine Website generiert werden, handeln.
      </p>
      <p>
        Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
        potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
        sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
        professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
      <p>
        Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
        Leistungspflichten erforderlich ist.
      </p>
      <p>
        Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über
        Auftragsverarbeitung mit unserem Hoster geschlossen.
      </p>

      <h2>Registrierung auf dieser Website</h2>
      <p>
        Zur Nutzung bestimmter Funktionen können Sie sich auf unserer Website registrieren. Die
        übermittelten Daten dienen ausschließlich zum Zwecke der Nutzung des jeweiligen Angebotes
        oder Dienstes. Bei der Registrierung abgefragte Pflichtangaben sind vollständig anzugeben.
        Andernfalls werden wir die Registrierung ablehnen.
      </p>
      <p>
        Im Falle wichtiger Änderungen, etwa aus technischen Gründen, informieren wir Sie per E-Mail.
        Die E-Mail wird an die Adresse versendet, die bei der Registrierung angegeben wurde.
      </p>
      <p>
        Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung
        ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die
        Rechtmäßigkeit der bereits erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>
      <p>
        Wir speichern die bei der Registrierung erfassten Daten während des Zeitraums, den Sie auf
        unserer Website registriert sind. Ihre Daten werden gelöscht, sollten Sie Ihre Registrierung
        aufheben. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
      </p>

      <h2>Kontaktformular</h2>
      <p>
        Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert,
        um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine
        Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.
      </p>
      <p>
        Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf
        Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits
        erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose
        Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
      </p>
      <p>
        Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung
        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der
        Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen – insbesondere
        Aufbewahrungsfristen – bleiben unberührt.
      </p>

      <h2>Newsletter-Daten</h2>
      <p>
        Zum Versenden unseres Newsletters benötigen wir von Ihnen eine E-Mail-Adresse. Eine
        Verifizierung der angegebenen E-Mail-Adresse ist notwendig und der Empfang des Newsletters
        ist einzuwilligen. Ergänzende Daten werden nicht erhoben oder sind freiwillig. Die
        Verwendung der Daten erfolgt ausschließlich für den Versand des Newsletters.
      </p>
      <p>
        Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf Grundlage Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) verarbeitet. Ein Widerruf Ihrer bereits erteilten
        Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per
        E-Mail oder Sie melden sich über den „Austragen“-Link im Newsletter ab. Die Rechtmäßigkeit
        der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
      </p>
      <p>
        Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der Abmeldung gelöscht.
        Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt worden sein,
        verbleiben diese weiterhin bei uns.
      </p>

      <h2>Cookies</h2>
      <p>
        Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem
        Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver
        und sicherer zu machen.
      </p>
      <p>
        Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung
        von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie
        diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website
        wiederzuerkennen.
      </p>
      <p>
        Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken
        oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem
        Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine
        eingeschränkte Funktionalität unserer Website zur Folge haben.
      </p>
      <p>
        Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der
        Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind,
        erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir
        ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und
        reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für
        Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.
      </p>

      <h2>Google reCAPTCHA</h2>
      <p>
        Wir haben auf unserer Website Komponenten von Google reCAPTCHA integriert. Google reCAPTCHA
        ist ein Dienst der Google Ireland Limited und ermöglicht uns zu unterscheiden, ob eine
        Kontaktanfrage von einer natürlichen Person stammt oder automatisiert mittels eines
        Programmes geschieht. Wenn Sie auf diese Inhalte zugreifen, stellen Sie eine Verbindung zu
        Servern der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland her, wobei
        Ihre IP-Adresse und ggf. Browserdaten wie Ihr User-Agent übermittelt werden. Desweiteren
        zeichnet Google reCAPTCHA die Verweildauer und Mausbewegungen des Nutzers auf, um
        automatisierte Anfragen von menschlichen zu unterscheiden. Diese Daten werden ausschließlich
        zu den oben genannten Zwecken und zur Aufrechterhaltung der Sicherheit und Funktionalität
        von Google reCAPTCHA verarbeitet.
        <br />
        Zweck und Rechtsgrundlage
      </p>
      <p>
        Der Einsatz von Google reCAPTCHA erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs.
        1 lit. a. DSGVO und § 25 Abs. 1 TTDSG Wir beabsichtigen personenbezogenen Daten an
        Drittländer außerhalb des Europäischen Wirtschaftsraums, insbesondere die USA, zu
        übermitteln. In Fällen, in denen kein Angemessenheitsbeschluss der Europäischen Kommission
        existiert (z.B. in den USA) haben wir mit den Empfängern der Daten anderweitige geeignete
        Garantien im Sinne der Art. 44 ff. DSGVO vereinbart. Dies sind – sofern nicht anders
        angegeben – Standardvertragsklauseln der EU-Kommission gemäß Durchführungsbeschluss (EU)
        2021/914 vom 4. Juni 2021. Eine Kopie dieser Standardvertragsklauseln können Sie unter{" "}
        <Link
          href={"https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE"}
          target="_blank"
        >
          https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE
        </Link>{" "}
        einsehen.
      </p>
      <p>
        Zudem holen wir vor einem solchen Drittlandtransfer Ihre Einwilligung nach Art. 49 Abs. 1
        Satz 1 lit. a. DSGVO ein, die Sie über die Einwilligung im Consent Manager (oder sonstigen
        Formularen, Registrierungen etc.) erteilen. Wir weisen Sie darauf hin, dass bei
        Drittlandübermittlungen im Detail unbekannte Risiken (z.B. die Datenverarbeitung durch
        Sicherheitsbehörden des Drittlandes, deren genauer Umfang und deren Folgen für Sie wir nicht
        kennen, auf die wir keinen Einfluss haben und von denen Sie unter Umständen keine Kenntnis
        erlangen) bestehen können.
      </p>
      <p>
        Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns beeinflussbar,
        sondern wird von Google Ireland Limited bestimmt. Weitere Hinweise finden Sie in der
        Datenschutzerklärung für Google reCAPTCHA:{" "}
        <Link href={"https://policies.google.com/privacy?hl=en-US"} target="_blank">
          https://policies.google.com/privacy?hl=en-US
        </Link>
        .
      </p>
    </DatenschutzWrapper>
  );
}
