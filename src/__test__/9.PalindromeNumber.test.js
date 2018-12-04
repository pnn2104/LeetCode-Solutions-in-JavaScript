var isPalindrome = require('../9.PalindromeNumber');

describe('checking if a number is a palindrome number', () => {
    const inputOutput = [
        [-123, false],
        [1221, true],
        [1, true],
        [122321, false],
        [12221, true],
        [2153643, false],
        [10, false]
    ]

    inputOutput.forEach(set => {
        test(`inputs number: ${set[0]}`, () => {
            expect(isPalindrome(set[0])).toBe(set[1]);
        })
    })
})


