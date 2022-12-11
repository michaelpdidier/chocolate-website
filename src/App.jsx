import "./css/App.css";
import "./css/Navbar.css";
import "./css/Hero.css";
// import "./css/Card.css";
import "./css/Store.css";
import "./css/Step.css";
import "./css/Footer.css";
import "./css/Bars.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Process from "./pages/Process";
import Faqs from "./pages/Faqs";
import Bars from "./pages/Bars";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Process />} />
        {/* <Route exact path="/tasting" element={<Process />} /> */}
        <Route exact path="/bars" element={<Bars />} />
        <Route path="/faq" element={<Faqs />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/photos" element={<Photos />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
