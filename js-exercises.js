const isString = (input) => {
    if (Object.prototype.toString.call(input) === '[object String]')
      return true;
    else
      return false;   
      };

  console.log(isString('w3resource'));
  console.log(isString([1, 2, 4, 0]));

const isBlank = (str) => {
    if (str.length === 0) return true

    return false
};
console.log(isBlank(""));
console.log(isBlank('abc'));

const stringToArray = (str) => {
  return str.split(' ')
}
console.log(stringToArray("Robin Singh"))

const truncateString = (str, position) => {
  return str.slice(0,position)
}
console.log(truncateString("Robin Singh", 4))


const abbrevName = (str) => {
  const nameArray = str.split(" ")
  return `${nameArray[0]} ${nameArray[1][0]}` + "."
}
console.log(abbrevName("Robin Singh"))

const protectEmail = (str) => {
  const indexOfTerm = str.indexOf("@")
  return str.slice(0,5) + "..." + str.slice(indexOfTerm)
}
console.log(protectEmail("robin_singh@example.com"))


const stringParameterize = (str) => {
  const stringToArray = str.toLowerCase().split(" ")
  return stringToArray.join('-')
}
  console.log(stringParameterize("Robin Singh From USA"))

const capitalize = (str) => {
  const firstLetter = str.charAt(0).toUpperCase()
  return firstLetter + str.slice(1)
}
  console.log(capitalize('js string exercises'))

const capitalizeWords = (str) => {
  const myWords = str.split(" ")
   for (let i = 0; i < myWords.lenght; i++) {
    myWords[i] = myWords[i][0].toUpperCase() + myWords[i].substr[1];
  }
  return myWords.join(" ")
}
  console.log(capitalizeWords('js string exercises'))

const swapCase = (str) => {
  res = '';
for (let i = 0; i < str.length; ++i) {
    c = str[i];
  if (c == c.toUpperCase()) {
    res += c.toLowerCase();
  } else if (c == c.toLowerCase()) {
    res += c.toUpperCase();
  }
} return res
}
  console.log(swapCase('AaBbc'));

const camelize = (str) => {
    return str
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toUpperCase(); });
}
  console.log(camelize("JavaScript Exercises"));
  console.log(camelize("JavaScript exercises"));
  console.log(camelize("JavaScriptExercises"));

const unCamelize = (text,separator = " ") => {
  return text.replace(/[A-Z]/g,  (letter) => separator + letter.toLowerCase())
  .replace("/^" + separator + "/", '');
} 
  console.log(unCamelize('helloWorld'));
  console.log(unCamelize('helloWorld','-'));
  console.log(unCamelize('helloWorld','_'));

const repeat = (text,n = 1) => {
  return text.repeat(n)
}
  console.log(repeat('Ha!'));
  console.log(repeat('Ha!',2));
  console.log(repeat('Ha!',3));

const insert = (str1,str2, position = 0) => {
  return [str1.slice(0, position), str2, str1.slice(position)].join('')
}
  console.log(insert('We are doing some exercises.'));
  console.log(insert('We are doing some exercises.','JavaScript '));
  console.log(insert('We are doing some exercises.','JavaScript ',18));

  const humanizeFormat = (num) => {
    if (num == undefined)  
      return ''; 
    const str = num.toString();
    const last = str.charAt(str.length - 1);
    if (last === "1") 
      return str + "st"; 
    else if (last === "2")  
      return str + "nd"; 
    else if (last === "3")  
      return str + "rd"; 
    else 
      return str + "th";
  }
    console.log(humanizeFormat());
    console.log(humanizeFormat(1));
    console.log(humanizeFormat(8));
    console.log(humanizeFormat(301));
    console.log(humanizeFormat(402));

  const textTruncate = (str, position, character = "...") => {
    if (!position) {
      return str
    } 
      return str.slice(0,position) + character
  }
    console.log(textTruncate('We are doing JS string exercises.'))
    console.log(textTruncate('We are doing JS string exercises.',19))
    console.log(textTruncate('We are doing JS string exercises.',15,'!!'))

  const stringChop = (str, chars = str.lenght) => {
      let arr = [];
      for (let start = 0; start < str.length; start += chars) {
        let elem = str.slice(start, start + chars);
        arr.push(elem);
      }
      return arr;
    }
    console.log(stringChop('w3resource'));
    console.log(stringChop('w3resource',2));
    console.log(stringChop('w3resource',3));

    //18,19 gi propuskam

 //        const formattedString = (padd,str) => {
 //         const padLength = padd.length
 //         if (padLength > 4) {
 //         return str.padStart(4)
 //       } 
 //         return str.padEnd(8)
 //       }
 //         console.log(formattedString('0000',123,'l'));
 //         console.log(formattedString('00000000',123,''));

