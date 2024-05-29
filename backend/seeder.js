import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import products from "./data/products.js";
import users from "./data/users.js";
import Product from "./models/product.model.js";
import Order from "./models/order.model.js";
import User from "./models/user.model.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createUSer = await User.insertMany(users);
    const adminUser = createUSer[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    console.log(`Data Imported`.green.inverse);

    await Product.insertMany(sampleProducts);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log(`Data Destroyed`.green.inverse);
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
