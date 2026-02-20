import { Router } from "express";
import { createProduct, getProducts, updateProduct, deleteProduct, updateName, updatePreco, updateImage, updateAtivo, previewPedido, updateTipo } 
from "../contollers/productController.js";

const router = Router();

router.post("/", createProduct);
router.post("/previewPedido", previewPedido);

router.get("/", getProducts);

router.put("/:id", updateProduct);
router.patch("/:id/nome", updateName);
router.patch("/:id/preco", updatePreco);
router.patch("/:id/imagem", updateImage);
router.patch("/:id/ativo", updateAtivo);
router.patch("/:id/tipo", updateTipo);

router.delete("/:id", deleteProduct);

export default router;