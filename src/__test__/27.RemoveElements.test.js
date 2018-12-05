var removeElements = require('../27.RemoveElements');

describe('tests for removeElements', () => {
    test('it should return a number', () => {
        const input = [3, 2, 2, 3];
        const target = 3;
        expect(typeof removeElements(input, target)).toBe('number');
    })
    

    let inputOutput = [
        [[3, 5, 4, 7, 8, 7], 7, 4],
        [[5, 5, 5, 5], 5, 0],
        [[1, 2, 3, 4, 5], 6, 5],
        [[1], 1, 0]
    ]

    inputOutput.forEach((set) => {
        test(`expect ${set[2]} to be returned for input arr: ${set[0]} and targetNum: ${set[1]}`, () => {
            expect(removeElements(set[0], set[1])).toBe(set[2]);
        })
    })
    
})


