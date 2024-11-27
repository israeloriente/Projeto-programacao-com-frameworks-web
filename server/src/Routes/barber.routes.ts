import { Router } from "express";
import barberController from "../controllers/barber.controller";

const router = Router();

/**
 * @swagger
 * /api/barber:
 *   post:
 *     summary: Create a new barber
 *     tags:
 *       - Barbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Israel Nunes"
 *               email:
 *                 type: string
 *                 example: "israelnunesoriente@gmail.com"
 *               phone:
 *                 type: string
 *                 example: "83999040900"
 *     responses:
 *       201:
 *         description: Barber created successfully
 *       400:
 *         description: Validation error or bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", barberController.createBarber);
/**
 * @swagger
 * /api/barber:
 *   get:
 *     summary: List all barbers
 *     tags:
 *       - Barbers
 *     responses:
 *       200:
 *         description: A list of barbers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "66eb13d51505d2070ad07bb1"
 *                   name:
 *                     type: string
 *                     example: "Israel Nunes"
 *                   email:
 *                     type: string
 *                     example: "israelnunesoriente@gmail.com"
 *                   phone:
 *                     type: string
 *                     example: "83999040900"
 *       500:
 *         description: Internal server error
 */
router.get("/", barberController.getBarbers);
/**
 * @swagger
 * /api/barber/{id}:
 *   get:
 *     summary: Get a barber by ID
 *     tags:
 *       - Barbers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "66eb13d51505d2070ad07bb1"
 *         description: Barber ID
 *     responses:
 *       200:
 *         description: Barber details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "66eb13d51505d2070ad07bb1"
 *                 name:
 *                   type: string
 *                   example: "Israel Nunes"
 *                 email:
 *                   type: string
 *                   example: "israelnunesoriente@gmail.com"
 *                 phone:
 *                   type: string
 *                   example: "83999040900"
 *       404:
 *         description: Barber not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", barberController.getBarberById);
/**
 * @swagger
 * /api/barber/{id}:
 *   put:
 *     summary: Update a barber by ID
 *     tags:
 *       - Barbers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "66eb13d51505d2070ad07bb1"
 *         description: Barber ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "João da Silva"
 *               email:
 *                 type: string
 *                 example: "joaodasilva@gmail.com"
 *               phone:
 *                 type: string
 *                 example: "83988887777"
 *     responses:
 *       200:
 *         description: Barber updated successfully
 *       404:
 *         description: Barber not found
 *       400:
 *         description: Validation error or bad request
 *       500:
 *         description: Internal server error
 */
router.put("/:id", barberController.updateBarber);
/**
 * @swagger
 * /api/barber/{id}:
 *   delete:
 *     summary: Delete a barber by ID
 *     tags:
 *       - Barbers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "66eb13d51505d2070ad07bb1"
 *         description: Barber ID
 *     responses:
 *       200:
 *         description: Barber deleted successfully
 *       404:
 *         description: Barber not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", barberController.deleteBarber);

export default router;
