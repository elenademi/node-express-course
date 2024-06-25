const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('myEvent', (num1, num2) => {
    console.log(`sum ${num1+num2}`)
})
  
  
  customEmitter.on('myNewEvent', (ourDogs1, ourDogs2) => {
    console.log(`our dogs: ${ourDogs1} , ${ourDogs2}`)
  })
  
  customEmitter.emit('myEvent', 3,5)
  customEmitter.emit('myNewEvent', "Mochi", "Nusha")

  const encouragement = new EventEmitter(); 
  encouragement.on("surpriseMessage", (message) => console.log(`${message}`))
  const intervalId =setInterval(() => {  
    encouragement.emit("surpriseMessage", "You rock!");  
  }, 3000); 
  setTimeout(() => {
    clearInterval(intervalId);  
  }, 10000);
  