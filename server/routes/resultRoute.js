const express = require("express");
const resultController = require("../controllers/resultController");
const router = express.Router();

router.post("/quizzes/:quizId/submit", resultController.submit);
router.get("/users/:userId/results", resultController.listByUser);

module.exports = router;
