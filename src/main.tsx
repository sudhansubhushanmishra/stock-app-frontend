import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import type { Router } from "@tanstack/react-router";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof Router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
