import express from "express";

const router = express.Router();

// controllers
import { create, findAll, findOne, updateOne, deleteOne  } from "../controllers/product";


// Create a new product localhost:8000/api/products
router.post("/products", create);

// Retrieve all products  localhost:8000/api/products
router.get("/products", findAll);

// Retrieve a single product with id
router.get("/products/:id", findOne);

// Update a product with id
router.put("/products/:id", updateOne);

// Delete a product with id
router.delete("/products/:id", deleteOne);

module.exports = router;
