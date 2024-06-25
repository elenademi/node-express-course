const { writeFile, readFile } = require("fs").promises; 
const firstThenLine = "There are plenty of meat substitutes available.\n"
const secondThenLine = "Vegan cheese tastes amazing!\n"
const thirdThenLine = "And tofu is really yummy if you cook it the right way, which, by the way, is quick and easy.\n"

writeFile("./answers/temp.txt", `${firstThenLine}`)   
 .then(() => {  
    return writeFile(
        './answers/temp.txt',
        `${secondThenLine}`,{ flag: 'a' })    
     })  
 .then (() => {  
    return writeFile(
        './answers/temp.txt',
        `${thirdThenLine}`,{ flag: 'a' })    
     }) 
  .then(() => {
        return readFile("./answers/temp.txt", "utf8"); 
      }) 
   .then((result) => { console.log(result); })     
 .catch((error) => {  
     console.log("An error occurred: ", error)  
 })  