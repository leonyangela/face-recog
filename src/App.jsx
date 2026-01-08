import { Route, Routes } from "react-router";
import "./App.css";
import HomePages from "./pages/home/home.pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/home" element={<HomePages />} />
    </Routes>
  );
}

export default App;
