import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/user.model.js";

//protect routes
 const protect = asyncHandler(async (req, res, next) => {
  let token;

  //read the jwt from cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error(`Not autherized,token failed`);
    }
  } else {
    res.status(401);
    throw new Error(`Not autherized, no token`);
  }
});

//admin middleware

const admin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error(`Not autherized admin`);
  }
};

export { protect, admin };
