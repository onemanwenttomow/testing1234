import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log(clientIp);

    const {
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
    } = req.body;

    try {
      // Inserting the new data record
      const query = `
      INSERT INTO helfer (
      clientIp, 
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
      contactForwarding,)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        clientIp,
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
      ];

      const [result] = await connection.query(query, values);

      res.status(200).json({ message: "Daten erfolgreich eingefügt.", insertId: result.insertId });
    } catch (err) {
      console.error("Fehler beim Einfügen der Daten:", err);
      res.status(500).json({ error: "Daten konnten nicht gespeichert werden." });
    }
  } else {
    res.status(405).json({ message: "Methode nicht erlaubt." });
  }
}
