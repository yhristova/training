const {
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
} = require("./arrays");

describe("#fiveAndGreaterOnly", () => {
  it("shows numbers >=5", () => {
    expect(fiveAndGreaterOnly([3, 6, 8, 2])).toEqual(
      expect.arrayContaining([6, 8])
    );
  });
});

describe("#evensOnly", () => {
  it("shows only even numbers", () => {
    expect(evensOnly([3, 6, 8, 2])).toEqual(expect.arrayContaining([6, 8, 2]));
  });
});

describe("#fiveCharactersOrFewerOnly", () => {
  it("shows only five characters or fewer", () => {
    expect(
      fiveCharactersOrFewerOnly([
        "dog",
        "wolf",
        "by",
        "family",
        "eaten",
        "camping",
      ])
    ).toEqual(expect.arrayContaining(["dog", "wolf", "by", "eaten"]));
  });
});

describe("#peopleWhoBelongToTheIlluminati", () => {
  it("shows those who belong to the illuminati", () => {
    expect(
      peopleWhoBelongToTheIlluminati([
        { name: "Angelina Jolie", member: true },
        { name: "Eric Jones", member: false },
        { name: "Paris Hilton", member: true },
        { name: "Kayne West", member: false },
        { name: "Bob Ziroll", member: true },
      ])
    ).toEqual(
      expect.arrayContaining([
        { name: "Angelina Jolie", member: true },
        { name: "Paris Hilton", member: true },
        { name: "Bob Ziroll", member: true },
      ])
    );
  });
});

describe("#ofAge", () => {
  it("filters the names with J", () => {
    expect(
      ofAge([
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
        { name: "Paris Hilton", age: 5 },
        { name: "Kayne West", age: 16 },
        { name: "Bob Ziroll", age: 100 },
      ])
    ).toEqual(
      expect.arrayContaining([
        { name: "Angelina Jolie", age: 80 },
        { name: "Eric Jones", age: 2 },
      ])
    );
  });
});

describe("#capitalLetter", () => {
    it("an array with capital letters", () => {
        expect(capitalLetter([ "yoana", "mihail", "georgi"])).toEqual(expect.arrayContaining(["Yoana", "Mihail", "Georgi"]))
    })
})

describe("#doubleNumbers", () => {
    it("doubles the numbers", () => {
        expect(doubleNumbers([ 2, 5, 100])).toEqual(expect.arrayContaining([4, 10, 200]))
    })
})

describe("#stringItUp", () => {
    it("the numbers to string", () => {
        expect(stringItUp([2, 5, 100])).toEqual(expect.arrayContaining(["2", "5", "100"]))
    })
})

describe("#capitalizeNames", () => {
    it("capitalizes the first letter", () => {
        expect(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])).toEqual(expect.arrayContaining(["John", "Jacob", "Jingleheimer", "Schmidt"]))
    })
})

describe("#namesOnly", () => {
    it("returns only the names", () => {
        expect(namesOnly([
            {
              name: "Angelina Jolie",
              age: 80,
            },
            {
              name: "Eric Jones",
              age: 2,
            },
            {
              name: "Paris Hilton",
              age: 5,
            },
            {
              name: "Kayne West",
              age: 16,
            },
            {
              name: "Bob Ziroll",
              age: 100,
            },
          ])).toEqual(expect.arrayContaining([
            'Angelina Jolie',
            'Eric Jones',
            'Paris Hilton',
            'Kayne West',
            'Bob Ziroll'
          ]))
    })
})

describe("#makeStrings", () => {
    it("checks if >18 and makes a string", () => {
        expect(makeStrings([
            {
              name: "Angelina Jolie",
              age: 80,
            },
            {
              name: "Eric Jones",
              age: 2,
            },
            {
              name: "Paris Hilton",
              age: 5,
            },
            {
              name: "Kayne West",
              age: 16,
            },
            {
              name: "Bob Ziroll",
              age: 100,
            },
          ])).toEqual(expect.arrayContaining([
            'Angelina Jolie can go to The Matrix',
            'Eric Jones is under age!!',
            'Paris Hilton is under age!!',
            'Kayne West is under age!!',
            'Bob Ziroll can go to The Matrix'
          ]))
    })
})

