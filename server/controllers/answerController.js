const answerService = require("../services/answerService");

async function create(req, res) {
  try {
    const answer = await answerService.createAnswer(
      req.params.questionId,
      req.body
    );
    res.status(201).json(answer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function list(req, res) {
  try {
    const answers = await answerService.getAnswersByQuestionId(
      req.params.questionId
    );
    res.json(answers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function get(req, res) {
  try {
    const answer = await answerService.getAnswerById(req.params.answerId);
    res.json(answer);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    const answer = await answerService.updateAnswer(
      req.params.answerId,
      req.body
    );
    res.status(200).json({ message: "Update Answer Successfully", answer });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    await answerService.deleteAnswer(req.params.answerId);
    res.status(200).json({ message: "Delete Answer Successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { create, list, get, update, remove };
