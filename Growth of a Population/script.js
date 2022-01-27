function nbYear(p0, percent, aug, p) {
   let sumPopulation = p0;
   let year = 0;
   while (sumPopulation < p) {
      sumPopulation += sumPopulation * (percent / 100) + aug
      year += 1
      if (sumPopulation >= p) {
         return year
      }
   }
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);