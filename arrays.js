
//filter exercises:

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

//loop
const count = () => {
  const arr = []

  for(i=0; i<11; i++) {
    arr.push(i)
  }
  return arr
}

console.log(count())


const reverseCount = () => {
  const arr = []
  for(i=10; i>-1; i--) {
    arr.push(i)  
  }
  return arr
}
console.log(reverseCount())


const negativeCount = () => {
  const arr = []
  for(i=0; i>-11; i--) {
    arr.push(i)
  }
  return arr
}
console.log(negativeCount())


const stepCount = () => {
  const arr = []
  for(i=0; i<11; i=i+2) {
    arr.push(i)
  }
  return arr
}
console.log(stepCount())


const customRepeat = (symbol, count) => {
  const arr = []
  for(i=0; i<count+1; i++) {
    arr.push(symbol)
  }
  return arr.join('')
}
console.log(customRepeat('*', 5))

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
  return arr.filter(element => {
    return !exclude.includes(element)
  })
}

console.log(without([5,6], [1,2,3,4,5,6])) // => [1, 2, 3, 4]
console.log(without([4,7], [1,2,3,4,5,6])) // => [1, 2, 3, 5, 6]

//5
const zip = (arr1, arr2) => {
  return arr1.map((el, i) => {
    return [el, arr2[i]]
  })
  }

console.log(zip(['a', 2, 3], [4, 5, 6])) // => [[1, 4], [2, 5], [3, 6]]

//6
const doubled = (arr) => {
  return arr.map(element => {
    return element*2
  })
}
console.log(doubled([1, 2, 3, 4])) // => [2, 4, 6, 8]
console.log(doubled([5, 5])) // => [10, 10]

//7
const multiplier = (arr) => {
  return arr.map(element => {
    return element*element
  })
}
console.log(multiplier([1, 2, 3, 4])) // => [1, 4, 9, 16]
console.log(multiplier([5, 5])) // => [25, 25]

//8
const lengthifier = (arr) => {
  return arr.map(element => {
    return element.length
  })
}

console.log(lengthifier(['dog', 'snake', 'elephant', 'cat'])) // => [3, 5, 8, 3]

//9
const filterEven = (arr) => {
  return arr.filter(element => {
    return element%2 === 0
  })
}
console.log(filterEven([2, 3, 9, 10, 12])) // => [2, 10, 12]

//10
const sum = (arr) => {
  return arr.reduce((acc,e) => {
    return acc+e  
  },0)
}
console.log(sum([1, 2, 3, 4, 5])) // => 15

//11
const concat = (arr) => {
  return arr.reduce((acc,e) => {
    return acc+e
  },'')
}
console.log(concat([1, 'cat', 3, 4, 5])) // => '1cat345'

//12
const flatten1 = (arr) => {
  return arr.reduce((acc,element) => {
    return acc.concat(element)
  }, [])
}
console.log(flatten1([['cat', 'dog'], [true], [4, 5, 6]])) // => ['cat', 'dog', true, 4, 5, 6]

//13
const filterPalindrome = (arr) => {
  const result = arr.filter(element => {
   return element === element.split('').reverse().join('')
  })
  return result
}
console.log(filterPalindrome(['demigod', 'rewire', 'madam', 'freer', 'anutforajaroftuna', 'kiosk'])) // => ['madam', 'anutforajaroftuna']

// 14 - creating my own map function
const myMap = (arr, func) => {
  const result = []
  for(i=0; i<arr.length; i++){
    const element = arr[i]
     result.push(func(element))
  }
  return result
}
console.log(myMap([1,2,3], (element) => element * 2)) // => [2,4,6]
console.log(myMap(['a', 'b', 'c'], (element) => element.length)) // => [1, 1, 1]

//15 creating my own filter function
const myFilter = (arr,func) => {
  const result = []
  for(i=0; i<arr.length; i++) {
    const element = arr[i]
      if (func(element)) {
        result.push(element)  
      }
  }
  return result
}
console.log(myFilter([2, 3, 4], (element) => element % 2)) // => [3]
console.log(myFilter(['misho', 'yoni', 'ani'], (element) => element === 'misho')) // => ['misho']

//16 creating my own reduce function
const myReduce = (arr,func) => {
  let accumulator = 0
  for(i=0; i<arr.length; i++) {
    const element = arr[i]
      accumulator = func(accumulator,element)
  }

  return accumulator
}
 
console.log(myReduce([1, 2, 3], (accumulator, element) => accumulator + element)) // => 6