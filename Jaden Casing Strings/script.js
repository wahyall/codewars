String.prototype.toJadenCase = function () {
   return this.split(' ').map(word => {
      return word.replace(word[0], word[0].toUpperCase())
   }).join(' ')
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");