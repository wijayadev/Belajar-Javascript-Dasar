// Pendahuluan
// Di dalam angkot terdapat 15 kursi penumpang yang diisi oleh penumpang angkot
// ----------Rules-----------
// 1. Jika angkot kosong maka penumpang akan menduduki kursi nomor 1
// 2. Penumpang berikutnya duduk di kursi selanjutnya secara berurutan
// 3. Jika kursi sudah penuh maka tidak dapat menambah penumpang
// 4. Nama penumpang tidak boleh sama

// membuat array penumpang
var penumpang = [];

// tambah penumpang
function tambahPenumpang(namaPenumpang, penumpang) {
  // jika semua kursi kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(nama);
    // kembalikan isi aray dan keluar dari function
    return penumpang;
  }
  // cek apakah kursi sudah penuh
  else if (penumpang.length == 15) {
    // beritahu kursi sudah penuh
    console.log("Kursi sudah penuh, silakan menggunakan angkot yang lain");
    // kembalikan isi array dan keluar dari function
    return penumpang;
  }
  // jika kursi tidak kosong dan tidak penuh
  else {
    // telusuri semua kursi angkot
    for (let i = 0; i < penumpang.length; i++) {
      // cek apakah ada kursi kosong
      if (penumpang[i] == undefined) {
        // penumpang menempati kursi kosong
        penumpang[i] = namaPenumpang;
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // cek nama penumpang yang sama
      else if (penumpang[i] == namaPenumpang) {
        // beritahu nama penumpang sudah ada
        console.log("Nama penumpang sudah ada, silakan masukkan nama lain");
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
      // jika tidak ada kursi kosong dan nama yang sama
      else if (i == penumpang.length - 1) {
        // masukkan penumpang ke akhir array
        penumpang.push(namaPenumpang);
        // kembalikikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
}

// hapusPenumpang
function hapusPenumpang(namaPenumpang, penumpang) {
  // telusuri semua kursi
  for (let i = 0; i < penumpang.length; i++) {
    // Cek nama penumpang ada di array penumpang atau tidak
    if (penumpang[i] == namaPenumpang) {
      // ubah jadi undefine
      penumpang[i] = undefined;
      // kembalikan isi array dan keluar dari function
      return penumpang;
    }
    // jika nama penumpang tidak ada di array penumpang
    else if (i == penumpang.length - 1) {
      // beritahu nama tidak ada
      console.log(namaPenumpang + " bukan penumpang angkot.");
      return penumpang;
    }
  }
}
