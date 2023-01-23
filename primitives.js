//1
const isString = (input) => {
  return typeof(input) === 'string'
};

console.log(isString("w3resource"));
console.log(isString([1, 2, 4, 0]));

//2
const isBlank = (str) => {
  if (str.length === 0) return true;

  return false;
};
console.log(isBlank(""));
console.log(isBlank("abc"));

//3
const stringToArray = (str) => {
  return str.split(" ");
};
console.log(stringToArray("Robin Singh"));

//4
const truncateString = (str, position) => {
  return str.slice(0, position);
};
console.log(truncateString("Robin Singh", 4));
//5

const abbrevName = (str) => {
  const nameArray = str.split(" ");
  return `${nameArray[0]} ${nameArray[1][0]}` + ".";
};
console.log(abbrevName("Robin Singh"));

//6
const protectEmail = (str) => {
  const indexOfTerm = str.indexOf("@");
  return str.slice(0, 5) + "..." + str.slice(indexOfTerm);
};
console.log(protectEmail("robin_singh@example.com"));

const max = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};
console.log(max(5, 6));
console.log(max(0, -5));

const stringParameterize = (str) => {
  const stringToArray = str.toLowerCase().split(" ");
  return stringToArray.join("-");
};
console.log(stringParameterize("Robin Singh From USA"));

const capitalize = (str) => {
  const firstLetter = str.charAt(0).toUpperCase();
  return firstLetter + str.slice(1);
};
console.log(capitalize("js string exercises"));

const capitalizeWords = (str) => {
  const myWords = str.split(" ");
  for (let i = 0; i < myWords.lenght; i++) {
    myWords[i] = myWords[i][0].toUpperCase() + myWords[i].substr[1];
  }
  return myWords.join(" ");
};
console.log(capitalizeWords("js string exercises"));

const swapCase = (str) => {
  res = "";
  for (let i = 0; i < str.length; ++i) {
    c = str[i];
    if (c == c.toUpperCase()) {
      res += c.toLowerCase();
    } else if (c == c.toLowerCase()) {
      res += c.toUpperCase();
    }
  }
  return res;
};
console.log(swapCase("AaBbc"));

const camelize = (str) => {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function ($1) {
      return $1.toUpperCase();
    });
};
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));

const unCamelize = (text, separator = " ") => {
  return text
    .replace(/[A-Z]/g, (letter) => separator + letter.toLowerCase())
    .replace("/^" + separator + "/", "");
};
console.log(unCamelize("helloWorld"));
console.log(unCamelize("helloWorld", "-"));
console.log(unCamelize("helloWorld", "_"));

const repeat = (text, n = 1) => {
  return text.repeat(n);
};
console.log(repeat("Ha!"));
console.log(repeat("Ha!", 2));
console.log(repeat("Ha!", 3));

const insert = (str1, str2, position = 0) => {
  return [str1.slice(0, position), str2, str1.slice(position)].join("");
};
console.log(insert("We are doing some exercises."));
console.log(insert("We are doing some exercises.", "JavaScript "));
console.log(insert("We are doing some exercises.", "JavaScript ", 18));

const humanizeFormat = (num) => {
  if (num == undefined) return "";
  const str = num.toString();
  const last = str.charAt(str.length - 1);
  if (last === "1") return str + "st";
  else if (last === "2") return str + "nd";
  else if (last === "3") return str + "rd";
  else return str + "th";
};
console.log(humanizeFormat());
console.log(humanizeFormat(1));
console.log(humanizeFormat(8));
console.log(humanizeFormat(301));
console.log(humanizeFormat(402));

const textTruncate = (str, position, character = "...") => {
  if (!position) {
    return str;
  }
  return str.slice(0, position) + character;
};
console.log(textTruncate("We are doing JS string exercises."));
console.log(textTruncate("We are doing JS string exercises.", 19));
console.log(textTruncate("We are doing JS string exercises.", 15, "!!"));

const stringChop = (str, chars = str.lenght) => {
  let arr = [];
  for (let start = 0; start < str.length; start += chars) {
    let elem = str.slice(start, start + chars);
    arr.push(elem);
  }
  return arr;
};
console.log(stringChop("w3resource"));
console.log(stringChop("w3resource", 2));
console.log(stringChop("w3resource", 3));

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
  } else return theNumber + theNumber;
};
console.log(squareNumber(5));

const isLegal = (age, country) => {
  if (age > 17 && country === "EU") {
    return "legal";
  }

  if (age > 20 && country === "US") {
    return "legal";
  }

  return "illegal";
};
console.log(isLegal(17, "EU"));
console.log(isLegal(18, "EU"));
console.log(isLegal(18, "US"));
console.log(isLegal(21, "US"));

const numberIsEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
console.log(numberIsEven(73));
console.log(numberIsEven(0));
console.log(numberIsEven(16));

const startEndF = (text) => {
  if (text.startsWith("F") && text.endsWith("F")) {
    return true;
  }
  return false;
};
console.log(startEndF("FarF"));
console.log(startEndF("Foo"));
console.log(startEndF(" FooF"));

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
console.log(calculator(5, 6, "+")); // => 11
console.log(calculator(30, 5, "/")); // => 6
console.log(calculator(5, 6, "*")); // => 30
console.log(calculator(5, 6, "-")); // => -1

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(1, 2));

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
console.log(mailify("myemail.test"));

//loop string exercises
const customRepeatString = (symbol, count) => {
  let str = "";
  for (let i = 0; i < count + 1; i++) {
    str = str + symbol;
  }
  return str;
};
console.log(customRepeatString("*", 5));

//6
const staircase = (size) => {
  let str = "";
  for (let i = 0; i < size + 1; i++) {
    str = str + `${"*".repeat(i)}\n`;
  }
  return str;
};
console.log(staircase(5));

//7
const reverseStaircase = (size) => {
  let str = "";
  for (let i = 0; i < size + 1; i++) {
    str = str + `${" ".repeat(size - i) + "*".repeat(i)}\n`;
  }
  return str;
};
console.log(reverseStaircase(5));

const pyramid = (size) => {
  let str = "";
  let maxLength = 2 * size - 1;
  for (let i = 1; i < maxLength + 1; i = i + 2) {
    str = str + `${" ".repeat(size - i / 2) + "*".repeat(i)}\n`;
  }
  return str.trimEnd();
};
console.log(pyramid(5));

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
console.log(pyramidAlt(5));

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
console.log(reversePyramid(15));
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
console.log(christmasTree(5));

module.exports = {isString}