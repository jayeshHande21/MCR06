import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";

import {
  CusinsContext,
  CusinsContextProvider
} from "./Src/Context/CusinsContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { CusinsContext };

root.render(
  <StrictMode>
    <Router>
      <CusinsContextProvider>
        <App />
      </CusinsContextProvider>
    </Router>
  </StrictMode>
);
