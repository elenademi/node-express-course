const { writeFile, readFile } = require("fs").promises;
const writer = async () => {
  const firstLine = "Being vegan is not that hard and it feels great.";
  const secondLine = "Animals are sentient beings.";
  const thirdLine = "Plant-based diet is healthy and delicious.";
  try {
    await writeFile(
      "temp.txt",
      `${firstLine} ${secondLine} ${thirdLine}`,
      { flag: "a" }
    );
    console.log("Done!");
  } catch (error) {
    console.error("You messed up:", error);
  }
};
const reader = async () => {
  try {
    const fileContent = await readFile("temp.txt", "utf8");
    console.log(fileContent);
  } catch (error) {
    console.error("You messed up again:", error);
  }
};
async function readWrite() {
  await writer();
  await reader();
}
readWrite();
