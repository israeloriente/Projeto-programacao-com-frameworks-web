import express, { Request, Response } from "express";

const router = express.Router();

// Hello World Example
router.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

export default router;
