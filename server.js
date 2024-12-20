import express from "express";
import productRoutes from "./route/productRoutes.js";
import orderRoutes from "./route/orderRoutes.js";

const app = express();

app.use(express.json());

app.use("/product", productRoutes);
app.use("/order", orderRoutes);

app.listen(3000, () => {
  console.log("server running at 3000");
});
