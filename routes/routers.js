const { Router } = require("express");
const { Show, User } = require("../models/index");
const { check, validationResult } = require("express-validator");
//
const showRouter = Router();
const userRouter = Router();
//
//showRouter CRUD
showRouter.get("/", async (req, res) => {
  const findShow = await Show.findAll();
  res.json(findShow);
});
//
showRouter.get("/:id", async (req, res) => {
  const id = req.params.id; //
  const findShow = await Show.findByPk(id);
  res.json(findShow);
});
//
showRouter.get("/:genre", async (req, res) => {
  const genre = req.params.genre; //
  const findShow = await Show.findAll({ where: { genre: genre } });
  res.json(findShow);
});
//
showRouter.post("/", async (req, res) => {
  const postShow = await Show.create(req.body);
  const findShow = await Show.findAll();
  res.json(findShow); //
});
//
showRouter.put("/:id", async (req, res) => {
  const id = req.params.id; //
  const updateShow = await Show.update(req.body, { where: { id: id } });
  const findShow = await Show.findAll();
  res.json(findShow);
});
//
showRouter.delete("/:id", async (req, res) => {
  const id = req.params.id; //
  const deleteShow = await Show.destroy({ where: { id: id } });
  const findShow = await Show.findAll();
  res.json(findShow);
});
//
//userRouter CRUD
userRouter.get("/", async (req, res) => {
  const findUser = await User.findAll();
  res.json(findUser);
});
//
userRouter.get("/:id", async (req, res) => {
  const id = req.params.id; //
  const findUser = await User.findByPk(id);
  res.json(findUser);
});
//
userRouter.post("/", async (req, res) => {
  const postUser = await User.create(req.body);
  const findUser = await User.findAll();
  res.json(findUser); //
});
//
userRouter.put("/:id", async (req, res) => {
  const id = req.params.id; //
  const updateUser = await User.update(req.body, { where: { id: id } });
  const findUser = await User.findAll();
  res.json(findUser);
});
//
userRouter.delete("/:id", async (req, res) => {
  const id = req.params.id; //
  const deleteUser = await User.destroy({ where: { id: id } });
  const findUser = await User.findAll();
  res.json(findUser);
});
module.exports = {
  showRouter,
  userRouter,
};
