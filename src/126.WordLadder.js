var findLadders = function(beginWord, endWord, wordList) {
    wordList.push(beginWord);
    let connections = getConnections(wordList);
    console.log(connections);
    if (connections[endWord] === undefined) {
        return [];
    }

    let queue = [];
    let sequences = [];
    let visited = {};
    let minLen = 0;
    visited[beginWord] = true;
    queue.push({
        seq: [beginWord],
        visited: visited 
    })
    while (queue.length) {
        let current = queue.shift();
        let seq = current.seq;
        //console.log("seq: ", seq[seq.length - 1]);
        for (let word of connections[seq[seq.length - 1]]) {
            //console.log("word: ", word);
            let visit = {...current.visited};
            if (visit[word] === undefined) {
                let updated = seq.concat(word);
                console.log("updated: ", updated);
                visit[word] = true;
                if (word === endWord && (updated.length <= minLen || minLen === 0)) {
                    minLen = updated.length;
                    //console.log("updates: ", updated);
                    sequences.push(updated);
                } else {
                    queue.push({
                        seq: updated,
                        visited: visited
                    });
                }
            }
        }
    }
    console.log(sequences);

}

function getConnections(wordList) {
    let connections = {};
    for (var x of wordList) {
        connections[x] = [];
    }

    for (var x of wordList) {
        for (var y of wordList) {
            if (difference(x, y) === 1) {
                connections[x].push(y);
            }
        }
    }
    return connections;
}


function difference(word1, word2) {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            diff++;
        }
    }
    return diff;
}

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"];
console.log(findLadders(beginWord, endWord, wordList));

/* Correct Solution but time limit exceed
var findLadders = function(beginWord, endWord, wordList) {
    //transform wordList to dict for quick 
    let dict = {};
    for (let word of wordList) {
        dict[word] = true;    
    }
    //if endWord not in dict 
    if (dict[endWord] === undefined) {
        return [];
    }

    let stack = [];
    let visited = {};
    visited[beginWord] = true;
    stack.push({
        sequence: [beginWord],
        visited: visited
    });
    let sequences = [];
    let minLen = 0;

    while (stack.length) {
        let current = stack.pop();
        let currentSeq = current.sequence;
        for (let w in dict) {
            let visit = {...current.visited};
            if (difference(currentSeq[currentSeq.length - 1], w) === 1 && visit[w] === undefined) {
                let updated = currentSeq.concat(w);
                visit[w] = true;
                if (w === endWord && (updated.length <= minLen || minLen === 0)) {
                    minLen = updated.length;
                    sequences.push(updated);
                } else if (w !== endWord){
                    stack.push({
                        sequence: updated,
                        visited: visit
                    });
                    console.log("stack: ", stack);
                }
            }
        }
    }
    //console.log("sequences: ", sequences);
    let result = [];

    for (sequence of sequences) {
        if (sequence.length === minLen) {
            result.push(sequence);
        }
    }

    return result;
}

function difference(word1, word2) {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            diff++;
        }
    }

    return diff;
}
//console.log(difference("hello", "hello"))


let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"];
console.log(findLadders(beginWord, endWord, wordList));*/