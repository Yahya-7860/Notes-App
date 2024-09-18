const { notesRouter } = require("./notes");
const { registerRouter } = require("./register");
const { loginRouter } = require("./login");
const { userDltRouter } = require("./userDelete");

module.exports = {
  notesRouter,
  registerRouter,
  loginRouter,
  userDltRouter,
};
