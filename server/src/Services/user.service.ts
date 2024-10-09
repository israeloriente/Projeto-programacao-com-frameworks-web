import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model"; // Seu modelo de usuário

class AuthService {
  private jwtSecret: string = process.env.JWT_SECRET || "your_jwt_secret_key";

  public async registerUser(
    name: string,
    email: string,
    password: string
  ): Promise<{ token: string }> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, this.jwtSecret, {
      expiresIn: "1h",
    });
    return { token };
  }
}

export default new AuthService();
