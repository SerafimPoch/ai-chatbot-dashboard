const Audience = require("./models/Audience");
const Chart = require("./models/Chart");
const Statistic = require("./models/Statistic");
const Earnings = require("./models/Earnings");

const STATISTIC_INITIAL_DATA = require("./seeds/StatisticSeed");
const CHART_INITIAL_DATA = require("./seeds/ChartSeed");
const AUDIENCE_INITIAL_DATA = require("./seeds/AudienceSeed");
const EARNING_INITIAL_DATA = require("./seeds/EarningsSeed");

const initializeData = async () => {
  // Удаление существующих записей и вставка начальных данных для Statistic
  await Statistic.deleteMany({});
  await Statistic.insertMany(STATISTIC_INITIAL_DATA);

  // Удаление существующих записей и вставка начальных данных для Chart
  await Chart.deleteMany({});
  await Chart.insertMany(CHART_INITIAL_DATA);

  // Удаление существующих записей и вставка начальных данных для Audience
  await Audience.deleteMany({});
  await Audience.insertMany(AUDIENCE_INITIAL_DATA);

  // Удаление существующих записей и вставка начальных данных для Earnings
  await Earnings.deleteMany({});
  await Earnings.insertMany(EARNING_INITIAL_DATA)
    .then(() => console.log("Initial earnings data inserted"))
    .catch((err) => console.error("Error inserting earnings data:", err));
};

module.exports = initializeData;
