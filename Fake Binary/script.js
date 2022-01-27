function fakeBin(x) {
   let arr = x.split('');
   console.log(arr);
   let bin = [];
   arr.forEach(function (num) {
      if (num < 5) {
         num = 0;
         bin.push(num);
      } else if (num >= 5) {
         num = 1;
         bin.push(num);
      }
   })
   return bin.join('');
};

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');