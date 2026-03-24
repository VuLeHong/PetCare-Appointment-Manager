import express from "express";
import * as controller from "../controllers/customerController.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

router.post("/", authAdmin, controller.create);
router.get("/", authAdmin, controller.getAll);
router.get("/:id", authAdmin, controller.getById);
router.put("/:id", authAdmin, controller.update);
router.delete("/:id", authAdmin, controller.remove);

export default router;
