function getSum(a, b) {
   let sum = 0;
   if (a < b) {
      for (a; a <= b; a++) {
         sum += a
      }
   } else {
      for (b; b <= a; a--) {
         sum += a
      }
   }
   return sum
}

console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);