import { createRoot } from "react-dom/client";
import { BrowserRouter as ProviderRouter } from "react-router-dom";
import App from "./App";
// import { StrictMode } from "react";

const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);

root.render(
  <ProviderRouter>
    <App />
  </ProviderRouter>
);
