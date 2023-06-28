const sum = require("../src/sum")
test('sum', () => {
    const a = 4;
    const b =5
    const c = 9;
    expect(sum(a, b)).toBe(c)
})