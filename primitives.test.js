const {
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
} = require("./primitives");

describe("#isString", () => {
  it("is string", () => {
    expect(isString("w3resource")).toBeTruthy();
  });
  it("is not string", () => {
    expect(isString([1, 2, 4, 0])).toBeFalsy();
  });
});

describe("#isBlank", () => {
  it("is blank", () => {
    expect(isBlank("")).toBeTruthy();
  });
  it("is not blank", () => {
    expect(isBlank("abc")).toBeFalsy();
  });
});

describe("#stringToArray", () => {
  it("array of two strings", () => {
    expect(stringToArray("Robin Singh")).toStrictEqual(["Robin", "Singh"]);
  });
  it("array of one string", () => {
    expect(stringToArray("Robin")).toStrictEqual(["Robin"]);
  });
  it("array of three strings", () => {
    expect(stringToArray("Mr Robin Singh")).toStrictEqual([
      "Mr",
      "Robin",
      "Singh",
    ]);
  });
});

describe("#truncateString", () => {
  it("truncate string", () => {
    expect(truncateString("Robin Singh", 4)).toBe("Robi");
  });
});

describe("#abbrevName", () => {
  it("abbreviated name", () => {
    expect(abbrevName("Robin Singh")).toBe("Robin S.");
  });
});

describe("#protectEmail", () => {
  it("protect email", () => {
    expect(protectEmail("robin_singh@example.com")).toBe(
      "robin...@example.com"
    );
  });
});

describe("#max", () => {
  it("max number", () => {
    expect(max(5, 6)).toBeGreaterThan(5);
  });
  it("max number 0", () => {
    expect(max(0, -5)).toBeGreaterThan(-1);
  });
});

describe("#parameterize", () => {
  it("string parameterize", () => {
    expect(stringParameterize("Robin Singh From USA")).toBe(
      "robin-singh-from-usa"
    );
  });
});

describe("#capitalize", () => {
  it("string capitalize", () => {
    expect(capitalize("js string exercises")).toBe("Js string exercises");
  });
});

describe("#capitalizeAllWords", () => {
  it("capitalize all words", () => {
    expect(capitalizeWords("js string exercises")).toBe("Js String Exercises");
  });
});

describe("#swapCase", () => {
  it("swap case letters", () => {
    expect(swapCase("AaBbc")).toBe("aAbBC");
  });
});

describe("#repeat", () => {
  it("repeat word", () => {
    expect(repeat("Ha!")).toBe("Ha!");
  });

  it("repeat word twice", () => {
    expect(repeat("Ha!", 2)).toBe("Ha!Ha!");
  });
  it("repeat word three times", () => {
    expect(repeat("Ha!", 3)).toBe("Ha!Ha!Ha!");
  });
});

describe("#insert", () => {
  it("insert", () => {
    expect(insert("We are doing some exercises.")).toBe(
      "We are doing some exercises."
    );
  });

  it("insert without position", () => {
    expect(insert("We are doing some exercises.", "JavaScript ")).toBe(
      "JavaScript We are doing some exercises."
    );
  });
  it("insert on 18th position", () => {
    expect(insert("We are doing some exercises.", "JavaScript ", 18)).toBe(
      "We are doing some JavaScript exercises."
    );
  });
});

describe("#humanizeFormat", () => {
  it("no number", () => {
    expect(humanizeFormat()).toBe("");
  });
  it("humanize number 1", () => {
    expect(humanizeFormat(1)).toBe("1st");
  });
  it("humanize number 8", () => {
    expect(humanizeFormat(8)).toBe("8th");
  });
  it("humanize number 302", () => {
    expect(humanizeFormat(302)).toBe("302nd");
  });
  it("humanize number 403", () => {
    expect(humanizeFormat(403)).toBe("403rd");
  });
});

describe("#textTruncate", () => {
    it("without position and character", () => {
      expect(textTruncate("We are doing JS string exercises.")).toBe("We are doing JS string exercises.");
    });
    it("truncate text on 19th position", () => {
      expect(textTruncate("We are doing JS string exercises.", 19)).toBe("We are doing JS str...");
    });
    it("truncate text on 15th position ends with !!", () => {
      expect(textTruncate("We are doing JS string exercises.", 15, "!!")).toBe("We are doing JS!!");
    });
  });

