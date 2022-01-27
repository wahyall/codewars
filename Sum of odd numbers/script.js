function rowSumOddNumbers(n) {
   let firstOddNumber = n * (n - 1) + 1
   let oddNumbers = [firstOddNumber]

   for (let i = 0; i < n; i++) {
      oddNumbers.push(firstOddNumber += 2)
   }

   oddNumbers = oddNumbers.slice(0, n)
   let sum = 0;

   oddNumbers.forEach(number => {
      sum += number;
   })

   return sum
}

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(2), 8);
console.log(rowSumOddNumbers(3), 27);
// console.log(rowSumOddNumbers(42), 74088);