const express = require("express");
const questionController = require("../controllers/questionController");
const router = express.Router({ mergeParams: true });

router.get("/:quizId/questions", questionController.list);
router.get("/:quizId/questions/:questionId", questionController.get);
router.post("/:quizId/questions", questionController.create);
router.put("/:quizId/questions/:questionId", questionController.update);
router.delete("/:quizId/questions/:questionId", questionController.remove);

module.exports = router;