describe("#readyToPutInTheDOM", () => {
    it("adds <h1></h1> and <h2></h2>", () => {
        expect(readyToPutInTheDOM([
            {
              name: "Angelina Jolie",
              age: 80,
            },
            {
              name: "Eric Jones",
              age: 2,
            },
            {
              name: "Paris Hilton",
              age: 5,
            },
            {
              name: "Kayne West",
              age: 16,
            },
            {
              name: "Bob Ziroll",
              age: 100,
            },
          ])).toEqual(expect.arrayContaining([
            '<h1>Angelina Jolie</h1><h2>80</h2>',
            '<h1>Eric Jones</h1><h2>2</h2>',
            '<h1>Paris Hilton</h1><h2>5</h2>',
            '<h1>Kayne West</h1><h2>16</h2>',
            '<h1>Bob Ziroll</h1><h2>100</h2>'
          ]))
    })
})

describe("#count", () => {
    it("counts to 10", () => {
        expect(count()).toEqual(expect.arrayContaining([1,2,3,4,5,6,7,8,9,10]))
    })
})

describe("#reverseCount", () => {
    it("counts from 10 to 1", () => {
        expect(reverseCount()).toEqual(expect.arrayContaining([10,9,8,7,6,5,4,3,2,1]))
    })
})

describe("#negativeCount", () => {
    it("counts backwards from 0 to -10", () => {
        expect(negativeCount()).toEqual(expect.arrayContaining([0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]))
    })
})

describe("#skipCount", () => {
    it("skip counts to 10 by 2", () => {
        expect(skipCount()).toEqual(expect.arrayContaining([2,4,6,8,10]))
    })
})

describe("#customRepeat", () => {
    it("repeats the symbol n times", () => {
        expect(customRepeat("*",5)).toBe("*****")
    })
})

describe("#total", () => {
    it("sums all the numbers", () => {
        expect(total([1,2,3])).toBe(6)
    })
})

describe("#stringConcat", () => {
    it("concatenates the array into string", () => {
        expect(stringConcat([1,2,3])).toBe("123")
    })
})

describe("#totalVotes", () => {
    it("shows how many people voted", () => {
        expect(totalVotes([
            { name: "Bob", age: 30, voted: true },
            { name: "Jake", age: 32, voted: true },
            { name: "Kate", age: 25, voted: false },
            { name: "Sam", age: 20, voted: false },
            { name: "Phil", age: 21, voted: true },
            { name: "Ed", age: 55, voted: true },
            { name: "Tami", age: 54, voted: true },
            { name: "Mary", age: 31, voted: false },
            { name: "Becky", age: 43, voted: false },
            { name: "Joey", age: 41, voted: true },
            { name: "Jeff", age: 30, voted: true },
            { name: "Zack", age: 19, voted: false },
          ])).toBe(7)
    })
})

describe("#shoppingSpree", () => {
    it("sums all the prices", () => {
        expect(shoppingSpree([
            { title: "Tesla Model S", price: 90000 },
            { title: "4 carat diamond ring", price: 45000 },
            { title: "Fancy hacky Sack", price: 5 },
            { title: "Gold fidgit spinner", price: 2000 },
            { title: "A second Tesla Model S", price: 90000 },
          ])).toBe(227005)
    })
})

describe("#flatten", () => {
    it("concatenates all arrays in one array", () => {
        expect(flatten([["1", "2", "3"], [true], [4, 5, 6]])).toEqual(expect.arrayContaining(['1',  '2', '3',true,4,5,6]))
    })
})

describe("#voterResults", () => {
    it("shows the results from the vote", () => {
        expect(voterResults([
            { name: "Bob", age: 30, voted: true },
            { name: "Jake", age: 32, voted: true },
            { name: "Kate", age: 25, voted: false },
            { name: "Sam", age: 20, voted: false },
            { name: "Phil", age: 21, voted: true },
            { name: "Ed", age: 55, voted: true },
            { name: "Tami", age: 54, voted: true },
            { name: "Mary", age: 31, voted: false },
            { name: "Becky", age: 43, voted: false },
            { name: "Joey", age: 41, voted: true },
            { name: "Jeff", age: 30, voted: true },
            { name: "Zack", age: 19, voted: false },
          ])).toMatchObject({
            numYoungVotes: 1,
            numYoungPeople: 4,
            numMidVotesPeople: 3,
            numMidsPeople: 4,
            numOldVotesPeople: 3,
            numOldsPeople: 4
          })
        })
    })

