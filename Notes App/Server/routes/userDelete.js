const { handleUserDelete } = require("../controller");
const userDltRouter = require("express").Router();

userDltRouter.delete("/delete", handleUserDelete);

module.exports = {
  userDltRouter,
};