const fiveAndGreaterOnly = (arr) => {
  return arr.filter(element => element > 4)  
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2])); 

const evensOnly = (arr) => {
  return arr.filter(element => element % 2 === 0)
}
console.log(evensOnly([3, 6, 8, 2]));

const fiveCharactersOrFewerOnly = (arr) => {
  return arr.filter(element => element.length < 6)
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

const peopleWhoBelongToTheIlluminati = (arr) => {
  return arr.filter((element) => element.member) 
}

console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

const ofAge = (arr) => {
  return arr.filter((element) => element.name.split(" ")[1][0] === 'J' ) 
}

console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 

const capitalLetter = (arr) => {
  return arr.map((element) => element.charAt(0).toUpperCase() + element.slice(1))
}

console.log(capitalLetter(["yoni", "misho", "markata", "ivancho"]))
//1
const doubleNumbers = (arr) => {
  return arr.map((element) => element*2)
}
console.log(doubleNumbers([2, 5, 100]))
//2
const stringItUp = (arr) => {
  return arr.map((element) => element.toString())
}
console.log(stringItUp([2, 5, 100]))

//3
const capitalizeNames = (arr) => {
  return arr.map((element) => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))

//4
const namesOnly = (arr) => {
  return arr.map((element) => element.name)
}

console.log(namesOnly([
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]));

//5

const makeStrings = (arr) => {
  return arr.map((element) => { 
 //   console.log('element', element)
 //   console.log('element age', element.age)
 //   console.log('if', element.age > 79)

    if (element.age > 79) {
//    console.log('inside if element name', element.name)

      return element.name + " can go to The Matrix"
    }
//    console.log('after if arr', arr)
//    console.log('after if map', arr.map)

    return element.name + " is under age!!"
  }) 
  }

console.log(makeStrings([
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
])); 

//6 
const readyToPutInTheDOM = (arr) => {
  return arr.map((element) => {
    return "<h1>" + element.name + "</h1>" + "<h2>" + element.age +  "</h2>"
  })
}
console.log(readyToPutInTheDOM([
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
])); 

//6 
const max = (a, b) => {
  if (a > b) {
    return a
  }
   return b
}
console.log(max(5, 6)) 
console.log(max(0, -5))

//7
const isLegal = (age, country) => {
  if (age > 17 && country === 'EU') {
    return "legal"
  }
  
  if (age >20 && country === 'US') {
    return "legal"
  }

  return "illegal"
}
console.log(isLegal(17, 'EU')) 
console.log(isLegal(18, 'EU')) 
console.log(isLegal(18, 'US')) 
console.log(isLegal(21, 'US'))

//8 
const numberIsEven = (number) => {
  if (number%2 === 0) {
    return true
  } 
   return false
}
console.log(numberIsEven(73)) 
console.log(numberIsEven(0)) 
console.log(numberIsEven(16))

//9
const startEndF = (text) => {
  if (text.startsWith('F') && text.endsWith('F')) {
    return true
  }
  return false
}
console.log(startEndF('FarF')) 
console.log(startEndF('Foo')) 
console.log(startEndF(' FooF'))

//10
const calculator = (a, b, sign) => {
  if (sign === '+') {
    return a+b
  }
  if (sign === '/') {
    return a/b
  }
  if (sign === '*') {
    return a*b
  }
  if (sign === '-') {
    return a-b
  }
}
console.log(calculator(5, 6, '+')) // => 11
console.log(calculator(30, 5, '/')) // => 6
console.log(calculator(5, 6, '*')) // => 30
console.log(calculator(5, 6, '-')) // => -1

//11

const multiply = (a,b) => {
  return a*b
}
console.log(multiply(1, 2))

//12
const celsiusToFahrenheit = (degree) => {
  return degree*1.8+32
}
console.log(celsiusToFahrenheit(0))

//13
const fahrenheitToCelsius = (degree) => {
  return (degree-32)/1.8
}
console.log(fahrenheitToCelsius(32))

//14
const mailify = (mail) => {
  return mail + '@mail.com'
}
console.log(mailify('myemail.test'))

//1 loop
const count = () => {
  const arr = []

  for(i=0; i<11; i++) {
    arr.push(i)
  }
  return arr
}

console.log(count())

//2
const reverseCount = () => {
  const arr = []
  for(i=10; i>-1; i--) {
    arr.push(i)  
  }
  return arr
}
console.log(reverseCount())

//3
const negativeCount = () => {
  const arr = []
  for(i=0; i>-11; i--) {
    arr.push(i)
  }
  return arr
}
console.log(negativeCount())

//4
const stepCount = () => {
  const arr = []
  for(i=0; i<11; i=i+2) {
    arr.push(i)
  }
  return arr
}
console.log(stepCount())

//5
const customRepeat = (symbol, count) => {
  const arr = []
  for(i=0; i<count+1; i++) {
    arr.push(symbol)
  }
  return arr.join('')
}
console.log(customRepeat('*', 5))
//second option
const customRepeatString = (symbol, count) => {
  let str = ''
  for(let i=0; i<count+1; i++) {
    str = str + symbol
  }
  return str
}
console.log(customRepeatString('*', 5))

//6
const staircase = (size) => {
  let str = ''
  for(let i=0; i<size+1; i++) {
    str = str + `${'*'.repeat(i)}\n`
  }
  return str
}
console.log(staircase(5))

//7
const reverseStaircase = (size) => {
  let str = ''
  for(let i=0; i<size+1; i++) {
    str = str + `${' '.repeat(size-i) + '*'.repeat(i)}\n`
  }
  return  str
}
console.log(reverseStaircase(5))

const pyramid = (size) => {
  let str = ''
  let maxLength = 2 * size - 1
  for(let i=1; i<maxLength+1; i=i+2) { 
    str = str + `${' '.repeat(size-i/2) + '*'.repeat(i)}\n`
  } 
  return str.trimEnd()
}
console.log(pyramid(5))

const pyramidAlt = (size) => {
  let str = ''
  let maxRowSymbols = 2 * size - 1
  let filledSymbols = 1
  let emptySymbols = maxRowSymbols - filledSymbols
  for(let i=0; i<size; i++) { 
    str = str + `${' '.repeat(emptySymbols/2) + '*'.repeat(filledSymbols) + ' '.repeat(emptySymbols/2)}`
    if (i < size -1) {
      str = str + '\n'
    }
    filledSymbols = filledSymbols + 2
    emptySymbols = maxRowSymbols - filledSymbols
  } 

  return  str
}
console.log(pyramidAlt(5))


//const firstRow = (size) => {
//  let str = ''
//  for(i=0; i<size; i++) {
//    str = str + `${' '.repeat(size*4) + '*' + ' '.repeat(size*4)}`
//  }
//  return str
//}
//console.log(firstRow(1),'firstrow')

//const lastRow = (size) => {
//  let str = ''
//  for(i=0; i<size; i++) {
//    str = str + '*'
//  }
//  return str
//}
//console.log(lastRow(9),'lastRow')

//8
const reversePyramid = (size) => {
  let str = ''
  let totalSymbolsPerRow = 2*size - 1
  let symbolsPerRow = totalSymbolsPerRow
  let emptySymbolsPerRow = totalSymbolsPerRow - symbolsPerRow
  for(i=0; i<size; i++) {
    str = str + `${' '.repeat(emptySymbolsPerRow/2) + '*'.repeat(symbolsPerRow) + ' '.repeat(emptySymbolsPerRow/2)}\n`
    symbolsPerRow = symbolsPerRow - 2
    emptySymbolsPerRow = totalSymbolsPerRow - symbolsPerRow
  }
  return str.trimEnd()
}
console.log(reversePyramid(15))
//9

const christmasTree = (size) => {
  let str = ''
  let substr = ''
  const firstLine = `${' '.repeat(size-1) + '_' + ' '.repeat(size-1)}\n`
  const secondLine = `${' '.repeat(size-3) + '{\\o/}' + ' '.repeat(size-3)}\n`
  const thirdLine = `${' '.repeat(size-2) + '/' + '_' + '\\' + ' '.repeat(size-2)}\n`
  const angel = firstLine + secondLine + thirdLine
  let maxRowSymbols = 2 * size - 1
  let filledSymbols = 1
  let emptySymbols = maxRowSymbols - filledSymbols
  for(let i=0; i<size; i++) {
    if (i%2 === 1) {
      substr = str + `${' '.repeat(emptySymbols/2) + 'o' + '*'.repeat(filledSymbols-2) + 'o' + ' '.repeat(emptySymbols/2)}\n`
    }
      str = substr + `${' '.repeat(emptySymbols/2) + '*'.repeat(filledSymbols) + ' '.repeat(emptySymbols/2)}\n`
      filledSymbols = filledSymbols + 2
      emptySymbols = maxRowSymbols - filledSymbols
  }  return str = (angel + str).trimEnd()
}
console.log(christmasTree(5))

//reduce exercises 
//1
const total = (arr) => {
  return arr.reduce((acc,e) => {
   return acc + e
  }, 0)
}
console.log(total([1,2,3]))

//2
const stringConcat = (arr) => {
  return arr.reduce((acc,e) => {
  return  acc + e
  }, '')
}
console.log(stringConcat([1,2,3]))

//3
const totalVotes = (arr) => {  
  return arr.reduce((acc, element) => {
    if (element.voted) {
    return acc + 1
  }
  return acc
}, 0)
}

console.log(totalVotes([
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
]));

//4
const shoppingSpree = (arr) => {
  return arr.reduce((acc,element) => {
    return element.price + acc
  }, 0)
}

console.log(shoppingSpree([
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
])); 

//5
const flatten = (arr) => {
  return arr.reduce((acc, element) => {
    return acc.concat(element)
  }, [])
}

console.log(flatten([["1", "2", "3"], [true],
  [4, 5, 6]
]));

//6
const voterResults = (arr) => {
  return arr.reduce((acc,element) => {
    if (element.age > 18 && element.age < 26) {
      if(element.voted) {
        return {...acc, numYoungVotes: acc.numYoungVotes + 1, numYoungPeople: acc.numYoungPeople + 1}
      }
        return {...acc, numYoungPeople: acc.numYoungPeople + 1}
      } 
    if (element.age > 26 && element.age < 35) {
      if (element.voted) {
        return {...acc, numMidVotesPeople: acc.numMidVotesPeople + 1, numMidsPeople: acc.numMidsPeople + 1}
      }
      return {...acc, numMidsPeople: acc.numMidsPeople + 1, }
    }
    if (element.age > 36 && element.age < 56) {
      if (element.voted) {
        return {...acc, numOldVotesPeople: acc.numOldVotesPeople + 1, numOldsPeople: acc.numOldsPeople + 1 }
      }
      return {...acc, numOldsPeople: acc.numOldsPeople + 1 }
    }
      return acc 
    }, {
  numYoungVotes: 0,
  numYoungPeople: 0,
  numMidVotesPeople: 0,
  numMidsPeople: 0,
  numOldVotesPeople: 0,
  numOldsPeople: 0, 
})
}
console.log(voterResults([
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
]));

//array exercises
//1
const contains = (element, arr) => {
  return arr.includes(element)
}

const numbers = [1, 69, 420]
console.log(contains(69, numbers)) 
console.log(contains(666, numbers))

//2
const range = (from,to) => {
  let arr = []
  for(i=from; i<to+1; i++) { 
   arr.push(i)
  }
  return arr
}
console.log(range(1, 10))
console.log(range(5, 9))

//3
const minMax = (arr) => {
  const sortedNumbers = arr.sort((a,b) => a - b)
  return [sortedNumbers[0], sortedNumbers[arr.length-1]]
}
console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([1, 1, 1, 1]))

//4
const without = (exclude, arr) => {
  
}
console.log(without([5,6], [1,2,3,4,5,6])) // => [1, 2, 3, 4]
console.log(without([4,7], [1,2,3,4,5,6])) // => [1, 2, 3, 5, 6]