import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./layouts/Header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <header>
    <Navbar/>
   </header>
  </StrictMode>,
);
