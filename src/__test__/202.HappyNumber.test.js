var isHappy = require('../202.HappyNumber');

describe('test for Happy Number', () => {
    let inputOutPut = [
        [19, true],
        [2, false],
        [0, false],
        [3, false]
    ]

    inputOutPut.forEach((set) => {
        test(`isHappy(${set[0]}) should return ${set[1]}`, () => {
            expect(isHappy(set[0])).toBe(set[1]);
        })
    })
})