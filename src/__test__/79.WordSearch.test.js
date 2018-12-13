var exist = require('../79.WordSearch');

describe('tests for 79.WordSearch', () => {
    const board = [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ];

    let cases = [
        ["ABCCED", true],
        ["SEE", true],
        ["ABCB", false]
    ]

    cases.forEach((each) => {
        test(`exist should return ${each[1]} for input ${each[0]}`, () => {
            expect(exist(board, each[0])).toBe(each[1]);
        })
    })
})


test('another test', () => {
    const board = [['A', 'B', 'C', 'E'],
                   ['S', 'F', 'E', 'S'],
                   ['A', 'D', 'E', 'E']];
    expect(exist(board, "ABCESEEEFS")).toBe(true);
})