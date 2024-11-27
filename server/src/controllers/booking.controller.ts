import { Request, Response } from "express";
import Booking from "../models/booking.model";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { barberId, customerName, startDate, endDate, serviceId } = req.body;

    const newBooking = new Booking({
      barberId,
      customerName,
      startDate,
      endDate,
      serviceId,
    });

    await newBooking.save();
    return res.status(201).json(newBooking);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find();
    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const getBookingById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.status(200).json(booking);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { barberId, customerName, startDate, endDate, serviceId } = req.body;
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { barberId, customerName, startDate, endDate, serviceId },
      { new: true }
    );
    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.status(200).json(updatedBooking);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const deleteBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    return res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
