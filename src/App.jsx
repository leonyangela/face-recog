import "./styles/index.css";
import { Route, Routes } from "react-router";

import HomePages from "./pages/home/home.pages";
import LoginPages from "./pages/login/login.pages";

import ProtectedRoute from "./components/auth/protected-routes.component";
import PublicRoutes from "./components/auth/public-routes.component";
import FaceDetectionPages from "./pages/face-detection/face-detection.pages";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePages />
          </ProtectedRoute>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePages />
          </ProtectedRoute>
        }
      />

      <Route
        path="/sign-in"
        element={
          <PublicRoutes>
            <LoginPages />
          </PublicRoutes>
        }
      />
      <Route
        path="/sign-up"
        element={
          <PublicRoutes>
            <LoginPages />
          </PublicRoutes>
        }
      />

      <Route
        path="/face-detection"
        element={
          <ProtectedRoute>
            <FaceDetectionPages />
          </ProtectedRoute>
        }
      />
      
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <HomePages />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
