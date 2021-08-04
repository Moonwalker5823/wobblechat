const express = require("express");
const messageController = require("../controllers/message.js");
const router = express.Router();

//create new message where body comes from websocket
router.post("/", messageController.postMessage, (req, res) => {
  return res.status(200).json(res.locals.message);
  // const dateCreated = new Date();
  // const { questionId, content } = req.body;
  // const params = [dateCreated, questionId, content];

});

router.get("/:id", messageController.getMessages, (req, res) => {
  return res.status(200).json(res.locals.messages);
});

module.exports = router;

