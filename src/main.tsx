import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./layouts/Header";
import Hero from "./layouts/Hero";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar/>
    <main className="mx-auto max-w-7xl px-5">
      <Hero/>
    </main>
  </StrictMode>,
);
