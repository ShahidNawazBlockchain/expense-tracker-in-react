const expenseSchema = require("../models/expenseModel");
exports.addExpense = async (req, res) => {
  console.log(req.body);
  const { title, amount, category, description, date } = req.body;

  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: "all fields are required!" });
    }
    if (amount <= 0 || !amount == "number") {
      return res
        .status(400)
        .json({ message: "amount must be positive number" });
    }

    const expense = expenseSchema({
      title,
      amount,
      category,
      description,
      date,
    });
    await expense.save();
    res.status(200).json({ message: "expense Added" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await expenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  await expenseSchema
    .findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "expense deleted" });
    })
    .catch((error) => {
      res.status(500).json({ message: "server error" });
    });
};
