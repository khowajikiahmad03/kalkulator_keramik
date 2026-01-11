function hitungKeramik() {
  // Ambil nilai input
  let panjangRumah = document.getElementById("panjangRumah").value;
  let lebarRumah   = document.getElementById("lebarRumah").value;
  let panjangKeramik = document.getElementById("panjangKeramik").value;
  let lebarKeramik   = document.getElementById("lebarKeramik").value;

// Validasi ketika ada yang kosong 
if (!panjangRumah || !lebarRumah || !panjangKeramik || !lebarKeramik)
   { document.getElementById("hasil").innerHTML = "⚠️ Mohon isi semua input terlebih dahulu.";
     return; // hentikan perhitungan
   }

  // Konversi ke angka
  panjangRumah = Number(panjangRumah);
  lebarRumah   = Number(lebarRumah);
  panjangKeramik = Number(panjangKeramik);
  lebarKeramik   = Number(lebarKeramik);

  // perhitungan luas rumah (m persegi → cm persegi)
  let luasRumah = panjangRumah * lebarRumah * 10000; // 1 m persegi = 10,000 cm persegi

  // perhitungan luas keramik (cm persegi)
  let luasKeramik = panjangKeramik * lebarKeramik;

  // peritungan jumlah keramik
  let jumlahKeramik = luasRumah / luasKeramik;

  // 5% cadangan
  let totalKeramik = Math.ceil(jumlahKeramik * 1.05);

  // Tampilkan hasil
  document.getElementById("hasil").innerHTML =
    `Jumlah keramik yang dibutuhkan: <br><strong>${totalKeramik} buah</strong>`;
}
