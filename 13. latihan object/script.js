// membuat object angkot
function angkot(sopir, trayek, penumpang, kas) {
  // deklarasi parameter object
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  // fucntion penumpangNaik
  this.penumpangNaik = function (namaPenumpang) {
    // push penumpang ke akhir array penumpang
    this.penumpang.push(namaPenumpang);
    // kembalikan isi array penumpang
    return this.penumpang;
  };

  // function penumpangTurun
  this.penumpangTurun = function (namaPenumpang, bayar) {
    // cek apakah penumpang kosong
    if (this.penumpang.length === 0) {
      // beritahu angkot masih kosong
      console.log("Angkot masih kosong");
      // hentikan proses
      return false;
    }

    // telusuri array penumpang
    for (let i = 0; i < this.penumpang.length; i++) {
      // cek apakah nama penumpang ada di array penumpang
      if (this.penumpang[i] == namaPenumpang) {
        // hapus penumpang
        this.penumpang[i] = undefined;
        // tambahkan kas karena sudah bayar
        this.kas += bayar;
        // kembalikan isi aray penumpang
        return this.penumpang;
      }
    }
  };
}

// inisiasi object angkot1
var angkot1 = new angkot("Wijaya", ["Karangampel", "Krangkeng"], [], 0);
