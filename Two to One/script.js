function longest(s1, s2) {
   let alphabet = ['a', 'b', 'c', 'd', 'e',
      'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't',
      'u', 'v', 'w', 'x', 'y',
      'z'
   ];
   let s1Splited = s1.split('').sort()
   let s2Splited = s2.split('').sort()

   let s1Index = [alphabet.indexOf(s1Splited[0]), alphabet.indexOf(s1Splited[s1Splited.length - 1])]
   let s2Index = [alphabet.indexOf(s2Splited[0]), alphabet.indexOf(s2Splited[s2Splited.length - 1])]

   let first = s1Index[0] < s2Index[0] ? s1Index[0] : s2Index[0];
   let last = s1Index[1] > s2Index[1] ? s1Index[1] : s2Index[1];

   let result = '';

   for (first; first <= last; first++) {
      if (s1Splited.includes(alphabet[first])) {
         result += alphabet[first]
      } else if (s2Splited.includes(alphabet[first])) {
         result += alphabet[first]
      }
   }

   return result
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")