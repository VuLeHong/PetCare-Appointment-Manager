import express from "express";
import * as appointmentRequestController from "../controllers/appointmentController.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router({ mergeParams: true });

router.post("/", appointmentRequestController.create);
router.get("/", authAdmin, appointmentRequestController.getAll);
router.patch("/:id", authAdmin, appointmentRequestController.update);
router.delete("/:id", authAdmin, appointmentRequestController.remove);

export default router;
