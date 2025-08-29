import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const menus = [
  { id: "shorten", label: "URL Shortener", path: "/shortener" },
  { id: "expand", label: "URL Expander", path: "/expander" },
  { id: "analyze", label: "URL Analyzer", path: "/analyze" },
  { id: "qr", label: "QR Generator", path: "/qr" },
];

function MenuSwitcher() {
  const [activeMenu, setActiveMenu] = useState("shorten"); // default pertama
  const navigate = useNavigate();
  const location = useLocation();

  // Update activeMenu berdasarkan current path
  useEffect(() => {
    const currentMenu = menus.find((menu) => menu.path === location.pathname);
    if (currentMenu) {
      setActiveMenu(currentMenu.id);
    }
  }, [location.pathname]);

  const handleClick = (id, path) => {
    setActiveMenu(id);
    navigate(path);
  };

  return (
    <div className="my-8">
      <div className="text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Jelajahi <span className="text-orange-600">Fitur Utama</span>
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Semua alat yang Anda butuhkan untuk{" "}
          <span className="font-semibold text-orange-400">
            mengelola dan mengoptimalkan link
          </span>{" "}
          tersedia dalam satu platform. Pilih fitur sesuai kebutuhan Anda
        </p>
      </div>

      <div className="flex justify-center gap-6 bg-gray-900 p-4 rounded-lg shadow-md max-w-4xl mx-auto relative">
        {menus.map(({ id, label, path }) => (
          <motion.button
            key={id}
            onClick={() => handleClick(id, path)}
            className={`relative px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${
              activeMenu === id
                ? "text-white"
                : "text-gray-300 hover:text-orange-400"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeMenu === id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-orange-600 rounded-md z-0"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default MenuSwitcher;
