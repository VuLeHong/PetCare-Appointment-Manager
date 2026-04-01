import express from "express";
import * as productController from "../controllers/productController.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

router.post("/", authAdmin, productController.create);
router.get("/", productController.getAll);
router.get("/category/:category", productController.getByCategory);
router.get("/:id", authAdmin, productController.getById);
router.put("/:id", authAdmin, productController.update);
router.delete("/:id", authAdmin, productController.remove);

export default router;
