import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountProvider } from "./countContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CountProvider>
    <App />
  </CountProvider>
);
