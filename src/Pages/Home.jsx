import React from "react";
import { Link } from "react-router-dom";
import { LinkIcon, SearchIcon, BarChart3, Sparkles } from "lucide-react";

function Home() {
  return (
    <div className=" flex flex-col items-center justify-center text-white px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-6xl font-extrabold leading-tight">
            <span className="text-orange-600">DPrast</span>{" "}
            <span className="text-white">URL Tools</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0">
            Kelola link Anda dengan cara yang{" "}
            <span className="font-semibold text-orange-500">lebih pintar</span>.
            Perpendek, perluas, dan analisis performa link dalam satu platform
            yang <span className="font-semibold">cepat</span>,{" "}
            <span className="font-semibold">aman</span>, dan{" "}
            <span className="font-semibold">terpercaya</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/shortener"
              className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30 text-lg font-semibold"
            >
              Coba Gratis 🚀
            </Link>
            <a
              href="#features"
              className="px-6 py-3 rounded-xl border border-orange-500 hover:bg-orange-600/20 transition-all text-lg font-medium"
            >
              Lihat Fitur
            </a>
          </div>
        </div>

        {/* Right Content - Illustration */}
        <div className="relative flex items-center justify-center">
          <div className="w-full md:w-4/5 bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-orange-500 mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" /> Fitur Unggulan
            </h3>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start gap-3">
                <LinkIcon className="w-6 h-6 text-orange-500" />
                <span>
                  <span className="font-semibold text-orange-400">
                    URL Shortener:
                  </span>{" "}
                  Perpendek link panjang jadi lebih ringkas & mudah dibagikan.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <SearchIcon className="w-6 h-6 text-orange-500" />
                <span>
                  <span className="font-semibold text-orange-400">
                    URL Expander:
                  </span>{" "}
                  Buka link pendek & lihat URL asli dengan jelas & aman.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-6 h-6 text-orange-500" />
                <span>
                  <span className="font-semibold text-orange-400">
                    URL Analyzer:
                  </span>{" "}
                  Analisis performa & statistik link untuk strategi pemasaran
                  yang lebih efektif.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative mt-20 text-center max-w-3xl z-10">
        <h2 className="text-3xl font-bold mb-4">
          Tingkatkan Cara Anda{" "}
          <span className="text-orange-600">Mengelola Link</span>
        </h2>
        <p className="text-gray-400 mb-6">
          Dari individu hingga bisnis, semua bisa merasakan kemudahan mengatur,
          memantau, dan mengoptimalkan link untuk hasil yang lebih maksimal.
        </p>
        <Link
          to="/signup"
          className="px-8 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30 text-lg font-semibold"
        >
          Mulai Sekarang
        </Link>
      </div>
    </div>
  );
}

export default Home;
