const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
//@desc Register a user
// @route  POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    throw new Error("User already registered!");
  }

  // Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password", hashedPassword);
  res.json({ message: "Register the user" });
});

//@desc Login  user
// @route  POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});

//@desc   user info
// @route  POST /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User Information" });
  console.log("This is one the besr ");
});

module.exports = { registerUser, loginUser, currentUser };
