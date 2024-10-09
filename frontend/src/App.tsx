import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProtectedRoute from "./guards/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

document.documentElement.style.setProperty(
  "--screen-width",
  `${window.innerWidth}px`
);
document.documentElement.style.setProperty(
  "--screen-height",
  `${window.innerHeight}px`
);
window.addEventListener("resize", () => {
  document.documentElement.style.setProperty(
    "--screen-width",
    `${window.innerWidth}px`
  );
  document.documentElement.style.setProperty(
    "--screen-height",
    `${window.innerHeight}px`
  );
});
export default App;
