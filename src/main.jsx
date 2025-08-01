import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "core-js"; 

const queryClient = new QueryClient();

const match = navigator.userAgent.match(/Chrome\/(\d+)/);
const isLegacy = match && parseInt(match[1], 10) <= 109;

const container = document.getElementById("root");

const app = (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);

if (isLegacy) {
  document.body.classList.add("legacy");
  ReactDOM.render(app, container);
} else {
  createRoot(container).render(app);
}
