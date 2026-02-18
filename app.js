import express from "express";
import productRoutes from "./src/routes/productRoutes.js";

const app = express();

app.use(express.json());
app.use("/produtos", productRoutes);

export default app;