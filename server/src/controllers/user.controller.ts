import { Request, Response } from "express";
import UserService from "../services/user.service";

class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ message: "deu merda" });
    }
  }

  public async getUserByEmail(req: Request, res: Response): Promise<void> {
    // try {
    //   const user = await UserService.getUserByEmail(req.params.email);
    //   if (user) {
    //     res.status(200).json(user);
    //   } else {
    //     res.status(404).json({ message: "User not found" });
    //   }
    // } catch (error: any) {
    //   res.status(500).json({ message: error.message });
    // }
  }
}

export default new UserController();
