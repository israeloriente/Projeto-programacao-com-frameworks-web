import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/user.model";
import userService from "../services/user.service";

class AuthController {
  private jwtSecret: string;

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || "";
  }

  public async register(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body;
    try {
      const result = await userService.registerUser(name, email, password);
      res.json({ token: result.token });
    } catch (error: any) {
      res.status(500).json({ message: error });
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        res.status(400).json({ message: "Usuário não encontrado" });
        return;
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Senha inválida" });
        return;
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "", {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async currentUser(req: Request, res: Response): Promise<void> {
    try {
      res.json(req.user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new AuthController();
