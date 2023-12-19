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
const incomeRoutes = require("./routes/income");
const expenseRoutes = require("./routes/expense");

app.use("/api/v1", incomeRoutes);
app.use("/api/v1", expenseRoutes);

const Server = () => {
  db();
  app.listen(PORT, () => {
    console.log("server running on :", PORT);
  });
};

Server();
