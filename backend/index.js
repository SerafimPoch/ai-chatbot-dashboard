const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Statistic = require("./models/Statistic");
const Audience = require("./models/Audience");
const Chart = require("./models/Chart");
const Earnings = require("./models/Earnings");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/statistic", async (req, res) => {
  try {
    const statistics = await Statistic.find();
    res.json(statistics);
  } catch (err) {
    res.status(500).send("Error fetching statistics");
  }
});

app.get("/audience", async (req, res) => {
  try {
    const audience = await Audience.find();
    res.json(audience);
  } catch (err) {
    res.status(500).send("Error fetching audience");
  }
});

app.get("/chart", async (req, res) => {
  try {
    const chart = await Chart.find();
    res.json(chart);
  } catch (err) {
    res.status(500).send("Error fetching chart");
  }
});

app.get("/earnings", async (req, res) => {
  try {
    const earnings = await Earnings.find();
    res.json(earnings);
  } catch (err) {
    res.status(500).send("Error fetching earnings");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
