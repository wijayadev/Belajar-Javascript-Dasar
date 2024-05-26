// Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "Mas";
// arr[1] = "jaya";
// arr[2] = "Wijaya";

// console.log(arr);

// 2. Menghapus isi array
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Lala Sagita", "Waliya", "Wijaya"];

// for (let i = 0; i < 3; i++) {
//   console.log("mahasiswa ke-" + (i + 1) + " adalah " + arr[i]);
// }

// Method array dalam Javascript
// 1. join
// console.log("Join");
// var arr = ["Lala Sagita", "Waliya", "Wijaya"];
// console.log(arr.join(" - "));
// console.log("\n");

// // 2. push
// console.log("Push");
// arr.push("Dody", "Diana");
// console.log(arr.join(" - "));
// console.log("\n");

// // 3. Pop
// console.log("Pop");
// arr.pop();
// console.log(arr.join(" - "));
// console.log("\n");

// // 4. unshift
// console.log("Unshift");
// arr.unshift("Nisa Nurrahmah");
// console.log(arr.join(" - "));
// console.log("\n");

// // 5. shift
// console.log("Shift");
// arr.shift("Nisa Nurrahmah");
// console.log(arr.join(" - "));
// console.log("\n");

// // 6. splice
// console.log("Splice");
// arr.splice(1, 0, "Nisa Nurrahmah");
// console.log(arr.join(" - "));
// console.log("\n");

// // 7. slice
// console.log("Slice");
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(" - "));
// console.log("\n");

// 8. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// angka.forEach(function (e) {
//   console.log(e);
// });

// var nama = ["El", "Nisa", "Waliya"];
// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
// });

// 9. map
// var angka = [1, 4, 2, 5, 7];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// 10. sort
// var angka = [1, 4, 10, 20, 2, 5, 7];

// perbandingan angka agar berurutan
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// 11. filter
// var angka = [1, 4, 10, 20, 2, 5, 7];
// var angka2 = angka.filter(function (e) {
//   return e > 3;
// });

// 12. find
var angka = [1, 4, 10, 20, 2, 5, 7];
var angka2 = angka.find(function (e) {
  return e > 3;
});
