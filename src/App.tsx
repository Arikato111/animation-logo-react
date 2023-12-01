import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Clock from "./pages/Clock";
import Home from "./pages/Home";
import PhpSpa from "./pages/PhpSpa";
import Nexit from "./pages/Nexit";
import Time from "./pages/Time";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/php-spa" element={<PhpSpa />} />
        <Route path="/nexit" element={<Nexit />} />
        <Route path="/time" element={<Time />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
