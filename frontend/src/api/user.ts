import { User } from "@/interfaces/User";
import apiClient from "./apiClient";

namespace UserAPI {
  export const login = async (email: string, password: string) => {
    return await apiClient.post("/user/login", { email, password });
  };

  export const register = async (user: User) => {
    return await apiClient.post("/user/register", user);
  };
}

export default UserAPI;
