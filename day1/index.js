import fs from "fs";

const words = fs.readFileSync("./text.txt", "utf-8").trim().split("\n");

const values = words.map((word) => {
  const start = word.split("").find((v) => !Number.isNaN(Number(v)));
  const end = word.split("").findLast((v) => !Number.isNaN(Number(v)));

  return Number(start + end);
});

const finalValue = values.reduce((a, v) => a + v, 0);

console.log(finalValue);
