function DNAStrand(dna) {
   const complements = {
      AT: ['A', 'T'],
      CG: ['C', 'G']
   }
   const DNA = dna.toUpperCase()
   // console.log(...DNA)
   const strandedDNA = []
   for (const i of DNA) {
      for (const key in complements) {
         // console.log(`${i} - ${key}: ${new RegExp(`[${key}]`).test(i)}`)
         if (new RegExp(`[${key}]`).test(i)) {
            if (i == complements[key][0]) {
               strandedDNA.push(complements[key][1])
            } else {
               strandedDNA.push(complements[key][0])
            }
         }
      }
   }
   return strandedDNA.join('')
}

console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is");
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is");