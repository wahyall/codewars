function removeChar(str) {
   let arrStr = str.split('');
   arrStr.shift();
   arrStr.pop()
   return arrStr.join('');
}

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');