import { UserModel, IUser } from "../models/user.model";

class UserService {
  public async createUser(userData: IUser): Promise<IUser> {
    const user = new UserModel(userData);
    return await user.save();
  }

  // public async getUserByEmail(email: string): Promise<IUser | null> {
  //   return await UserModel.findOne({ email });
  // }
}

export default new UserService();
