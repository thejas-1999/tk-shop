import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

//@desc Auth user & get token
//@route POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    //token
    generateToken(res,user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(402);
    throw new Error(`Invalid email or password`);
  }
});

//@desc Register user
//@route POST api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error(`User already exist`);
  }
  const user = await User.create({ name, email, password });
  if (user) {
    generateToken(res,user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error(`Invalid user data`);
  }
});

//@desc Logout user /clear cookie
//@route POST api/users/logout
//@access Private
const logOutUser = asyncHandler((req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: `Logout successfully` });
});

//@desc Get user profile
//@route GET api/users/profile
//@access Private
const getUserProfile = asyncHandler((req, res) => {
  res.send("get Profile");
});

//@desc Update  user profile
//@route PUT api/users/profile
//@access Private
const updateUserProfile = asyncHandler((req, res) => {
  res.send("update Profile");
});

//@desc Get users
//@route GET api/users
//@access Private/admin
const getUser = asyncHandler((req, res) => {
  res.send("get all users");
});

//@desc Get users by  id
//@route GET api/users/:id
//@access Private/admin
const getUserById = asyncHandler((req, res) => {
  res.send("get  user");
});

//@desc Delete users
//@route Delete api/users/:id
//@access Private/admin
const deleteUser = asyncHandler((req, res) => {
  res.send("Delete  user");
});

//@desc Update  user profile
//@route PUT api/users/:id
//@access Private/admin
const updateUser = asyncHandler((req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
  getUserById,
  deleteUser,
  getUser,
  updateUser,
};
