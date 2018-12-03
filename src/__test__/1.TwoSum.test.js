console.log('hiiiiiii');
var twoSum = require('../1.TwoSum');


test('twoSum', () => {
    const input = [2, 7, 11, 15];
    const target = 9;

    expect(twoSum(input, target)).toEqual([0, 1]);
})