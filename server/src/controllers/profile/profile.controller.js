const banUser = require("./banUser.controller");
const closeAccount = require("./closeAccount.controller");
const editAbout = require("./editAbout.controller");
const login = require("./login.controller");
const refresh = require("./refresh.controller");
const register = require("./register.controller");
const signOut = require("./signOut.controller");

module.exports = {
  banUser,
  closeAccount,
  editAbout,
  login,
  refresh,
  register,
  signOut,
};
