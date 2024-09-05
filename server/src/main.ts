import cors from "cors";
import express from "express";
import userRoutes from "./routes/user.routes";
import helloWorld from "./routes/helloworld";
import Database from "./config/database";
import { incBaseUrl } from "./utils/url";

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
  }

  private routes(): void {
    this.app.use(incBaseUrl("/user"), userRoutes);
    this.app.use(incBaseUrl("/hello"), helloWorld);
  }
}

export default new App().app;
