const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());

// routes
const routes = ["transactions"]; // Add more route names as needed

routes.forEach((route) =>
  app.use(`/api/v1/${route}`, require(`./routes/${route}`))
);

const Server = () => {
  db();
  app.listen(PORT, () => {
    console.log("server running on :", PORT);
  });
};

Server();
