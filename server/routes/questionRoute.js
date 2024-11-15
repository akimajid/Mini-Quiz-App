const express = require("express");
const questionController = require("../controllers/questionController");
const router = express.Router({ mergeParams: true });

router.get("/", questionController.list);
router.get("/:questionId", questionController.get);
router.post("/", questionController.create);
router.put("/:questionId", questionController.update);
router.delete("/:questionId", questionController.remove);

module.exports = router;
