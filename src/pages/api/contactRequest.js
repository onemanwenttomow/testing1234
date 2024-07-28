import mysql from "mysql2/promise";

/**
 
CREATE TABLE contact_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clientIp VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    area VARCHAR(255),
    subject VARCHAR(255),
    message TEXT,
    privacyPolicy BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 */

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const { name, lastName, email, area, subject, message, privacyPolicy } = req.body;

    try {
      // Inserting the new contact request
      const query = `
        INSERT INTO contact_requests (
          clientIp,
          name,
          lastName,
          email,
          area,
          subject,
          message,
          privacyPolicy,
          created_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      `;

      const values = [clientIp, name, lastName, email, area, subject, message, privacyPolicy];

      const [result] = await connection.query(query, values);

      res.status(200).json({ message: "Daten erfolgreich eingefügt." });
    } catch (err) {
      console.error("Fehler beim Einfügen der Daten:", err);
      res.status(500).json({ error: "Daten konnten nicht gespeichert werden." });
    }
  } else {
    res.status(405).json({ message: "Methode nicht erlaubt." });
  }
}
