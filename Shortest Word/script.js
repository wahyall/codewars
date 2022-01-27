function findShort(s) {
   let arrStr = s.split(' ');
   let shortestLength = 100;
   let shortestWord = ''
   arrStr.forEach((str) => {
      if (str.length < shortestLength) {
         shortestWord = str;
         shortestLength = str.length;
      }
   })
   return shortestLength;
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);