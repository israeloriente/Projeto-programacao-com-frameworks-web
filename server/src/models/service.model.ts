import mongoose, { Schema } from "mongoose";
import { IService } from "../interfaces/service.interface";

const serviceSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Service = mongoose.model<IService>("Service", serviceSchema);

export default Service;
