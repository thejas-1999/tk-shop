import express from "express";
import {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
  getUserById,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();


router.route('/').post(registerUser).get(getUser)
router.post("/login", authUser);
router.post("/logout", logOutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser)


export default routerr;
