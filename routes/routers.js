const { Router } = require("express");
const { Show, User } = require("../models/index");
const { check, validationResult } = require("express-validator");
//
const showRouter = Router();
const userRouter = Router();
//
//showRouter CRUD
showRouter.get("/", async (req, res) => {
  try {
    const findShow = await Show.findAll();
    res.json(findShow);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during GET request" });
  }
});

//
showRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id; //
    const findShow = await Show.findByPk(id);
    res.json(findShow);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during GET ID request" });
  }
});
//
showRouter.get("/genre/:genre", async (req, res) => {
  try {
    const genre = req.params.genre; //
    const findShow = await Show.findAll({ where: { genre: genre } });
    res.json(findShow);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during GET GENRE request" });
  }
});
//
showRouter.post("/", async (req, res) => {
  try {
    const postShow = await Show.create(req.body);
    const findShow = await Show.findAll();
    res.json(findShow); //
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during POST request" });
  }
});
//
showRouter.put(
  "/:id",
  [
    check("available", "Availability cannot be empty field")
      .not()
      .isEmpty()
      .trim(),
    check("available", "Characters should be between 4-25").isLength({
      min: 4,
      max: 25,
    }),
    check("rating", "Rating cannot be empty field").not().isEmpty().trim(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      try {
        const id = req.params.id; //
        const updateShow = await Show.update(req.body, { where: { id: id } });
        const findShow = await Show.findAll();
        res.json(findShow);
      } catch (error) {
        res.status(500).send({ error: "Error ocurred during PUT request" });
      }
    }
  }
);
//
showRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id; //
    const deleteShow = await Show.destroy({ where: { id: id } });
    const findShow = await Show.findAll();
    res.json(findShow);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during DELETE request" });
  }
});
//
//userRouter CRUD
userRouter.get("/", async (req, res) => {
  try {
    const findUser = await User.findAll();
    res.json(findUser);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during GET request" });
  }
});
//
userRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id; //
    const findUser = await User.findByPk(id);
    res.json(findUser);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during GET ID request" });
  }
});
//
userRouter.post("/", async (req, res) => {
  try {
    const postUser = await User.create(req.body);
    const findUser = await User.findAll();
    res.json(findUser); //
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during POST request" });
  }
});
//
userRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id; //
    const updateUser = await User.update(req.body, { where: { id: id } });
    const findUser = await User.findAll();
    res.json(findUser);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during PUT request" });
  }
});
//
userRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id; //
    const deleteUser = await User.destroy({ where: { id: id } });
    const findUser = await User.findAll();
    res.json(findUser);
  } catch (error) {
    res.status(500).send({ error: "Error ocurred during DELETE request" });
  }
});

module.exports = {
  showRouter,
  userRouter,
};
