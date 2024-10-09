import { Router } from "express";
import authController from "../controllers/auth.controller";
import authMiddleware from "../middleware/auth.middleware";
import UserController from "../controllers/user.controller";
const router = Router();

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created with success
 *       500:
 *         description: Error on server
 */
router.post("/register", authController.register);
/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Login
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login with success
 *       500:
 *         description: Error on server
 */
router.post("/login", authController.login);
/**
 * @swagger
 * /api/user/current:
 *   get:
 *     summary: Get current user
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success - Returns current user details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 66eb13d51505d2070ad07bb1
 *                 name:
 *                   type: string
 *                   example: Israel
 *                 email:
 *                   type: string
 *                   example: israel@gmail.com
 *       401:
 *         description: Unauthorized - Token is invalid or missing
 *       500:
 *         description: Internal server error
 */
router.get("/current", authMiddleware.verifyToken, UserController.currentUser);

export default router;
