var reverse = require('../7.ReverseInteger');

describe('tests for reverse integers', () => {
    const inputOutput = [
        [123, 321],
        [-123, -321],
        [10, 1],
        [1534236469, 0] //integer over flow, returns 0
    ]

    inputOutput.forEach(set => {
        test(`reverse(${set[0]}) to be ${set[1]}`, () => {
            expect(reverse(set[0])).toBe(set[1]);
        })
    })
})