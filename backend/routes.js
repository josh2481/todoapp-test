const express = require("express");
const router = express.Router();
const db = require("./database");

router.post("/entry", (req, res) => {
    const { title, content } = req.body;
    const query = "INSERT INTO entries (title, content) VALUES (?, ?)";
    db.query(query, [title, content], (err, result) => {
        if (err) throw err;
        res.sendStatus(200);
    });
});

module.exports = router;
