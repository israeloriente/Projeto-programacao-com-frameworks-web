import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthService } from "../services/auth.service";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (!AuthService.isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
