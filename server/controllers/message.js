const pool = require("../db/connect");

const messageController = {};

messageController.getMessages = (req, res, next) => {
  const prevMessages = `SELECT messages.*, questions.url FROM messages INNER JOIN questions ON messages.questionId = questions.id AND questions.id = $1`;
  const params = [req.params.id];
  pool
    .query(prevMessages, params)
    .then((data) => {
      res.locals.messages = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        status: 500,
        message: "Error grabbing messages",
      });
    });
};

messageController.postMessage = (req, res, next) => {
  const dateCreated = new Date();
  const { questionId, content } = req.body;
  const params = [dateCreated, questionId, content];
  const insertMessage =
    "INSERT INTO messages (dateCreated, questionId, content) VALUES ($1,$2,$3) RETURNING *";
  if (!dateCreated || !questionId || !content)
    return next({ status: 401, message: "Invalid message data" });
  pool
    .query(insertMessage, params)
    .then((data) => {
      res.locals.message = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next({
        status: 500,
        message: "Error creating messages",
        error: err,
      });
    });
};

module.exports = messageController;

