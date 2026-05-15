import express from "express";
import * as controller from "../controllers/customerController.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

router.post("/", authAdmin, controller.create);//ok
router.get("/", authAdmin, controller.getAll);//ok
router.get("/:id", authAdmin, controller.getById);//ok
router.put("/:id", authAdmin, controller.update);////frontend dont use
router.delete("/:id", authAdmin, controller.remove);////frontend dont use

export default router;
