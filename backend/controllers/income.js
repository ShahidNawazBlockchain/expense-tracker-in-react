const IncomeSchema = require("../models/incomeModel");
exports.addIncome = async (req, res) => {
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

      const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
      });
    await income.save();
    res.status(200).json({ message: "Income Added" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getIncomes = async (req, res) => {
  try {
    const Incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(Incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  await IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: "Income deleted" });
    })
    .catch((error) => {
      res.status(500).json({ message: "server error" });
    });
};
