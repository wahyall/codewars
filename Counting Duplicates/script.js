function duplicateCount(text) {
   let chars = text.toLowerCase()
   const sameChars = []

   for (let i = 0; i < chars.length; i++) {
      const checker = chars[i]
      if (chars.match(new RegExp(checker, 'gi')).length >= 2) {
         if (!sameChars.includes(checker)) {
            sameChars.push(checker)
         }
      }
   }

   return sameChars.length
}

console.log(duplicateCount("abcdefghABCDABCABa"), 4);

// console.log(duplicateCount(""), 0);
// console.log(duplicateCount("abcde"), 0);
// console.log(duplicateCount("aabbcde"), 2);
// console.log(duplicateCount("aabBcde"), 2, "should ignore case");
// console.log(duplicateCount("Indivisibility"), 1)
// console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")