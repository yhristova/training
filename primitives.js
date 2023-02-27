//1
const isString = (input) => {
  return typeof input === "string";
};

//2
const isBlank = (str) => {
  return str.length === 0;
};

//3
const stringToArray = (str) => {
  return str.split(" ");
};

//4
const truncateString = (str, position) => {
  return str.slice(0, position);
};
//5

const abbrevName = (str) => {
  const nameArray = str.split(" ");
  return `${nameArray[0]} ${nameArray[1][0]}` + ".";
};

//6
const protectEmail = (str) => {
  const indexOfTerm = str.indexOf("@");
  return str.slice(0, 5) + "..." + str.slice(indexOfTerm);
};

const max = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

const stringParameterize = (str) => {
  const stringToArray = str.toLowerCase().split(" ");
  return stringToArray.join("-");
};

const capitalize = (str) => {
  const firstLetter = str.charAt(0).toUpperCase();
  return firstLetter + str.slice(1);
};

const capitalizeWords = (str) => {
  myWords = str.split(" ");
  myResult = [];
  for (i = 0; i < myWords.length; i++) {
    myResult.push(myWords[i].charAt(0).toUpperCase() + myWords[i].slice(1));
  }
  return myResult.join(" ");
};

const swapCase = (str) => {
  res = "";
  for (let i = 0; i < str.length; ++i) {
    c = str[i];
    if (c === c.toUpperCase()) {
      res += c.toLowerCase();
    } else if (c === c.toLowerCase()) {
      res += c.toUpperCase();
    }
  }
  return res;
};

const repeat = (text, n = 1) => {
  return text.repeat(n);
};

const insert = (str1, str2, position = 0) => {
  return [str1.slice(0, position), str2, str1.slice(position)].join("");
};

const humanizeFormat = (num) => {
  if (num === undefined) return "";
  const str = num.toString();
  const last = str.charAt(str.length - 1);
  if (last === "1") return str + "st";
  else if (last === "2") return str + "nd";
  else if (last === "3") return str + "rd";
  else return str + "th";
};

const textTruncate = (str, position, character = "...") => {
  if (!position) {
    return str;
  }
  return str.slice(0, position) + character;
};

const stringChop = (str, chars = str.length) => {
  let arr = [];
  for (let start = 0; start < str.length; start = start+chars) {
    let elem = str.slice(start, start + chars);
    arr.push(elem);
  }
  return arr;
};

let one = 1,
  two = 2;
console.log(one + two);
let num = "5000";
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 3;
}

let result = 1;
let counter = 0;
while (counter < 5) {
  result = result * 19;
  counter = counter + 1;
}
console.log(result);

let result1 = 1;
for (let counter = 0; counter < 5; counter = counter + 1) {
  result1 = result1 * 19;
}
console.log(result1);

for (let current = 1; ; current = current + 1) {
  if (current % 7 === 0) {
    console.log(current);
    break;
  }
}

for (let line = "#"; line.length < 8; line += "#") console.log(line);

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 === 0) output += "Fizz";
  if (n % 5 === 0) output += "Buzz";
  console.log(output || n);
}

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

let theNumber = Number("10");
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber + theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}

const squareNumber = (myNumber) => {
  let theNumber = Number(myNumber);
  console.log(theNumber);
  if (isNaN(theNumber)) {
    return "Hey why didn't you give me a number?";
  } else return theNumber*theNumber;
};

const isLegal = (age, country) => {
  if (age > 17 && country === "EU") {
    return "legal";
  }
  if (age > 20 && country === "US") {
    return "legal";
  }
  return "illegal";
};

const numberIsEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const startEndF = (text) => {
  if (text.startsWith("F") && text.endsWith("F")) {
    return true;
  }
  return false;
};

const calculator = (a, b, sign) => {
  if (sign === "+") {
    return a + b;
  }
  if (sign === "/") {
    return a / b;
  }
  if (sign === "*") {
    return a * b;
  }
  if (sign === "-") {
    return a - b;
  }
};

const multiply = (a, b) => {
  return a * b;
};

const celsiusToFahrenheit = (degree) => {
  return degree * 1.8 + 32;
};
console.log(celsiusToFahrenheit(0));

const fahrenheitToCelsius = (degree) => {
  return (degree - 32) / 1.8;
};
console.log(fahrenheitToCelsius(32));

