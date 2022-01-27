function solution(str) {
   let reversed = [];
   for (let i = str.length - 1; i >= 0; i--) {
      reversed.push(str[i]);
   }
   return reversed.join('');
}

console.log(solution('world'), 'dlrow')
console.log(solution('hello'), 'olleh')
console.log(solution(''), '')
console.log(solution('h'), 'h')