import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";

import theme from "themeSettings";

import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
