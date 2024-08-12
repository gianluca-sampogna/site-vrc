// src/Routes.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/NotFound";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
