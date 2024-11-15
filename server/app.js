const express = require("express");
const authRoute = require("./routes/authRoute");
const quizRoute = require("./routes/quizRoute");
const questionRoute = require("./routes/questionRoute");
const answerRoute = require("./routes/answerRoute");
const resultRoutes = require("./routes/resultRoute");
const { authenticate } = require("./middleware/authenticate");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/quizzes", authenticate, quizRoute);
app.use("/api/quizzes/:quizId/questions", authenticate, questionRoute);
app.use("/api/questions/:questionId/answers", authenticate, answerRoute);
app.use("/api", authenticate, resultRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});

module.exports = app;