describe ("#stringChop", () => {
    it("empty array", () => {
        expect(stringChop("w3resource")).toStrictEqual([ 'w3resource' ])
    })
    it("2 letter chops array", () => {
        expect(stringChop("w3resource", 2)).toStrictEqual([ 'w3', 're', 'so', 'ur', 'ce' ])
    })
    it("3 letter chops array", () => {
        expect(stringChop("w3resource", 3)).toStrictEqual([ 'w3r', 'eso', 'urc', 'e' ])
    })
})

  describe ("#squareNumber", () => {
    it("the square number of", () => {
      expect(squareNumber(5)).toBe(25)
    })
    it("square number of string", () => {
      expect(squareNumber("asd")).toBe("Hey why didn't you give me a number?")
    })
  })

  describe("#isLegal", () => {
    it("is not legal in EU", () => {
      expect(isLegal(17, "EU")).toBe("illegal")
    })
    it("is legal in EU", () => {
      expect(isLegal(18, "EU")).toBe("legal")
    })
    it("is not legal in US", () => {
      expect(isLegal(18, "US")).toBe("illegal")
    })
    it("is legal in US", () => {
      expect(isLegal(21, "US")).toBe("legal")
    })
  })

  describe("#numberIsEven", () => {
    it("number is not even", () => {
      expect(numberIsEven(73)).toBeFalsy()
    })
    it("number is even", () => {
      expect(numberIsEven(16)).toBeTruthy()
    })
    it("number is 0", () => {
      expect(numberIsEven(0)).toBeTruthy()
    })
  })

  describe("#startEndF", () => {
    it("starts and ends with F", () => {
      expect(startEndF("FarF")).toBeTruthy()
    })
    it("only starts with F", () => {
      expect(startEndF("Foo")).toBeFalsy()
    })
    it("only ends with F", () => {
      expect(startEndF(" FooF")).toBeFalsy()
    })
  })

  describe("#calculator", () => {
    it("5+6", () => {
      expect(calculator(5, 6, "+")).toBe(11)
    })
    it("30/5", () => {
      expect(calculator(30, 5, "/")).toBe(6)
    })
    it("5*6", () => {
      expect(calculator(5, 6, "*")).toBe(30)
    })
    it("5-6", () => {
      expect(calculator(5, 6, "-")).toBe(-1)
    })
  })

  describe("#multiply", () => {
    it("multiply 1 and 2", () => {
      expect(multiply(1, 2)).toBe(2)
    })
    it("multiply -2 and 10", () => {
      expect(multiply(10, -2)).toBe(-20)
    })
  })

  describe("#celsiusToFahrenheit", () => {
    it("0 celsius is 32F", () => {
      expect(celsiusToFahrenheit(0)).toBe(32)
    })
  })

  describe("#fahrenheitToCelsius", () => {
    it("32F is 0 celsius", () => {
      expect(fahrenheitToCelsius(32)).toBe(0)
    })
  })
  
  describe("#mailify", () => {
    it("add @mail.com", () => {
      expect(mailify("myemail.test")).toBe("myemail.test@mail.com")
    })
  })

  describe("#customRepeatString", () => {
    it("repeats string n times", () => {
      expect(customRepeatString("*", 5)).toBe("*****")
    })
  })

  describe("#staircase", () => {
    it("makes a staircase", () => {
      expect(staircase(5)).toBe("\n*\n**\n***\n****\n*****\n")
    })
  })

  describe("#reverseStaircase", () => {
    it("makes a reversed staircase", () => {
      expect(reverseStaircase(5)).toBe("     \n    *\n   **\n  ***\n ****\n*****\n")
    })
  })

  describe("#pyramid", () => {
    it("makes a pyramid", () => {
      expect(pyramid(5)).toBe("    *\n   ***\n  *****\n *******\n*********")
    })
  })

  describe("#pyramidAlt", () => {
    it("alt way for a pyramid", () => {
      expect(pyramidAlt(5)).toBe("    *    \n   ***   \n  *****  \n ******* \n*********")
    })
  })

  describe("#reversePyramid", () => {
    it("makes a reverse pyramid", () => {
      expect(reversePyramid(5)).toBe("*********\n ******* \n  *****  \n   ***   \n    *")
    })
  })

  describe("#christmasTree", () => {
    it("makes a christmas tree", () => {
      expect(christmasTree(5)).toBe("    _    \n  {\\o/}  \n   /_\\   \n    *    \n   o*o   \n  *****  \n o*****o \n*********")
    })
  })