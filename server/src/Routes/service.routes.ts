import { Router } from "express";
import * as serviceController from "../controllers/service.controller";

const router = Router();

/**
 * @swagger
 * /api/service:
 *   post:
 *     summary: Create a new service
 *     tags:
 *       - Services
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Corte de cabelo"
 *               price:
 *                 type: number
 *                 example: 50
 *     responses:
 *       201:
 *         description: Service created successfully
 *       500:
 *         description: Internal server error
 */
router.post("/", serviceController.createService);
/**
 * @swagger
 * /api/service:
 *   get:
 *     summary: List all services
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: List of all services
 *       500:
 *         description: Internal server error
 */
router.get("/", serviceController.getServices);
/**
 * @swagger
 * /api/service/{id}:
 *   get:
 *     summary: Get a service by ID
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The service ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Service found
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", serviceController.getServiceById);
/**
 * @swagger
 * /api/service/{id}:
 *   put:
 *     summary: Update a service by ID
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The service ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Corte de cabelo"
 *               price:
 *                 type: number
 *                 example: 50
 *     responses:
 *       200:
 *         description: Service updated successfully
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", serviceController.updateService);
/**
 * @swagger
 * /api/service/{id}:
 *   delete:
 *     summary: Delete a service by ID
 *     tags:
 *       - Services
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The service ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Service deleted successfully
 *       404:
 *         description: Service not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", serviceController.deleteService);

export default router;
