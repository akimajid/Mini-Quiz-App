const express = require("express");
const quizController = require("../controllers/quizController");
const router = express.Router();

router.get("/", quizController.list);
router.get("/:quizId", quizController.get);
router.post("/", quizController.create);
router.put("/:quizId", quizController.update);
router.delete("/:quizId", quizController.remove);

module.exports = router;
