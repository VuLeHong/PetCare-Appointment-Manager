import express from "express";
import * as appointmentRequestController from "../controllers/appointmentController.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router({ mergeParams: true });

router.post("/", appointmentRequestController.create); //ok
router.get("/", authAdmin, appointmentRequestController.getAll); //ok
router.patch("/:id/status", authAdmin, appointmentRequestController.updateStatus); //front not found
router.delete("/:id", authAdmin, appointmentRequestController.remove); //front not found

export default router;
