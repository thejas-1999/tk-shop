import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/error.middleware.js";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";
dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Database is connected`);
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
