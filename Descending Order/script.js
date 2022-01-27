function descendingOrder(n) {
   let arrNum = n.toString().split('');
   for (let i = 1; i < arrNum.length; i++) {
      let j = i;
      while (j > 0 && arrNum[j] > arrNum[j - 1]) {
         let temp = arrNum[j - 1];
         arrNum[j - 1] = arrNum[j];
         arrNum[j] = temp;

         j--;
      }
   }
   return parseInt(arrNum.join(''));
}

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)