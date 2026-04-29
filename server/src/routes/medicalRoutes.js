import express from "express";
import * as medicalRecordController from "../controllers/medicalController.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router({ mergeParams: true });

router.post("/", authAdmin, medicalRecordController.create); //ok
router.get("/all", authAdmin, medicalRecordController.getAll); //front not found
router.get("/", authAdmin, medicalRecordController.getAllByPet); //ok
router.patch("/", authAdmin, medicalRecordController.update); //ok
router.delete("/", authAdmin, medicalRecordController.remove); //ok

export default router;
