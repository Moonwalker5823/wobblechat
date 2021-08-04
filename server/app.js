const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

//import routers
const debugRouter = require("./routers/debug.js");
const userRouter = require("./routers/user.js");
const globalErrorHandler = require("./routers/errors");
const questionRouter = require("./routers/question.js");
const messageRouter = require("./routers/message.js");

//parsing request body
app.use(express.json());
app.use(cookieParser());
if (process.env.NODE_ENV === "development") app.use(debugRouter);

app.get("/api/hello", (req, res) => {
  res.status(200).json({ hello: "world" });
});

app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/messages", messageRouter);

app.use(globalErrorHandler);

const port = 3000;
const server = app.listen(3000, () => console.log(`Listening on port ${port}`));

module.exports = {
  server,
  app
};