const mysql = require("mysql");
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

const db = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
});

db.connect(err => {
    if (err) throw err;
    console.log("Verbindung zur MySQL-Datenbank hergestellt.");
});

module.exports = db;
