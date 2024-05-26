// function tampilAngka(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log(n);
//   tampilAngka(n - 1);
// }

// tampilAngka(10);

// function factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
// tampilkan factorial
// console.log(factorial(6));

// fibonacci (1,1,2,3,5,8,13,....)
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// looping fibonacci
var n = 10;
var s = "";
for (let i = 1; i <= n; i++) {
  s += fibonacci(i);
  s += " ";
}
// tampilkan fibonacci
console.log(s);
