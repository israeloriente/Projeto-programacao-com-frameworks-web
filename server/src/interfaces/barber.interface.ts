import { Document } from "mongoose";

export interface IBarber extends Document {
  name: string;
  experience: number;
  available?: boolean;
}
