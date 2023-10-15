import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalStyles } from "./assets";
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
