const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'rootpassword',
    database: 'notesapp'
});

db.connect(err => {
    if (err) {
        console.error('Datenbankverbindung fehlgeschlagen:', err);
        return;
    }
    console.log('Mit der MySQL-Datenbank verbunden');
});

app.get('/', (req, res) => {
    res.send('Backend läuft!');
});

app.listen(3000, () => {
    console.log('Server läuft auf Port 3000');
});
