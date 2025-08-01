import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom"; // <-- fallback for legacy
import "./index.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const match = navigator.userAgent.match(/Chrome\/(\d+)/);
const legacy = match && parseInt(match[1], 10) <= 109;

if (legacy) {
  document.body.classList.add("legacy");

  // 👇 Use ReactDOM.render for older browsers
  ReactDOM.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>,
    document.getElementById("root")
  );
} else {
  // 👇 Use createRoot for modern browsers
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  );
}
