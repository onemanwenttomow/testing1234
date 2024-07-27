import { useState } from "react";
import {
  InputOptionTextArea,
  InputOptionInput,
  InputOptionSelect,
  InputOptionCheckbox,
  InputOptionRadio,
} from "@/components/elements/InputComponents";
import { StyledButton, StyledForm } from "@/components/styledComponents";

export default function Kontaktformular() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [area, setArea] = useState(null);
  const [subject, setSubject] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("/api/contactRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastName,
          email,
          area,
          subject,
          message,
          privacyPolicy,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Daten erfolgreich eingefügt:"); //TODO: Löschen result.insertID
      } else {
        console.error("Fehler beim Einfügen der Daten:", result.error); //TODO: allternative bestätigunsseite wegen bereits eingegebener E-Mail
      }
    } catch (error) {
      console.error("Fehler beim Einfügen der Daten:", error);
    }

    // Reset form error
  }

  return (
    <>
      <h1>Kontaktformular</h1>
      <p>
        In nachfolgendem Formular kannst Du Kontakt zu uns aufnehmen. Egal, ob Du nun eine Presse-
        oder Händleranfrage hast oder Helfer werden magst oder einfach nur etwas anderes wissen
        möchtest, hier bist Du richtig!
      </p>
      <p>Felder mit * sind Pflichtfelder.</p>
      <StyledForm onSubmit={handleSubmit}>
        <InputOptionInput
          title="Vorname"
          inputText={name}
          inputChange={(value) => setName(value)}
        />
        <InputOptionInput
          title="Nachname"
          inputText={lastName}
          inputChange={(value) => setLastName(value)}
        />
        <InputOptionInput
          title="E-Mail"
          inputText={email}
          inputChange={(value) => setEmail(value)}
        />
        <InputOptionSelect
          title="Bereich"
          options={[
            "Allgemeines",
            "Helfer",
            "Bühne",
            "Aussteller/Händler",
            "Tickets",
            "Presse",
            "Sonstiges",
            "Workshops/Vorträge",
          ]}
          inputText={area}
          inputChange={(value) => setArea(value)}
        />
        <InputOptionInput
          title="Betreff"
          inputText={subject}
          inputChange={(value) => setSubject(value)}
        />
        <InputOptionTextArea
          title="Nachricht"
          inputText={message}
          inputChange={(value) => setMessage(value)}
        />
        <InputOptionCheckbox
          title={
            "Ich habe die Datenschutzerklärung gelesen, verstanden und akzeptiere diese. Ich habe verstanden, dass ich die Zustimmung zur Datenschutzerklärung jederzeit widerrufen kann. Über den Widerruf habe ich die Passage in der Datenschutzerklärung gelesen und verstanden."
          }
          isChecked={privacyPolicy}
          inputChange={(value) => setPrivacyPolicy(value)}
        />
        <StyledButton type="submit">Anmelden</StyledButton>
      </StyledForm>
    </>
  );
}
