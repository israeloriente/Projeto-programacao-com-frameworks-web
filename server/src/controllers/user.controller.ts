import { Request, Response } from "express";

class UserController {
  public async currentUser(req: Request, res: Response): Promise<void> {
    try {
      res.json(req.user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new UserController();
