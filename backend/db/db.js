const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("DB connected");
  } catch (error) {
    console.log("Db is not connected", error.message);
  }
};
module.exports = { db };
