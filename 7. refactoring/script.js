// Function

// Menghitung volume tanpa Function
// var a = 5;
// var b = 10;

// var volumeA;
// var volumeB;

// volumeA = a * a * a;
// volumeB = b * b * b;
// total = volumeA + volumeB;

// console.log(total);

// Menggunakan Function
// function jumlahVolumeKubus(a, b) {
//   var volumeA;
//   var volumeB;

//   volumeA = a * a * a;
//   volumeB = b * b * b;
//   total = volumeA + volumeB;
//   return total;
// }

// alert(jumlahVolumeKubus(5, 10));

// Refactoring
function jumlahVolumeKubus(a, b) {
  return a * a * a + b * b * b;
}

alert(jumlahVolumeKubus(5, 10));
