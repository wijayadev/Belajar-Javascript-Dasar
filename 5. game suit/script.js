// --------------------------------------------------------------
// -------------------------Game Suit----------------------------
// --------------------------------------------------------------

// Selamat Datang
alert("Selamat Datang di Game Suit");

// Menentukan pilihan player
var p = prompt("pilih : 1.gajah, 2.semut, 3.orang");

// Menentukan pilihan computer
// membuat pilihan acak
var comp = Math.random();
// Menentukan pilihan computer berdasarkan nomor acak
if (comp < 0.34) {
  comp = 1;
} else if (comp >= 0.34 && comp < 0.66) {
  comp = 2;
} else {
  comp = 3;
}

// Aturan Menang dan Kalah
//------------------------
// gajah - semut = semut
// gajah - orang = gajah
// gajah - gajah = seri

// semut - gajah = semut
// semut - orang = orang
// semut - semut = seri

// orang - gajah = gajah
// orang - semut = orang
// orang - orang = seri

// Membuat aturan menang kalah
if (p == comp) {
  hasil = "Seri!";
} else if (p == 1) {
  hasil = comp == 3 ? "Menang" : "Kalah";
} else if (p == 2) {
  hasil = comp == 1 ? "Menang" : "Kalah";
} else if (p == 3) {
  hasil = comp == 2 ? "Menang" : "Kalah";
}

// Menampilkan hasil
alert(hasil);
