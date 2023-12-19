// routes/income.js
const express = require("express");
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income");

const router = express.Router();

router
  .post("/add-income", addIncome)
  .get("/get-income", getIncomes)
  .delete("/delete-income/:id", deleteIncome);

module.exports = router;
