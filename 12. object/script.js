// Pengenalan Object
// var mahasiswa = {
//   nama: "Wijaya",
//   umur: 23,
//   ips: [3.74, 3.8, 3.7],
//   alamat: {
//     jalan: "Jalan H. Yasin",
//     kota: "Indramayu",
//     provinsi: "Jawa Barat",
//   },
// };

// cara memanggil object
// console.log(mahasiswa[alamat][jalan])

// --------------------------------------------------------------------------------------
// Beberapa cara membuat object
// 1. Object literal
// 2. Function declaration
// 3. Constructor function
// 4. Object.create()

// ------membuat object--------
// 1. Object literal
// var mhs = {
//     nama:'Wijaya',
//     nim:'048626551',
//     email:'wijaya5521@gmail.com',
//     jurusan:'akuntansi'
// }

// 2. Function declaration
// function buatObjectMahasiswa(nama, nim, email, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nim = nim;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }

// var mhs2 = buatObjectMahasiswa(
//   "Nova",
//   "11223344",
//   "nova@gmail.com",
//   "teknik informatika"
// );

// 3. Constructor function
// function Mahasiswa(nama,nim,email,jurusan){
//     this.nama = nama
//     this.nim = nim
//     this.email = email
//     this. jurusan = jurusan
// }

// var mhs3 = new Mahasiswa('Dody','11223355','dody@gmail.com','Teknik elektro')
