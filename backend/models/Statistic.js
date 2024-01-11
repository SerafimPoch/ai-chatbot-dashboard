const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatisticSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true, unique: true },
  value: { type: Number, required: true },
  percent: { type: Number, required: true },
});

const Statistic = mongoose.model("Statistic", StatisticSchema);

module.exports = Statistic;
