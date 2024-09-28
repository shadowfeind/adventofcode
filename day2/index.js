import fs from "fs";

const red = 12;
const green = 13;
const blue = 14;

const inputs = fs.readFileSync("./example.txt", "utf-8").trim().split("\n");
const length = inputs[0].indexOf(":") + 1;
const games = inputs[0].substring(length).split(";");
const game = games.map((game) => {
  return game.split(",");
});
console.log(game);
const possible = game.map((single) => {
  single.forEach((a) => {
    if (a.includes("blue")) {
      const index = a.indexOf("blue");
      const value = a.substring(0, index);
      console.log(value);
      //   return Number(value.trim());
    }
    if (a.includes("red")) {
      const index = a.indexOf("red");
      const value = a.substring(0, index);
      console.log(value);
      //   return Number(value.trim());
    }
    if (a.includes("green")) {
      const index = a.indexOf("green");
      const value = a.substring(0, index);
      console.log(value);
      //   return Number(value.trim());
    }
  });
});
// console.log(possible);
