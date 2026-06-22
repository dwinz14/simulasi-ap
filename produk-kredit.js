const kreditProducts = [
  {
    id: "flat-reguler",
    nama: "Flat Reguler",
    jenis: "anuitas",
    bungaPerBulan: 1.25, // persen per bulan
    tenorMin: 1,
    tenorMax: 36,
    deskripsi: "Kredit reguler dengan angsuran tetap setiap bulan.",
  },
  {
    id: "sliding-reguler",
    nama: "Sliding Reguler",
    jenis: "sliding",
    bungaPerBulan: 2.25,
    tenorMin: 6,
    tenorMax: 12,
    deskripsi: "Kredit reguler dengan bunga kredit wajib dibayar setiap bulan, pokok pinjaman dibayar secara bertahap atau sekaligus pada saat jatuh tempo.",
  },
  {
    id: "kkb-flat",
    nama: "Kendaraan Bermotor Flat",
    jenis: "anuitas",
    bungaPerBulan: 1.25,
    tenorMin: 1,
    tenorMax: 36,
    deskripsi: "Kredit Kendaraan Bermotor dengan angsuran tetap setiap bulan.",
  },
  {
    id: "kkb-sliding",
    nama: "Kendaraan Bermotor Sliding",
    jenis: "sliding",
    bungaPerBulan: 2.25,
    tenorMin: 1,
    tenorMax: 6,
    deskripsi: "Kredit Kendaraan Bermotor dengan bunga kredit wajib dibayar setiap bulan, pokok pinjaman dibayar secara bertahap atau sekaligus pada saat jatuh tempo.",
  },
  {
    id: "profesi-guru",
    nama: "Profesi Guru",
    jenis: "anuitas", // asumsi flat, bisa diubah ke anuitas jika perlu
    bungaPerBulan: 1.5,
    tenorMin: 1,
    tenorMax: 60,
    deskripsi: "Kredit khusu guru dan dosen dengan status ASN maupun non ASN yang mendapatkan tunjangan Sertifikat Pendidik.",
  },
  {
    id: "emas",
    nama: "eMAS ARTHA",
    jenis: "anuitas", // umumnya anuitas untuk gadai emas
    bungaPerTahun: 11, // 11% per tahun
    tenorMin: 12,
    tenorMax: 60,
    deskripsi: "Pinjaman yang diberikan kepada nasabah untuk pembelian emas batangan 24karat.",
  },
];
