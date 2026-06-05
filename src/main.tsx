import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import ProjectDetails from "./components/ProjectDetails";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projeto/:id" element={<ProjectDetails />} />
    </Routes>
  </HashRouter>
);