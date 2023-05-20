import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import LangProvider from "./context";

root.render(
  <LangProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LangProvider>
);
