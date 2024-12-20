import express from "express";
import { orderController } from "../controller/orderController.js";

const orderRoutes = express.Router();
orderRoutes.post("/create", orderController.createOrder);
export default orderRoutes;
