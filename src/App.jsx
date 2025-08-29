import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import URLShortener from "./Pages/UrlShortener";
import URLExpander from "./Pages/URLExpander";
import QRGenerator from "./Pages/QRGenerator";
import MenuSwitcher from "./Components/MenuSwitcher";
import { useState } from "react";
import TermsOfService from "./Components/TermsOfService";
import MainLayout from "./Pages/MainLayout";
import PrivacyPolicy from "./Components/PolicyPage";
import URLAnalyzer from "./Pages/URLAnalyzer";
// import About from "./Pages/About"; // Contoh halaman tambahan

function App() {
  const [menu, setMenu] = useState("home");
  return (
    <Router>
      <div className="App relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black opacity-95"></div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl"></div>

        <div className="flex flex-col mx-auto">
          <Header />
          <div className="content max-w-5xl mx-auto relative pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<MainLayout setMenu={setMenu} />}>
                <Route path="/shortener" element={<URLShortener />} />
                <Route path="/expander" element={<URLExpander />} />
                <Route path="/analyze" element={<URLAnalyzer />} />
                <Route path="/qr" element={<QRGenerator />} />
              </Route>
              <Route path="/tos" element={<TermsOfService />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
