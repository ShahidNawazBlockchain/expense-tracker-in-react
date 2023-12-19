// routes/expense.js
const express = require("express");
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/expense");

const router = express.Router();

router
  .post("/add-expense", addExpense)
  .get("/get-expense", getExpenses)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
