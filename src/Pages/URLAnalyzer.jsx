import React from "react";
import { Link2 } from "lucide-react";

function URLAnalyzer() {

    const handleSubmit = async (e) => {
      e.preventDefault();
    }

  return (
    <div className="relative flex justify-center items-center min-h-[80vh] px-6 py-12">
      <div className="UrlShortener relative bg-gray-900/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-xl border border-gray-800 z-10">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-orange-500">
          DPrast Analyzer
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Analisis mendalam tentang URL Anda untuk keamanan dan performa yang
          optimal!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <input
              type="url"
            //   value={url}
            //   onChange={(e) => setUrl(e.target.value)}
              placeholder="Masukkan URL anda..."
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
            />
            <Link2 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30 text-lg"
          >
            Analisis Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default URLAnalyzer;
