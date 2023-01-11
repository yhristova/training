
  let one = 1, two = 2
  console.log(one + two)

  let num = "5000"

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
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}


for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

for (var i = 1; i <= 100; i++){
  if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {

  for (let x = 0; x < size; x++) {

    if ((x + y) % 2 == 0) {
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
  console.log("Your number is the square root of " +
              theNumber + theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}

const squareNumber = (myNumber) => {
  let theNumber = Number(myNumber)
  console.log(theNumber)
  if (isNaN(theNumber)) {
    return ("Hey why didn't you give me a number?")
  }
    else 
      return (theNumber + theNumber);
}
console.log(squareNumber(5))

