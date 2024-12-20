import express from "express";
import { productController } from "../controller/productController.js";

const productRoutes = express.Router();

productRoutes.post("/create", productController.createProduct);
export default productRoutes;
