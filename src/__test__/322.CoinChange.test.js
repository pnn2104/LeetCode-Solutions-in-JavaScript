var coinChange = require('../322.CoinChange');

describe('tests for coinChange', () => {
    let inputOutput = [
        [[5, 2, 1], 11, 3],
        [[1], 5, 5],
        [[], 15, -1], //no denominations
        [[2, 4, 6], 17, -1], //can't find a combination here
        [[2], 3, -1]
    ];

    inputOutput.forEach(set => {
        test(`expect ${set[2]} to be return with coin denominations ${set[0]} & targetAmount of ${set[1]}`, () => {
            expect(coinChange(set[0], set[1])).toBe(set[2]);
        })
    })
})