describe("#contains", () => {
    it("numbers contains 69", () => {
        expect(contains(69, numbers)).toBeTruthy()
    })
    it("numbers doesn't contain 666", () => {
        expect(contains(666, numbers)).toBeFalsy()
    })
})

describe("#range", () => {
    it("gives an array from 1 to 10", () => {
        expect(range(256, 266)).toEqual(expect.arrayContaining([256,257,258,259,260,261,262,263,264,265,266]))
    })
    it("gives an array from 5 to 9", () => {
        expect(range(5, 9)).toEqual(expect.arrayContaining([5,6,7,8,9]))
    })
})

describe("#minMax", () => {
    it("sorts the numbers and shows the min and max number", () => {
        expect(minMax([1, 2, 3, 4, 5])).toEqual(expect.arrayContaining([1,5]))
    })
    it("gives the min and max number", () => {
        expect(minMax([1, 1, 1, 1])).toEqual(expect.arrayContaining([1, 1]))
    })
})

describe("#without", () => {
    it("excludes 5 and 6 from the array", () => {
        expect(without([5, 6], [1, 2, 3, 4, 5, 6])).toEqual(expect.arrayContaining([1, 2, 3, 4]))
    })
    it("excludes 4 from the array", () => {
        expect(without([4, 7], [1, 2, 3, 4, 5, 6])).toEqual(expect.arrayContaining([1, 2, 3, 5, 6]))
    })
})

describe("#zip", () => {
    it("the first,the second and the third elements from both arrays", () => {
        expect(zip([1, 2, 3], [4, 5, 6])).toEqual(expect.arrayContaining([[1, 4], [2, 5], [3, 6]]))
    })
})

describe("#doubled", () => {
    it("doubles the numbers", () => {
        expect(doubled([1, 2, 3, 4])).toEqual(expect.arrayContaining([2, 4, 6, 8]))
    })
    it("doubles the numbers", () => {
        expect(doubled([5, 5])).toEqual(expect.arrayContaining([10, 10]))
    })
})

describe("#multiplier", () => {
    it("multiplies the numbers", () => {
        expect(multiplier([1, 2, 3, 4])).toEqual(expect.arrayContaining([1, 4, 9, 16]))
    })
    it("multiplies the numbers", () => {
        expect(multiplier([5, 5])).toEqual(expect.arrayContaining([25, 25]))
    })
})

describe("#lengthifier", () => {
    it("shows the element.length", () => {
        expect(lengthifier(["dog", "snake", "elephant", "cat"])).toEqual(expect.arrayContaining([3, 5, 8, 3]))
    })
})

describe("#filterEven", () => {
    it("filters the even numbers", () => {
        expect(filterEven([2, 3, 9, 10, 12])).toEqual(expect.arrayContaining([2, 10, 12]))
    })
})

describe("#sum", () => {
    it("sums all the numbers", () => {
        expect(sum([1, 2, 3, 4, 5])).toBe(15)
    })
})

describe("#concat", () => {
    it("concatenates the arrays into one string", () => {
        expect(concat([1, "cat", 3, 4, 5])).toBe("1cat345")
    })
})

describe("#flatten1", () => {
    it("concatenates the arrays into one array", () => {
        expect(flatten1([["cat", "dog"], [true], [4, 5, 6]])).toEqual(expect.arrayContaining(['cat', 'dog', true, 4, 5, 6]))
    })
})

describe("#filterPalindrome", () => {
    it("checks which word is a palindrome", () => {
        expect(filterPalindrome([
            "demigod",
            "rewire",
            "madam",
            "freer",
            "anutforajaroftuna",
            "kiosk",
          ])).toEqual(expect.arrayContaining(['madam', 'anutforajaroftuna']))
    })
})
