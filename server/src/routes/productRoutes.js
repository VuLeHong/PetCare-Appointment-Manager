import express from "express";
import * as productController from "../controllers/productController.js";
import authAdmin from "../middleware/authAdmin.js";
import upload from "../middleware/uploadImage.js";

const router = express.Router();

router.post("/", authAdmin, upload.single("image"), productController.create);
router.get("/", productController.getAll);
router.get("/category/:category", productController.getByCategory);
router.get("/:id", authAdmin, productController.getById);
router.put("/:id", authAdmin, upload.single("image"), productController.update);
router.delete("/:id", authAdmin, productController.remove);

export default router;
