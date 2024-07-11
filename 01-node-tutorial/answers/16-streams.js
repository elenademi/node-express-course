const { createReadStream } = require('fs')
let counter = 0;
const stream = createReadStream('../content/big.txt', { highWaterMark: 200, encoding: 'utf8' },)
stream.on('data', (result) => {
  counter++;
  console.log("Received data", result)
})
stream.on('end', () => {
    console.log('End of data.');
    console.log("Number of chunks received:", counter);
  });
stream.on('error', (err) => console.log(err))
