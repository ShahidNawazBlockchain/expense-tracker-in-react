const express = require("express");
const cors = require("cors");

const { db } = require("./db/db");
const { readdirSync } = require("fs");
//const { route } = require("./routes/transactions");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());

// routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);
const Server = () => {
  db();
  app.listen(PORT, () => {
    console.log("server running on :", PORT);
  });
};

Server();
