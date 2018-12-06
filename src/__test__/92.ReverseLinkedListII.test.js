var reverseBetween = require('../92.ReverseLinkedListII');
var constructLinkedListFromArr = require('../utils/constructLinkListFromArr');
var listToArr = require('../utils/listToArr');


describe('reverse LinkedList in between tests', () => {
    const inputOutput = [
        //format [input list, m, n, exoected output]
        [[1, 2, 3, 4, 5], 2, 4, [1, 4, 3, 2, 5]],
        [[1, 2, 3], 1, 3, [3, 2, 1]],
        [[7, 8, 9 , 20, 17, 15, 10], 4, 6, [7, 8, 9, 15, 17, 20, 10]]
    ]

    inputOutput.forEach((set) => {
        test(`should return ${set[3]} for inputs - list: ${set[0]}, m: ${set[1]}, n: ${set[2]}`, () => {
            let list = constructLinkedListFromArr(set[0])
            let result = reverseBetween(list, set[1], set[2]);
            expect(listToArr(result)).toEqual(set[3]);
        })
    })
})

