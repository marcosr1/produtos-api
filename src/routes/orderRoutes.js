import { Router } from "express";
import { createOrder, getOrder, getOrderID, updateStatus } from "../controllers/orderController.js";

const router = Router();

router.get("/get", getOrder);
router.get("/:id", getOrderID);

router.post("/", createOrder);

router.patch("/status/:id", updateStatus);

export default router;