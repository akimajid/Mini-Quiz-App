const questionService = require("../services/questionService");

async function create(req, res) {
  try {
    const question = await questionService.createQuestion(
      req.params.quizId,
      req.body
    );
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function list(req, res) {
  try {
    const questions = await questionService.getQuestionsByQuizId(
      req.params.quizId
    );
    res.json(questions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function get(req, res) {
  try {
    const questionId = parseInt(req.params.questionId, 10);

    if (isNaN(questionId)) {
      return res.status(400).json({ error: "Invalid question ID" });
    }

    const question = await questionService.getQuestionById(questionId);

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function update(req, res) {
  try {
    const question = await questionService.updateQuestion(
      req.params.questionId,
      req.body
    );
    res.json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    await questionService.deleteQuestion(req.params.questionId);
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { create, list, get, update, remove };
