const express = require("express");
const authRoute = require("./routes/authRoute");
const quizRoute = require("./routes/quizRoute");
const questionRoute = require("./routes/questionRoute");
const { authenticate } = require("./middleware/authenticate");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/quizzes", authenticate, quizRoute);
app.use("/api/quizzes", authenticate, questionRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});

module.exports = app;
