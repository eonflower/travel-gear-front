import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { TechGearContextProvider } from "./Components/TechGearContext";
import { PhotographyContextProvider } from "./Components/PhotographyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <TechGearContextProvider>
      <PhotographyContextProvider>
        <App />
        </PhotographyContextProvider>
      </TechGearContextProvider>
    </React.StrictMode>
  </Router>
);
