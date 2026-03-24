import express from "express";
import * as medicalRecordController from "../controllers/medicalController.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router({ mergeParams: true });

router.post("/", authAdmin, medicalRecordController.create);
router.get("/", authAdmin, medicalRecordController.getAllByPet);
router.patch("/:id", authAdmin, medicalRecordController.update);
router.delete("/:id", authAdmin, medicalRecordController.remove);

export default router;
