import express from "express";
import * as productController from "../controllers/productController.js";
import authAdmin from "../middleware/authAdmin.js";
import upload from "../middleware/uploadImage.js";

const router = express.Router();

router.post("/", authAdmin, upload.single("image"), productController.create);//ok
router.get("/", productController.getAll);//ok
router.get("/category/:category", productController.getByCategory);//frontend dont use
router.get("/:id", productController.getById);//ok
router.put("/:id", authAdmin, upload.single("image"), productController.update);//ok
router.delete("/:id", authAdmin, productController.remove);//ok

export default router;
