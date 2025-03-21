import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import "@fontsource/noto-sans/400.css"; // Specify weight
import "@fontsource/noto-sans/400-italic.css"; // Specify weight and style

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
