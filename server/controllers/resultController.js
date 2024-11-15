const resultService = require("../services/resultService");

async function submit(req, res) {
  try {
    const result = await resultService.submitQuiz(
      req.user.userId,
      req.params.quizId,
      req.body.answers
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function listByUser(req, res) {
  try {
    const results = await resultService.getResultsByUserId(req.user.userId);
    res.json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { submit, listByUser };
