import express from "express";
import upload from "../middleware/uploadImage.js";
import { uploadImage } from "../controllers/uploadImageController.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

router.post("/image", authAdmin, upload.single("image"), uploadImage);

export default router;
