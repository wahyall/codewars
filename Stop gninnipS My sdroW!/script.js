function spinWords(str) {
   let splited = str.split(' ')
   let spinned = splited.map(word => {
      if (word.length >= 5) {
         let string = word.split('')
         for (let i = 1; i < string.length; i++) {
            let j = i

            while (j > 0) {
               [string[j], string[j - 1]] = [string[j - 1], string[j]]
               j--
            }
         }
         return string.join('')
      }

      return word
   })

   return spinned.join(' ')
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");