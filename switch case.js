const day = new Date().getDay();

switch (day) {
  case 0:
    console.log("Hari ini adalah Minggu");
    break;
  case 1:
    console.log("Hari ini adalah Senin");
    break;
  case 2:
    console.log("Hari ini adalah Selasa");
    break;
  case 3:
    console.log("Hari ini adalah Rabu");
    break;
  case 4:
    console.log("Hari ini adalah Kamis");
    break;
  case 5:
    console.log("Hari ini adalah Jumat");
    break;
  case 6:
    console.log("Hari ini adalah Sabtu");
    break;
  default:
    console.log("Nilai tidak valid");
}
