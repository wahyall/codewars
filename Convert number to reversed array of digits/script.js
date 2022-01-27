function digitize(n) {
   let arr = n.toString().split('');
   for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0) {
         let t = arr[j];
         arr[j] = arr[j - 1];
         arr[j - 1] = t;

         j--;
      }
   }
   return arr.map(function (item) {
      return parseInt(item);
   });
}

console.log(digitize(35231), [1, 3, 2, 5, 3]);