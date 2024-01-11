const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EarningsSchema = new Schema({
  id: { type: Number, required: true },
  version: { type: Number, required: true },
  pledge: { type: Number, required: true },
  lifetime: {
    price: { type: Number, required: true },
    percent: { type: Number, required: true },
  },
  storage: {
    used: { type: Number, required: true },
    color: { type: String, required: true },
  },
  space: {
    used: { type: Number, required: true },
    all: { type: Number, required: true },
  },
});

const Earnings = mongoose.model("Earnings", EarningsSchema);

module.exports = Earnings;
