import React, { useState } from "react";
import { Copy, Link2, Wand2 } from "lucide-react";

const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [custom, setCustom] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, alias: custom }),
      });

      const data = await res.json();
      if (res.ok && data.short_url) {
        setResult(data.short_url);
        setError(null); // clear error if any
      } else {
        setError(data.error || "Terjadi kesalahan.");
        setResult(null); // clear result if any
      }
      setCopied(false);
    } catch (err) {
    setError("Gagal terhubung ke server.");
    setResult(null);
  }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex justify-center items-center min-h-[80vh] px-6 py-12">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-black opacity-95 -z-10"></div>
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl -z-10"></div>

      {/* Card */}
      <div className="UrlShortener relative bg-gray-900/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-xl border border-gray-800 z-10">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-orange-500">
          DPrast Shortener
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Ubah link panjang jadi{" "}
          <span className="font-semibold text-orange-400">lebih ringkas</span>,
          mudah diingat, dan siap dibagikan 🚀
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Masukkan URL asli..."
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
            />
            <Link2 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="text"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder="Custom alias (opsional)"
              className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
            />
            <Wand2 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30 text-lg"
          >
            Perpendek Link
          </button>
        </form>

        {result && (
          <div className="mt-8 text-center bg-gray-800 p-4 rounded-xl border border-gray-700">
            <p className="text-gray-300 mb-3">Link Anda berhasil dibuat 🎉</p>
            <div className="flex items-center justify-between gap-3 bg-gray-900 px-4 py-3 rounded-lg">
              <a
                href={result}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 font-medium break-all hover:underline"
              >
                {result}
              </a>
              <button
                onClick={handleCopy}
                className="text-sm flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md transition"
              >
                <Copy className="w-4 h-4" />
                {copied ? "Disalin!" : "Salin"}
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-8 text-center bg-red-900 border border-red-700 text-red-300 p-4 rounded-xl">
            <p className="font-medium">❌ {error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlShortener;
