const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// Verbindung zur MySQL-Datenbank (Umgebungsvariablen werden aus .env gelesen)
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'journal_db',
});

db.connect((err) => {
  if (err) {
    console.error('Datenbankverbindung fehlgeschlagen:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Beispiel-API: Alle Benutzer abrufen (Platzhalter)
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Server starten (auf allen Schnittstellen erreichbar)
app.listen(3000, '0.0.0.0', () => {
  console.log('Backend running on port 3000');
});