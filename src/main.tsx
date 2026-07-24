import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "./components/Button";
import Badge from "./components/Badge";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button variant="primary" size="lg">
      fsjds
      <p>qsdqs</p>
    </Button>
    <Badge color="#80d71e" size="lg" texte="Html" variant="primary" />
    <Badge size="lg" texte="Html" variant="primary" />
    <Badge color="#845476" size="lg" texte="Html" variant="primary" />
  </StrictMode>,
);
