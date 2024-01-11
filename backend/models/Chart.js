const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChartSchema = new Schema({
  id: { type: Number, required: true },
  date: { type: String, required: true, unique: true },
  uv: { type: Number, required: true },
  amt: { type: Number, required: true },
});

const Chart = mongoose.model("Chart", ChartSchema);

module.exports = Chart;
