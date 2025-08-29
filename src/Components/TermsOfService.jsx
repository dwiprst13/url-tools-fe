import React from 'react';

function TermsOfService() {
  return (
    <section className="min-h-screen py-10 px-5 text-justify">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-200 mb-6">
          Terms of Service (Ketentuan Layanan)
        </h1>
        <p className="text-sm text-gray-300 mb-4">
          Terakhir diperbarui: 29 Agustus 2025
        </p>
        <p className="text-white mb-6">
          Selamat datang di <span className="font-semibold">DPrast URL Tools</span>. Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk mematuhi dan terikat oleh ketentuan berikut:
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">1. Penggunaan Layanan</h2>
          <p className="text-white">
            Anda setuju hanya menggunakan layanan kami untuk tujuan yang sah dan tidak melanggar hukum. Dilarang menggunakan platform untuk menyebarkan konten berbahaya, spam, malware, phishing, atau tautan ilegal. Kami berhak menangguhkan atau menghapus akun/tautan yang dianggap melanggar kebijakan.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">2. Hak & Kewajiban Pengguna</h2>
          <p className="text-white">
            Pengguna bertanggung jawab penuh atas semua tautan yang dibuat, diperpendek, atau dibagikan. Kami tidak bertanggung jawab atas isi dari URL tujuan yang diperpendek/diubah.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">3. Batasan Tanggung Jawab</h2>
          <p className="text-white">
            Kami berusaha menjaga layanan tetap berjalan lancar, namun tidak menjamin bebas dari kesalahan, bug, atau downtime. Kami tidak bertanggung jawab atas kerugian yang timbul dari penggunaan layanan, termasuk kehilangan data, reputasi, atau keuntungan.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-200 mb-2">4. Perubahan Layanan</h2>
          <p className="text-white">
            Kami dapat memperbarui, menambah, atau menghapus fitur kapan saja tanpa pemberitahuan sebelumnya. Dengan terus menggunakan layanan setelah adanya perubahan, berarti Anda setuju dengan ketentuan terbaru.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TermsOfService;
