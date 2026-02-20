import express from "express";
import productRoutes from "./src/routes/productRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";
import menuRoutes from "./src/routes/menuRoutes.js";
import cors from 'cors';

const app = express();

app.use(cors()); 
app.use(express.json());
app.use("/produtos", productRoutes);
app.use("/order", orderRoutes);
app.use(menuRoutes);

export default app;