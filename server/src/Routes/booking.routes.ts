// src/routes/booking.routes.ts
import { Router } from "express";
import * as bookingController from "../controllers/booking.controller";

const router = Router();

/**
 * @swagger
 * /api/booking:
 *   post:
 *     summary: Create a new booking
 *     tags:
 *       - Bookings
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               barberId:
 *                 type: string
 *                 example: "66eb13d51505d2070ad07bb1"
 *               customerName:
 *                 type: string
 *                 example: "João da Silva"
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-11-30T15:30:00Z"
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-11-30T16:00:00Z"
 *               serviceId:
 *                 type: string
 *                 example: "60b8f224d3d7e1c3cdd5c8b2"  # ID do serviço
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Validation error or bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", bookingController.createBooking);
/**
 * @swagger
 * /api/booking:
 *   get:
 *     summary: List all bookings
 *     tags:
 *       - Bookings
 *     responses:
 *       200:
 *         description: List of all bookings
 *       500:
 *         description: Internal server error
 */
router.get("/", bookingController.getBookings);
/**
 * @swagger
 * /api/booking/{id}:
 *   get:
 *     summary: Get a booking by ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The booking ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking found
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", bookingController.getBookingById);
/**
 * @swagger
 * /api/booking/{id}:
 *   put:
 *     summary: Update a booking by ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The booking ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               barberId:
 *                 type: string
 *                 example: "66eb13d51505d2070ad07bb1"
 *               customerName:
 *                 type: string
 *                 example: "João da Silva"
 *               startDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-11-30T15:30:00Z"
 *               endDate:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-11-30T16:00:00Z"
 *               serviceId:
 *                 type: string
 *                 example: "60b8f224d3d7e1c3cdd5c8b2"  # ID do serviço
 *     responses:
 *       200:
 *         description: Booking updated successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", bookingController.updateBooking);
/**
 * @swagger
 * /api/booking/{id}:
 *   delete:
 *     summary: Delete a booking by ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The booking ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", bookingController.deleteBooking);

export default router;
