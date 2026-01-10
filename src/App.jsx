import { Route, Routes } from "react-router";
import "./App.css";
import HomePages from "./pages/home/home.pages";
import LoginPages from "./pages/login/login.pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/home" element={<HomePages />} />
      <Route path="/sign-in" element={<LoginPages />} />
      <Route path="/sign-up" element={<LoginPages />} />
      
    </Routes>
  );
}

export default App;
