import { Schema, model } from "mongoose";
import { IBooking } from "../interfaces/booking.interface";

const bookingSchema = new Schema<IBooking>(
  {
    barberId: { type: String, required: true },
    customerName: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    serviceId: { type: String, required: true },
  },
  { timestamps: true }
);

const Booking = model<IBooking>("Booking", bookingSchema);

export default Booking;
