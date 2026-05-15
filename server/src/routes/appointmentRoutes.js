import express from "express";
import * as appointmentRequestController from "../controllers/appointmentController.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router({ mergeParams: true });

router.post("/", appointmentRequestController.create);//ok
router.get("/", authAdmin, appointmentRequestController.getAll); //ok
router.patch("/:id/status", authAdmin, appointmentRequestController.updateStatus); //ok
router.delete("/:id", authAdmin, appointmentRequestController.remove);//frontend dont use

export default router;
