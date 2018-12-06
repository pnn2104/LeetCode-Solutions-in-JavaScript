var swapPairs = require('../24.SwapNodesInPairs');
var constructLinkedListFromArr = require('../utils/constructLinkListFromArr');
var listToArr = require('../utils/listToArr');

describe('tests for swap nodes in pairs', () => {
    var inputOutput = [
        [[1, 2, 3, 4], [2, 1, 4, 3]],
        [[1, 2, 3], [2, 1, 3]],
        [[3, 5], [5, 3]],
        [[1], [1]]
    ];

    inputOutput.forEach((set) => {
        let result = swapPairs(constructLinkedListFromArr(set[0]));
        console.log(JSON.stringify(result));
        test(`expect ${set[1]} to be returned with input: ${set[0]}`, () => {
            expect(listToArr(result)).toEqual(set[1]);
        })
    })
})