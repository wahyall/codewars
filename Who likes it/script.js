function likes(names) {
   if (names.length === 0) {
      return 'no one likes this'
   }
   if (names.length === 1) {
      return names[0] + ' likes this'
   }
   if (names.length === 2) {
      return names.join(' and ') + ' like this'
   }
   if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
   }

   const include = names.slice(0, 2)
   const exclude = names.slice(2, names.length)
   return `${include[0]}, ${include[1]} and ${exclude.length} others like this`
}

console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');