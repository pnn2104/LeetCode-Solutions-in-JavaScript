var ladderLength = function(beginWord, endWord, wordList) {
    //let minLen = 0;

    let queue = [[beginWord, 1]];
    let visited = new Set([beginWord]);

    //console.log("visited: ", visited);

    while (queue.length) {
        let deq = queue.shift();
        //console.log("deq: ", deq);
        let neighbors = getNeighbors(deq[0], wordList);
        //console.log(deq[0], "neighbor: ", neighbors);
        for (let candidate of neighbors) {
            if (candidate === endWord) {
                return deq[1] + 1;
            } else {
                if (!visited.has(candidate)) {
                    queue.push([candidate, deq[1] + 1]);
                    visited.add(candidate);
                }
                
            }
        }
    }
    return 0;
};

function getNeighbors(word, wordList) {
    var neighbors = [];
    for (let candidate of wordList) {
        if (getDifference(word, candidate) === 1) {
            neighbors.push(candidate)
        }
    }
    return neighbors;
}

function getDifference(A, B) {
    let diff = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            diff++;
        }
    }
    return diff;
}

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"]

console.log(ladderLength(beginWord, endWord, wordList));
