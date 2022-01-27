function findOdd(A) {
   const numbersObj = {}
   let oddInt;
   A.forEach(int => {
      if (numbersObj[int] === undefined) {
         numbersObj[int] = []
      }
      numbersObj[int].push(int)
   })

   for (const key in numbersObj) {
      if (numbersObj[key].length % 2 !== 0) {
         oddInt = numbersObj[key][0]
      }
   }

   return oddInt
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);