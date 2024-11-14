const quizService = require("../services/quizService");

async function create(req, res) {
  try {
    const quiz = await quizService.createQuiz(req.body, req.user.userId);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function list(req, res) {
  const quizzes = await quizService.getQuizzes();
  res.json(quizzes);
}

async function get(req, res) {
  const quiz = await quizService.getQuizById(req.params.quizId);
  res.json(quiz);
}

async function update(req, res) {
  const quiz = await quizService.updateQuiz(req.params.quizId, req.body);
  res.json(quiz);
}

async function remove(req, res) {
  await quizService.deleteQuiz(req.params.quizId);
  res.status(200).json({ message: "Quiz deleted successfully" });
}

module.exports = { create, list, get, update, remove };
