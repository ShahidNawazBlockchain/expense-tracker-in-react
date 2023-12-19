const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const { readdirSync } = require("fs");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());

// routes
const routesDir = "./routes";
try {
  const routes = readdirSync(routesDir);
  routes.map((route) => app.use("/api/v1", require(`${routesDir}/${route}`)));
  console.log(routes);
} catch (error) {
  console.error("Error reading routes directory:", error);
}

const Server = () => {
  db();
  app.listen(PORT, () => {
    console.log("server running on :", PORT);
  });
};

Server();
