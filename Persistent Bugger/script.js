function persistence(num) {
   let splited = num.toString().split('').map(n => parseInt(n))
   let times = 0

   while (splited.length > 1) {
      let multiplication = splited.reduce((result, int) => result *= int)
      splited = multiplication.toString().split('').map(n => parseInt(n))
      times += 1
   }

   return times
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);