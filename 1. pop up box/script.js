// macam-macam pop up box
// 1. alert
// alert("Hello World");
// alert('halo');
// alert('wijaya');

// 2. prompt
// var nama = prompt('Masukkan nama Anda : ');
// alert(nama);

// 3. confirm
// var konfirmasi = confirm('Kamu yakin ingin menghapus?');
// if(konfirmasi) {
//     alert('user menekan tombol oke')
// } else {
//     alert('user menekan tombol cancel')
// }

// coba-coba
alert('Selamat datang')
var lagi = true

while (lagi) {
    var nama = prompt('Masukkan nama :')
    alert('Halo ' + nama)

    lagi = confirm('Coba lagi?')
}