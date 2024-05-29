import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

app.get("/", (req, res) => {
  res.send(`Hello express`);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

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
