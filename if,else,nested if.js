const nama = "RIFQI SULISTYO";
const usia = 20;
const jenisKelamin = "laki-laki";

if (jenisKelamin === "laki-laki") {
  if (usia >= 18) {
    console.log(`Halo, saya adalah ${nama}, seorang pria dewasa berusia ${usia} tahun.`);
  } else {
    console.log(`Halo, saya adalah ${nama}, seorang anak laki-laki berusia ${usia} tahun.`);
  }
} else if (jenisKelamin === "perempuan") {
  if (usia >= 18) {
    console.log(`Halo, saya adalah ${nama}, seorang wanita dewasa berusia ${usia} tahun.`);
  } else {
    console.log(`Halo, saya adalah ${nama}, seorang anak perempuan berusia ${usia} tahun.`);
  }
} else {
  console.log(`Halo, saya adalah ${nama}, jenis kelamin tidak diketahui.`);
}
