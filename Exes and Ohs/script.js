function XO(str) {
   // Check X & O exist
   if ((/[xo]/gi).test(str)) {
      const xAmount = str.includes('x') ? str.match(/x/gi).length : 0
      const oAmount = str.includes('o') ? str.match(/o/gi).length : 0
      return xAmount === oAmount
   } else if (!(/[xo]/gi).test(str.toLowerCase())) {
      // let containsStr = []
      // let amountContainsStr = {}
      // for (const s of str) {
      //    containsStr.push(s)
      // }
      // containsStr = [...new Set(containsStr)]
      // console.log(containsStr)

      // for (let i = 0; i < containsStr.length; i++) {
      //    amountContainsStr[containsStr[i]] = str.match(new RegExp(containsStr[i], 'gi')).length
      // }
      // console.log(amountContainsStr)

      // let sameAmount = 0
      // for (const key in amountContainsStr) {
      //    if (amountContainsStr[key] === sameAmount) {
      //       sameAmount = amountContainsStr[key]
      //    }
      // }

      return true
   } else {
      return false
   }
}


console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("zpzpzpp"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);