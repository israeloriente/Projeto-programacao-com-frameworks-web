import { Router } from "express";
import UserController from "../controllers/user.controller";

const router = Router();

router.post("/create", UserController.createUser);
// router.get("/:email", UserController.getUserByEmail);

export default router;