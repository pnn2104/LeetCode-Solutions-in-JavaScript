var twoSum = require('../1.TwoSum');

describe('tests for twoSum', () => {
    const inputsOutputs = [
        [[2, 7, 11, 15], 9, [0, 1]],
        [[2, 7, 11, 15], 20, []]
    ]

    inputsOutputs.forEach((set) => {
        test(`input arr ${set[0]}, target ${set[1]}`, () => {
            expect(twoSum(set[0], set[1])).toEqual(set[2]);
        })
    })
})

// test('twoSum', () => {
//     const input = [2, 7, 11, 15];
//     const target = 9;

//     expect(twoSum(input, target)).toEqual([0, 1]);
// })

// test('twoSum should return [] if solution not found', () => {
//     const input = [2, 7, 11, 15];
//     const target = 20;
//     expect(twoSum(input,target)).toEqual([]);
// })