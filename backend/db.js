const mongoose = require("mongoose");
const initializeData = require("./initializeData");

const mongoDBUrl = "mongodb://database:27017/mydatabase";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await initializeData();
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
