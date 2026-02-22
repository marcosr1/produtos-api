import { Router } from "express";
import { createProduct, getProducts, updateProduct, deleteProduct, updateName, updatePreco, updateImage, updateAtivo, previewPedido, updateTipo } 
from "../controllers/productController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/", authMiddleware, createProduct);
router.post("/previewPedido", authMiddleware, previewPedido);

router.get("/", getProducts);

router.put("/:id", authMiddleware, updateProduct);
router.patch("/:id/nome", authMiddleware, updateName);
router.patch("/:id/preco", authMiddleware, updatePreco);
router.patch("/:id/imagem", authMiddleware, updateImage);
router.patch("/:id/ativo", authMiddleware, updateAtivo);
router.patch("/:id/tipo", authMiddleware, updateTipo);

router.delete("/:id", authMiddleware, deleteProduct);

export default router;