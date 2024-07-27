import { useState } from "react";
import {
  InputOptionTextArea,
  InputOptionInput,
  InputOptionSelect,
  InputOptionCheckbox,
  InputOptionRadio,
} from "@/components/elements/InputComponents";
import { StyledButton, StyledForm } from "../styledComponents";

export default function HelferForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [discordName, setDiscordName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [strengths, setStrengths] = useState("");
  const [desiredTeam, setDesiredTeam] = useState("");
  const [other, setOther] = useState("");
  const [nickname, setNickname] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [assembly, setAssembly] = useState(false);
  const [deconstruction, setDeconstruction] = useState(false);
  const [gender, setGender] = useState(null);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [contactForwarding, setContactForwarding] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("/api/helferRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          discordName,
          birthdate,
          strengths,
          desiredTeam,
          other,
          nickname,
          lastName,
          phone,
          assembly,
          deconstruction,
          gender,
          privacyPolicy,
          contactForwarding,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Daten erfolgreich eingefügt:"); //TODO: Löschen result.insertID
      } else {
        const result = await response.json();
        console.error("Fehler beim Einfügen der Daten:", result.error); //TODO: allternative bestätigunsseite wegen bereits eingegebener E-Mail
      }
    } catch (error) {
      console.error("Fehler beim Einfügen der Daten:", error);
    }

    // Reset form error
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputOptionInput title="Name" inputText={name} inputChange={(value) => setName(value)} />
      <InputOptionInput
        title="Nachname"
        inputText={lastName}
        inputChange={(value) => setLastName(value)}
      />
      <InputOptionInput
        title="Rufname"
        inputText={nickname}
        inputChange={(value) => setNickname(value)}
      />
      <InputOptionRadio
        title="Geschlecht"
        options={["Männlich", "Weiblich", "Divers"]}
        selectedOption={gender}
        inputChange={(value) => setGender(value)}
      />
      <InputOptionInput
        title="Discord Name"
        inputText={discordName}
        inputChange={(value) => setDiscordName(value)}
      />
      <InputOptionInput
        title="Geburtsdatum"
        inputText={birthdate}
        inputChange={(value) => setBirthdate(value)}
        type="date"
      />
      <InputOptionCheckbox
        title={"Aufbauhelfer"}
        isChecked={assembly}
        inputChange={(value) => setAssembly(value)}
      />
      <InputOptionCheckbox
        title={"Abbauhelfer"}
        isChecked={deconstruction}
        inputChange={(value) => setDeconstruction(value)}
      />
      <InputOptionInput title="E-Mail" inputText={email} inputChange={(value) => setEmail(value)} />
      <InputOptionInput
        title="Telefonnummer"
        inputText={phone}
        inputChange={(value) => setPhone(value)}
      />
      <InputOptionInput
        title="Wunsch Team/Tätigkeit"
        inputText={desiredTeam}
        inputChange={(value) => setDesiredTeam(value)}
      />
      <InputOptionTextArea
        title="Stärken"
        inputText={strengths}
        inputChange={(value) => setStrengths(value)}
      />
      <InputOptionTextArea
        title="Sonstiges"
        inputText={other}
        inputChange={(value) => setOther(value)}
      />

      <InputOptionCheckbox
        title={
          "Ich habe die Datenschutzerklärung gelesen, verstanden und akzeptiere diese. Ich habe verstanden, dass ich die Zustimmung zur Datenschutzerklärung jederzeit widerrufen kann. Über den Widerruf habe ich die Passage in der Datenschutzerklärung gelesen und verstanden."
        }
        isChecked={privacyPolicy}
        inputChange={(value) => setPrivacyPolicy(value)}
      />
      <InputOptionCheckbox
        title={"Dürfen wir, der zuständigen Orga deine Kontaktdaten weiter geben."}
        isChecked={contactForwarding}
        inputChange={(value) => setContactForwarding(value)}
      />
      <StyledButton type="submit">Anmelden</StyledButton>
    </StyledForm>
  );
}
