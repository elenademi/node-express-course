const { createReadStream } = require('fs')
const stream = createReadStream('./content/big.txt', { highWaterMark: 200, encoding: 'utf8' },)
stream.on('data', (result) => {
  console.log("Received data",result)
})
stream.on('end', () => {
    console.log('End of data.');
  });
stream.on('error', (err) => console.log(err))
