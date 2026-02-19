import express from "express";
import productRoutes from "./src/routes/productRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";

const app = express();

app.use(express.json());
app.use("/produtos", productRoutes);
app.use("/order", orderRoutes);

export default app;