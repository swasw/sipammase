// Array pemberitahuan
const notifications = [
    "Pemerintah Daerah Kabupaten Wajo, Ranperbup ttg Perubahan Perbup Nomor 47 Tahun 2024 ttg Pedoman Pemberian TPP, 06 May 2024",
    "Pemerintah Kota Bantaeng Rapat Kerja Besar",
    "Pemerintah Kota Makassar Mengadakan Festival Seni pada 12 Mei 2024",
    "Update Jadwal Pemilu 2024 telah diumumkan resmi oleh KPU",
    "Waspada terhadap cuaca ekstrem di wilayah Sulawesi Selatan"
];

// Fungsi untuk menampilkan pemberitahuan ke dalam marquee
function loadNotifications() {
    // Gabungkan semua pemberitahuan dengan pemisah " | " + spasi ekstra
    const marqueeText = notifications.join(' &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; ');

    // Tambahkan teks ke elemen HTML dengan id "marquee-text"
    document.getElementById('marquee-text').innerHTML = marqueeText; // Gunakan innerHTML agar &nbsp; terinterpretasi
}

// Panggil fungsi saat halaman dimuat
window.onload = loadNotifications;
