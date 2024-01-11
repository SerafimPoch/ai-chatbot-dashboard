const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const audienceSchema = new Schema({
  id: { type: Number, required: true },
  percent: { type: Number, required: true },
  info: [
    {
      name: { type: String, required: true },
      color: { type: String, required: true },
      percent: { type: Number, required: true },
    },
  ],
});

const Audience = mongoose.model("Audience", audienceSchema);

module.exports = Audience;
