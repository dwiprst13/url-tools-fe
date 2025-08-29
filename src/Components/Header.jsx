import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
      const location = useLocation();
      const currentPath = location.pathname;

      // Cek apakah path saat ini adalah salah satu dari halaman Tools
      const isToolsActive =
        currentPath.startsWith("/shortener") ||
        currentPath.startsWith("/expander") ||
        currentPath.startsWith("/qr") ||
        currentPath.startsWith("/analyze");
  return (
    <header className="Header fixed top-0 left-0 w-full h-20 bg-gray-950 text-white shadow-lg z-50">
      <div className="max-w-5xl w-full mx-auto flex justify-between items-center h-full px-6">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-orange-600">DPrast</span> URL Tools
        </h1>
        <nav>
          <ul className="flex gap-8 text-lg font-medium">
            <li>
              <a
                href="/"
                className={`hover:text-orange-400 transition-colors duration-300 ${
                  currentPath === "/" ? "text-orange-400" : ""
                }`}
              >
                Beranda
              </a>
            </li>

            {/* Tools Dropdown */}
            <li className="relative group">
              <div
                className={`cursor-pointer transition-colors duration-300 ${
                  isToolsActive ? "text-orange-400" : "hover:text-orange-400"
                }`}
              >
                Tools
              </div>
              <ul className="absolute left-0 mt-2 w-40 bg-gray-800 text-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <li>
                  <a
                    href="/shortener"
                    className={`block px-4 py-2 transition-colors duration-300 hover:bg-gray-700 ${
                      currentPath === "/shortener" ? "bg-gray-700" : ""
                    }`}
                  >
                    URL Shortener
                  </a>
                </li>
                <li>
                  <a
                    href="/expander"
                    className={`block px-4 py-2 transition-colors duration-300 hover:bg-gray-700 ${
                      currentPath === "/expander" ? "bg-gray-700" : ""
                    }`}
                  >
                    URL Expander
                  </a>
                </li>
                <li>
                  <a
                    href="/qr"
                    className={`block px-4 py-2 transition-colors duration-300 hover:bg-gray-700 ${
                      currentPath === "/qr" ? "bg-gray-700" : ""
                    }`}
                  >
                    URL To QR
                  </a>
                </li>
                <li>
                  <a
                    href="/analyzer"
                    className={`block px-4 py-2 transition-colors duration-300 hover:bg-gray-700 ${
                      currentPath === "/analyzer" ? "bg-gray-700" : ""
                    }`}
                  >
                    URL Analyzer
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="/about"
                className={`hover:text-orange-400 transition-colors duration-300 ${
                  currentPath === "/about" ? "text-orange-400" : ""
                }`}
              >
                Tentang
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
