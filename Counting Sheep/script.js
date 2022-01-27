function countSheeps(arrayOfSheep) {
   let sheeps = [];
   arrayOfSheep.forEach(function (sheep) {
      if (sheep == true) {
         sheeps.push(sheep);
      }
   })
   return sheeps.length;
}

var array1 = [true, true, true, false,
   true, true, true, true,
   true, false, true, false,
   true, false, false, true,
   true, true, true, true,
   false, false, true, true
];

console.log(countSheeps(array1) == 17, "There are 17 sheeps in total")