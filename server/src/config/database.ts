import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class Database {
  private connectionString: string;

  constructor() {
    this.connectionString =
      process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";
  }

  public connect(): void {
    mongoose
      .connect(this.connectionString, {})
      .then(() => {
        console.log("Database connection established");
      })
      .catch((err) => {
        console.error("Database connection error:", err);
      });
  }
}

export default new Database();
