const { readFileSync, writeFileSync } = require('fs')
const first = "You can keep them as pets."
const second = "They eat squash."
writeFileSync(
  './temporary/fileA.txt',
  `Madagascar cockroaches hiss. ${first} ${second}`,
     { flag: 'a' }
  
)
const cockroaches = readFileSync('./temporary/fileA.txt', 'utf8')
console.log(cockroaches)

