const { writeFile } = require("fs");

console.log("at start");
writeFile("./temporary/fileB.txt", "Pollinator plants are good for your garden.\n", (err) => {
  if (err) {
    console.error("This error happened: ", err);
  } else {
    console.log("Line 1 written successfully.");
        writeFile("./temporary/fileB.txt", "Bees love wild bergamot.\n", { flag: "a" }, (err) => {
      if (err) {
        console.error("This error happened: ", err);
      } else {
        console.log("Line 2 appended successfully"); 
        writeFile("./temporary/fileB.txt", "They also enjoy all plants in the mint family.\n", { flag: "a" }, (err) => {
          if (err) {
            console.error("This error happened: ", err);
          } else {
            console.log("Line 3 appended successfully.");
            console.log("at end");
          }
        });
      }
    });
  }
});

