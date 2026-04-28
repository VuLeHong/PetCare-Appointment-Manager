import express from "express";
import * as petController from "../controllers/petController.js";
import authAdmin from "../middleware/authAdmin.js";
import upload from "../middleware/uploadImage.js";

const router = express.Router({ mergeParams: true });

router.post("/", authAdmin, upload.single("image"), petController.create);
router.get("/", authAdmin, petController.getAllByCustomer);
router.get("/:id", authAdmin, petController.getById);
router.patch("/:id", authAdmin, petController.update);
router.delete("/:id", authAdmin, petController.remove);

export default router;
