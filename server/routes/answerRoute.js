const express = require("express");
const answerController = require("../controllers/answerController");
const router = express.Router({ mergeParams: true });

router.get("/", answerController.list);
router.get("/:answerId", answerController.get);
router.post("/", answerController.create);
router.put("/:answerId", answerController.update);
router.delete("/:answerId", answerController.remove);

module.exports = router;
