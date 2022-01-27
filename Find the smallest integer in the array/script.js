function findSmallestInt(args) {
   for (let i = 1; i < args.length; i++) {
      let j = i;
      while (j > 0 && args[j] < args[j - 1]) {
         let t = args[j];
         args[j] = args[j - 1];
         args[j - 1] = t;
         j--;
      }

   }
   return args[0];
}

console.log(findSmallestInt([78, 56, 232, 12, 8]), 8);
console.log(findSmallestInt([78, 56, 232, 12, 18]), 12);
console.log(findSmallestInt([78, 56, 232, 412, 228]), 56);
console.log(findSmallestInt([78, 56, 232, 12, 0]), 0);
console.log(findSmallestInt([1, 56, 232, 12, 8]), 1);