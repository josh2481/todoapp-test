const express = require("express");
const router = express.Router();
const db = require("./database");

router.post("/register", (req, res) => {
    const { username, password } = req.body;
    const query = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(query, [username, password], (err, result) => {
        if (err) throw err;
        res.sendStatus(200);
    });
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const query = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(query, [username, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }
    });
});

module.exports = router;
