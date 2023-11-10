const express = require("express");
const app = express();

app.set("json spaces", 2);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/theatre/shows", showRouter);
app.use("/theatre/users", userRouter);

module.exports = {
  app,
};
