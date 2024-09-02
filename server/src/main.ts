import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import helloworld from "../src/Routes/helloworld";
import * as utils from "./Utils/url";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(utils.incBaseUrl("/helloworld"), helloworld);

const port = process.env.PORTCONNECT || 3001;

app.listen(port, () => {
  console.log(`Express connected on port ${port}`);
});