const mailify = (mail) => {
  return mail + "@mail.com";
};

//loop string exercises
const customRepeatString = (symbol, count) => {
  let str = "";
  for (let i = 0; i < count; i++) {
    str = str + symbol;
  }
  return str;
};

//6
const staircase = (size) => {
  let str = "";
  for (let i = 0; i < size + 1; i++) {
    str = str + `${"*".repeat(i)}\n`;
  }
  return str;
};

//7
const reverseStaircase = (size) => {
  let str = "";
  for (let i = 0; i < size + 1; i++) {
    str = str + `${" ".repeat(size - i) + "*".repeat(i)}\n`;
  }
  return str;
};

const pyramid = (size) => {
  let str = "";
  let maxLength = 2 * size - 1;
  for (let i = 1; i < maxLength + 1; i = i + 2) {
    str = str + `${" ".repeat(size - i / 2) + "*".repeat(i)}\n`;
  }
  return str.trimEnd();
};

const pyramidAlt = (size) => {
  let str = "";
  let maxRowSymbols = 2 * size - 1;
  let filledSymbols = 1;
  let emptySymbols = maxRowSymbols - filledSymbols;
  for (let i = 0; i < size; i++) {
    str =
      str +
      `${
        " ".repeat(emptySymbols / 2) +
        "*".repeat(filledSymbols) +
        " ".repeat(emptySymbols / 2)
      }`;
    if (i < size - 1) {
      str = str + "\n";
    }
    filledSymbols = filledSymbols + 2;
    emptySymbols = maxRowSymbols - filledSymbols;
  }

  return str;
};

//8
const reversePyramid = (size) => {
  let str = "";
  let totalSymbolsPerRow = 2 * size - 1;
  let symbolsPerRow = totalSymbolsPerRow;
  let emptySymbolsPerRow = totalSymbolsPerRow - symbolsPerRow;
  for (i = 0; i < size; i++) {
    str =
      str +
      `${
        " ".repeat(emptySymbolsPerRow / 2) +
        "*".repeat(symbolsPerRow) +
        " ".repeat(emptySymbolsPerRow / 2)
      }\n`;
    symbolsPerRow = symbolsPerRow - 2;
    emptySymbolsPerRow = totalSymbolsPerRow - symbolsPerRow;
  }
  return str.trimEnd();
};
//9

const christmasTree = (size) => {
  let str = "";
  let substr = "";
  const firstLine = `${" ".repeat(size - 1) + "_" + " ".repeat(size - 1)}\n`;
  const secondLine = `${
    " ".repeat(size - 3) + "{\\o/}" + " ".repeat(size - 3)
  }\n`;
  const thirdLine = `${
    " ".repeat(size - 2) + "/" + "_" + "\\" + " ".repeat(size - 2)
  }\n`;
  const angel = firstLine + secondLine + thirdLine;
  let maxRowSymbols = 2 * size - 1;
  let filledSymbols = 1;
  let emptySymbols = maxRowSymbols - filledSymbols;
  for (let i = 0; i < size; i++) {
    if (i % 2 === 1) {
      substr =
        str +
        `${
          " ".repeat(emptySymbols / 2) +
          "o" +
          "*".repeat(filledSymbols - 2) +
          "o" +
          " ".repeat(emptySymbols / 2)
        }\n`;
    }
    str =
      substr +
      `${
        " ".repeat(emptySymbols / 2) +
        "*".repeat(filledSymbols) +
        " ".repeat(emptySymbols / 2)
      }\n`;
    filledSymbols = filledSymbols + 2;
    emptySymbols = maxRowSymbols - filledSymbols;
  }
  return (str = (angel + str).trimEnd());
};

module.exports = {
  isString,
  isBlank,
  stringToArray,
  truncateString,
  abbrevName,
  protectEmail,
  max,
  stringParameterize,
  capitalize,
  capitalizeWords,
  swapCase,
  repeat,
  insert,
  humanizeFormat,
  textTruncate,
  stringChop,
  squareNumber,
  isLegal,
  numberIsEven,
  startEndF,
  calculator,
  multiply,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  mailify,
  customRepeatString,
  staircase,
  reverseStaircase,
  pyramid,
  pyramidAlt,
  reversePyramid,
  christmasTree,
};
