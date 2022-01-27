function digital_root(n) {
   let splited = n.toString().split('').map(n => parseInt(n))
   while (splited.length > 1) {
      let sum = splited.reduce((result, int) => result += int)
      splited = sum.toString().split('').map(n => parseInt(n))
   }

   return splited[0]
}

console.log(digital_root(12), 3)
console.log(digital_root(16), 7)
console.log(digital_root(456), 6)