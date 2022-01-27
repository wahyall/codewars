function isIsogram(str) {
   let arr1 = str.toLowerCase().split('');
   let arr2 = Array.from(new Set(arr1));
   return arr1.length == arr2.length;
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");