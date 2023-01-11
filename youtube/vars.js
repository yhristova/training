const isBlank = (input) => {
    if (input.length === 0) {
        return "is blank"
    }

    return "is not blank"
}

console.log(isBlank("hey"))
console.log(isBlank(""))
function areEqualCaseInsensitive(str1, str2) {
    return str1.toUpperCase() === str2;
  }
console.log(areEqualCaseInsensitive("cat","Cat"))

const strPrim = "foo"
const strPrim2 = String(1)
const strPrim3 = String(true)
const strObj = new String(strPrim)

console.log(typeof strPrim)
console.log(typeof strPrim2)
console.log(typeof strPrim3)
console.log(typeof strObj)

const str = 'Life, the universe and everything. Answer:';

console.log(`${str.length}`);
