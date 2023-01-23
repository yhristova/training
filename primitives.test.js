const {isString} = require('./primitives')
it ('is string', () => {
    expect(isString("w3resource")).toBeTruthy()
})
it ('is string', () => {
    expect(isString([1, 2, 4, 0])).toBeFalsy()
})