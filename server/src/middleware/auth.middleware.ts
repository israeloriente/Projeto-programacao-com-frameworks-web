import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../interfaces/jwtPayload.interface";
import { UserModel } from "../models/user.model";

class AuthMiddleware {
  public verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      res.status(401).json({ message: "Autenticação necessária" });
      return;
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || ""
      ) as JwtPayload;
      const user = await UserModel.findById(decoded.id).select(
        "name email _id"
      );
      if (!user) {
        res.status(401).json({ message: "Usuário não encontrado" });
        return;
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(401).json({ message: "Token inválido" });
    }
  };
}

export default new AuthMiddleware();
