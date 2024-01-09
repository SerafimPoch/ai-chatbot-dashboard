const mongoose = require("mongoose");

const mongoDBUrl = "mongodb://database:27017/mydatabase";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Завершить приложение при ошибке подключения
  }
};

module.exports = connectDB;
