var reconstructQueue = function(people) {
    //sort by Height, then by k
    people.sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]));
    let queue = [];
    people.forEach(person => {
        //at index k, remove noone, add person
        queue.splice(person[1], 0, person)
    });
    return queue;   
};

let test = [[7, 1], [7,0], [4, 5], [4,4],  [5,0], [6,1], [5,2]];
console.log(reconstructQueue(test));

