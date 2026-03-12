import { Router } from "express";
import { createOrder, getOrder, getOrderID, updateStatus } from "../controllers/orderController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/get", authMiddleware, getOrder);
router.get("/:id", authMiddleware, getOrderID);

router.post("/", createOrder);

router.patch("/status/:id", authMiddleware, updateStatus);

export default router;