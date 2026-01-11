import { Navigate } from "react-router";
import { useAuthStore } from "../../store";

const PublicRoutes = ({ children }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoutes;
