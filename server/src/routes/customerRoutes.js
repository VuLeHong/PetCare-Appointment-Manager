import express from "express";
import * as controller from "../controllers/customerController.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

router.post("/", authAdmin, controller.create); //ok
router.get("/", authAdmin, controller.getAll); //ok
router.get("/:id", authAdmin, controller.getById); //front not found
router.put("/:id", authAdmin, controller.update); //front not found
router.delete("/:id", authAdmin, controller.remove); //front not found

export default router;
