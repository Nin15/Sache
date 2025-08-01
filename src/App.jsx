import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Chvensshesaxeb from "./components/Chvensshesaxeb";
import Tanamshromlebi from "./components/Tanamshromlebi";

function App() {
  useEffect(() => {
    const match = navigator.userAgent.match(/Chrome\/(\d+)/);
    const version = match ? parseInt(match[1], 10) : null;

    if (version && version < 70) {
      alert(
        "თქვენ იყენებთ ქრომის ძველ ვერსიას. ვებსაიტი იმუშავებს, ხოლო სასურველი გამოცდილებისთვის, გთხოვთ, განაახლეთ ქრომი. "
      );
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/About/Tanamshromlebi" element={<Tanamshromlebi />} />
      <Route path="/About/Chvensshesaxeb" element={<Chvensshesaxeb />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
