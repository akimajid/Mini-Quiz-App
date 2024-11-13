const express = require("express");
const authRoute = require("./routes/authRoute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});

module.exports = app;
