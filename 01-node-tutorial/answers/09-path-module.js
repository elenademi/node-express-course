const path = require('path')

const myPath = path.join('/content/', 'subfolder', 'first.txt')
console.log(myPath)

const fileName = path.basename(myPath)
console.log(fileName)

