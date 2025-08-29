import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import UrlShortener from "./Pages/UrlShortener";
import Footer from "./Components/Footer";
// import About from "./Pages/About"; // Contoh halaman tambahan

function App() {
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
              <Route path="/shortener" element={<UrlShortener />} />
              {/* <Route path="/about" element={<About />} /> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
