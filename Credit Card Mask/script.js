// return masked string
function maskify(cc) {
   let newCC = cc.split('');

   if (newCC.length <= 4) {
      return newCC.join('');
   } else {
      for (let i = 0; i < newCC.length - 4; i++) {
         newCC[i] = '#'
      }
   }

   return newCC.join('');
}

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');