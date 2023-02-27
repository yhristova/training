//filter exercises:

const fiveAndGreaterOnly = (arr) => {
  return arr.filter((element) => element > 4);
};

const evensOnly = (arr) => {
  return arr.filter((element) => element % 2 === 0);
};

const fiveCharactersOrFewerOnly = (arr) => {
  return arr.filter((element) => element.length < 6);
};

const peopleWhoBelongToTheIlluminati = (arr) => {
  return arr.filter((element) => element.member);
};

const ofAge = (arr) => {
  return arr.filter((element) => element.name.split(" ")[1][0] === "J");
};

const capitalLetter = (arr) => {
  return arr.map(
    (element) => element.charAt(0).toUpperCase() + element.slice(1)
  );
};

//1
const doubleNumbers = (arr) => {
  return arr.map((element) => element * 2);
};

//2
const stringItUp = (arr) => {
  return arr.map((element) => element.toString());
};

//3
const capitalizeNames = (arr) => {
  return arr.map(
    (element) =>
      element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
  );
};

//4
const namesOnly = (arr) => {
  return arr.map((element) => element.name);
};

//5

const makeStrings = (arr) => {
  return arr.map((element) => {
    if (element.age > 79) {
      return element.name + " can go to The Matrix";
    }
    return element.name + " is under age!!";
  });
};

//6
const readyToPutInTheDOM = (arr) => {
  return arr.map((element) => {
    return "<h1>" + element.name + "</h1>" + "<h2>" + element.age + "</h2>";
  });
};

//loop
const count = () => {
  const arr = [];

  for (i = 0; i < 11; i++) {
    arr.push(i);
  }
  return arr;
};

const reverseCount = () => {
  const arr = [];
  for (i = 10; i > -1; i--) {
    arr.push(i);
  }
  return arr;
};

const negativeCount = () => {
  const arr = [];
  for (i = 0; i > -11; i--) {
    arr.push(i);
  }
  return arr;
};

const skipCount = () => {
  const arr = [];
  for (i = 0; i < 11; i = i + 2) {
    arr.push(i);
  }
  return arr;
};

const customRepeat = (symbol, count) => {
  const arr = [];
  for (i = 0; i < count; i++) {
    arr.push(symbol);
  }
  return arr.join("");
};

//reduce exercises
//1
const total = (arr) => {
  return arr.reduce((acc, e) => {
    return acc + e;
  }, 0);
};

//2
const stringConcat = (arr) => {
  return arr.reduce((acc, e) => {
    return acc + e;
  }, "");
};

//3
const totalVotes = (arr) => {
  return arr.reduce((acc, element) => {
    if (element.voted) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

//4
const shoppingSpree = (arr) => {
  return arr.reduce((acc, element) => {
    return element.price + acc;
  }, 0);
};

//5
const flatten = (arr) => {
  return arr.reduce((acc, element) => {
    return acc.concat(element);
  }, []);
};

//6
const voterResults = (arr) => {
  return arr.reduce(
    (acc, element) => {
      if (element.age > 18 && element.age < 26) {
        if (element.voted) {
          return {
            ...acc,
            numYoungVotes: acc.numYoungVotes + 1,
            numYoungPeople: acc.numYoungPeople + 1,
          };
        }
        return { ...acc, numYoungPeople: acc.numYoungPeople + 1 };
      }
      if (element.age > 26 && element.age < 35) {
        if (element.voted) {
          return {
            ...acc,
            numMidVotesPeople: acc.numMidVotesPeople + 1,
            numMidsPeople: acc.numMidsPeople + 1,
          };
        }
        return { ...acc, numMidsPeople: acc.numMidsPeople + 1 };
      }
      if (element.age > 36 && element.age < 56) {
        if (element.voted) {
          return {
            ...acc,
            numOldVotesPeople: acc.numOldVotesPeople + 1,
            numOldsPeople: acc.numOldsPeople + 1,
          };
        }
        return { ...acc, numOldsPeople: acc.numOldsPeople + 1 };
      }
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
};

//array exercises
//1
const contains = (element, arr) => {
  return arr.includes(element);
};

const numbers = [1, 69, 420];

//2
const range = (from, to) => {
  let arr = [];
  for (i = from; i < to + 1; i++) {
    arr.push(i);
  }
  return arr;
};

//3
const minMax = (arr) => {
  const sortedNumbers = arr.sort((a, b) => a - b);
  return [sortedNumbers[0], sortedNumbers[arr.length - 1]];
};

//4
const without = (exclude, arr) => {
  return arr.filter((element) => {
    return !exclude.includes(element);
  });
};

//5
const zip = (arr1, arr2) => {
  return arr1.map((el, i) => {
    return [el, arr2[i]];
  });
};

//6
const doubled = (arr) => {
  return arr.map((element) => {
    return element * 2;
  });
};

//7
const multiplier = (arr) => {
  return arr.map((element) => {
    return element * element;
  });
};

//8
const lengthifier = (arr) => {
  return arr.map((element) => {
    return element.length;
  });
};

//9
const filterEven = (arr) => {
  return arr.filter((element) => {
    return element % 2 === 0;
  });
};

//10
const sum = (arr) => {
  return arr.reduce((acc, e) => {
    return acc + e;
  }, 0);
};

//11
const concat = (arr) => {
  return arr.reduce((acc, e) => {
    return acc + e;
  }, "");
};

//12
const flatten1 = (arr) => {
  return arr.reduce((acc, element) => {
    return acc.concat(element);
  }, []);
};

//13
const filterPalindrome = (arr) => {
  const result = arr.filter((element) => {
    return element === element.split("").reverse().join("");
  });
  return result;
};

// 14 - creating my own map function
const myMap = (arr, func) => {
  const result = [];
  for (i = 0; i < arr.length; i++) {
    const element = arr[i];
    result.push(func(element));
  }
  return result;
};
console.log(myMap([1, 2, 3], (element) => element * 2)); // => [2,4,6]
console.log(myMap(["a", "b", "c"], (element) => element.length)); // => [1, 1, 1]

//15 creating my own filter function
const myFilter = (arr, func) => {
  const result = [];
  for (i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (func(element)) {
      result.push(element);
    }
  }
  return result;
};
console.log(myFilter([2, 3, 4], (element) => element % 2)); // => [3]
console.log(
  myFilter(["mihail", "yoni", "ani"], (element) => element === "mihail")
); // => ['mihail']

//16 creating my own reduce function
const myReduce = (arr, func) => {
  let accumulator = 0;
  for (i = 0; i < arr.length; i++) {
    const element = arr[i];
    accumulator = func(accumulator, element);
  }

  return accumulator;
};

console.log(
  myReduce([1, 2, 3], (accumulator, element) => accumulator + element)
); // => 6

module.exports = {
  fiveAndGreaterOnly,
  evensOnly,
  fiveCharactersOrFewerOnly,
  peopleWhoBelongToTheIlluminati,
  ofAge,
  capitalLetter,
  doubleNumbers,
  stringItUp,
  capitalizeNames,
  namesOnly,
  makeStrings,
  readyToPutInTheDOM,
  count,
  reverseCount,
  negativeCount,
  skipCount,
  customRepeat,
  total,
  stringConcat,
  totalVotes,
  shoppingSpree,
  flatten,
  voterResults,
  contains,
  numbers,
  range,
  minMax,
  without,
  zip,
  doubled,
  multiplier,
  lengthifier,
  filterEven,
  sum,
  concat,
  flatten1,
  filterPalindrome,
};
