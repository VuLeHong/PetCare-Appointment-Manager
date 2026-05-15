import express from "express";
import * as petController from "../controllers/petController.js";
import authAdmin from "../middleware/authAdmin.js";
import upload from "../middleware/uploadImage.js";

const router = express.Router({ mergeParams: true });

router.post("/", authAdmin, upload.single("image"), petController.create);//frontend dont use pet image, else ok
router.get("/", authAdmin, petController.getAllByCustomer);//ok
router.get("/:id", authAdmin, petController.getById);//ok
router.patch("/:id", authAdmin, upload.single("image"), petController.update);//frontend dont use
router.delete("/:id", authAdmin, petController.remove);//frontend dont use

export default router;
