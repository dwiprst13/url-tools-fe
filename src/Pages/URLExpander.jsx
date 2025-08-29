import React from "react";
import { useState } from "react";
import { Copy, Link2, Wand2 } from "lucide-react";

function URLExpander() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  //   const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, action: "expand"}),
      });

      const data = await res.json();
      if (res.ok && data.long_url) {
        setResult(data.long_url);
      } else {
        // setError(data.error || "Terjadi kesalahan.");
      }
      setCopied(false);
      // } catch (err) {
    } catch (err) {
      //   setError("Gagal terhubung ke server.");
      //   setResult(null);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative flex justify-center items-center min-h-[80vh] px-6 py-12">
      <div className="UrlShortener relative bg-gray-900/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-xl border border-gray-800 z-10">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-orange-500">
          DPrast Expander
        </h1>
        <p className="text-center text-gray-300">
          Cek link pendek dan temukan{" "}
          <span className="font-semibold text-orange-400">tujuannya</span>{" "}
          sebelum mengklik! 🔍
        </p>
        <p className="text-gray-300 mb-8">
          Hanya bisa mengecek link pendek dari{" "}
          <span className="font-semibold text-orange-400">
            https://s.dprast.id
          </span>
          .
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Masukkan URL pendek..."
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
            />
            <Link2 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button
            type="submit"
            className="bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30 text-lg"
          >
            Perpanjang Link
          </button>
        </form>

        {result && (
          <div className="mt-8 text-center bg-gray-800 p-4 rounded-xl border border-gray-700">
            <p className="text-gray-300 mb-3">
              Link anda menuju ke link berikut
            </p>
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
      </div>
    </div>
  );
}

export default URLExpander;
