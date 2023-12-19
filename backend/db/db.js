const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.log("Db is not connected", error.message);
  }
};

module.exports = { db };
