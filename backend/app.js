const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const auth = require("./auth");
const routes = require("./routes");
const database = require("./database");

const app = express();
app.use(cors());
app.use(bodyParser.json());

database.connect();

app.use("/", routes);
app.use("/", auth);

app.listen(3000, () => console.log("Server läuft auf Port 3000"));
