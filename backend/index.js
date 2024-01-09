const express = require("express");
const connectDB = require("./db");
connectDB();

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
