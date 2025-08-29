import React, { useState } from "react";
import { Link2, Download } from "lucide-react";

function QRGenerator() {
  const [url, setUrl] = useState("");
  const [name, setName] = useState(""); // ✅ state untuk nama file
  const [size, setSize] = useState(300);
  const [qrBlobUrl, setQrBlobUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setQrBlobUrl(null);

    try {
      const res = await fetch(
        `http://localhost:8080/qr?url=${encodeURIComponent(url)}&size=1000`
      );

      if (!res.ok) throw new Error("Gagal generate QR");

      const blob = await res.blob();
      const imgUrl = URL.createObjectURL(blob);
      setQrBlobUrl(imgUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-[80vh] px-6 py-12">
      <div className="relative bg-gray-900/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-xl border border-gray-800 z-10">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-orange-500">
          DPrast QR Generator
        </h1>
        <p className="text-center text-gray-300 mb-8">
          Buat QR Code dari link yang kamu masukkan
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Masukkan URL..."
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
            />
            <Link2 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // ✅ ubah state name
              placeholder="Masukkan Nama File..."
              required
              className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/30 text-lg"
          >
            Generate QR
          </button>
        </form>

        {qrBlobUrl && (
          <div className="mt-8 text-center bg-gray-800 p-4 rounded-xl border border-gray-700">
            <p className="text-gray-300 mb-3">QR Code kamu siap!</p>
            <img
              src={qrBlobUrl}
              alt="QR Code"
              className="mx-auto rounded-lg border border-gray-700"
            />
            <a
              href={qrBlobUrl}
              download={`${name || "qrcode"}.png`} // ✅ nama file sesuai input
              className="mt-4 inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition text-orange-400"
            >
              <Download className="w-4 h-4" /> Download
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default QRGenerator;
