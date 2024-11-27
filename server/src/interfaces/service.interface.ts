import { Document } from "mongoose";

export interface IService extends Document {
  name: string;
  price: number;
}
