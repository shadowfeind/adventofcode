import fs from "fs";

const words = fs.readFileSync("./example2.txt", "utf-8").trim().split("\n");

const numberInWord = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const wordsWithNumbers = words.map();
