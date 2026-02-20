import { Router } from "express";
import { getMenu } from "../contollers/menuController.js";

const router = Router();

router.get("/menu", getMenu);

export default router;