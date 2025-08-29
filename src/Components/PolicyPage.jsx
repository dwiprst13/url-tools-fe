import React from "react";

function PrivacyPolicy() {
  return (
    <section className="min-h-screen py-10 px-5 text-justify">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-200 mb-6">
          Privacy Policy (Kebijakan Privasi)
        </h1>
        <p className="text-sm text-gray-300 mb-4">
          Terakhir diperbarui: 29 Agustus 2025
        </p>
        <p className="text-white mb-6">
          Di <span className="font-semibold">DPrast URL Tools</span>, kami
          menghargai dan melindungi privasi Anda. Kebijakan ini menjelaskan
          bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi
          pribadi Anda.
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">
            1. Informasi yang Kami Kumpulkan
          </h2>
          <p className="text-white">
            Kami dapat mengumpulkan informasi seperti alamat IP, browser, serta
            data penggunaan untuk meningkatkan kualitas layanan. Jika Anda
            mendaftar, kami juga menyimpan data akun seperti email dan username.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">
            2. Penggunaan Informasi
          </h2>
          <p className="text-white">
            Data yang kami kumpulkan digunakan untuk keperluan analisis,
            peningkatan fitur, serta memastikan keamanan platform. Kami tidak
            menjual atau membagikan data pribadi Anda kepada pihak ketiga tanpa
            izin.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">
            3. Keamanan Data
          </h2>
          <p className="text-white">
            Kami menggunakan langkah-langkah keamanan standar untuk melindungi
            data Anda dari akses tidak sah, kehilangan, atau penyalahgunaan.
            Namun, kami tidak dapat menjamin 100% keamanan data di internet.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">
            4. Hak Pengguna
          </h2>
          <p className="text-white">
            Anda berhak meminta penghapusan akun atau data pribadi kapan saja
            dengan menghubungi tim kami. Kami akan memproses permintaan sesuai
            dengan kebijakan yang berlaku.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">
            5. Perubahan Kebijakan
          </h2>
          <p className="text-white">
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
            Perubahan akan berlaku segera setelah dipublikasikan di halaman ini.
            Dengan tetap menggunakan layanan, Anda menyetujui versi terbaru dari
            kebijakan ini.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
