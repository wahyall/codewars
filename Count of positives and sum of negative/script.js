function countPositivesSumNegatives(input) {
   let result = [0, 0];
   let positive = [],
      negative = [];
   if (input.length == 0) {
      return [];
   }
   if (input == null) {
      return [];
   }
   for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
         positive.push(input[i]);
      } else if (input[i] < 0) {
         negative.push(input[i]);
      }
   }

   result[0] = positive.length;
   negative.forEach(function (num) {
      result[1] += num;
   });
   return result;
}


var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
var actual = countPositivesSumNegatives(testData);
var expected = [10, -65];

console.log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");

testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
actual = countPositivesSumNegatives(testData);
expected = [8, -50];

console.log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");