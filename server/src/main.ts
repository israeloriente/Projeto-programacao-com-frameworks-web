import cors from "cors";
import express from "express";
import userRoutes from "./routes/user.routes";
import barberRoutes from "./routes/barber.routes";
import bookingRoutes from "./routes/booking.routes";
import serviceRoutes from "./routes/service.routes";
import Database from "./config/database";
import { incBaseUrl } from "./utils/url";
import Swagger from "./config/swagger";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    Database.connect();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));
    Swagger.setup(this.app);
  }

  private routes(): void {
    this.app.use(incBaseUrl("/user"), userRoutes);
    this.app.use(incBaseUrl("/barber"), barberRoutes);
    this.app.use(incBaseUrl("/booking"), bookingRoutes);
    this.app.use(incBaseUrl("/service"), serviceRoutes);
  }
}

export default new App().app;
