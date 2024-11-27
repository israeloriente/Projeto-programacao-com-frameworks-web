import mongoose, { Schema } from "mongoose";
import { IBarber } from "../interfaces/barber.interface";

const BarberSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    experience: { type: Number, min: 0 },
    available: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const BarberModel = mongoose.model<IBarber>("barber", BarberSchema);
