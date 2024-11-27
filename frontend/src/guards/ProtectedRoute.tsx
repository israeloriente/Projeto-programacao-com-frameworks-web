import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthService } from "../services/auth.service";
import { Alert } from "../components/global/Alert";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (!AuthService.isAuthenticated()) {
    Alert.showToast("You do not have permission to access this page.", "error");
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
