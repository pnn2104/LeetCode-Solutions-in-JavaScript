/*//O(k*N^2) implementation
var palindromePairs = function(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (j !== i) {
                let word = words[i] + words[j]
                if (isPalindrome(word)) {
                    result.push([i, j]);
                };
            }
        }
    }
    return result;
};

function isPalindrome(word) {
    let p1 = 0;
    let p2 = word.length - 1;
    while (p1 < p2) {
        if (word[p1] !== word[p2]) {
            return false;
        }
        p1++;
        p2--;
    }
    return true;
}*/

//using Trie reference https://fizzbuzzed.com/top-interview-questions-5/
function TrieNode() {
    this.keys = new Map();
    this.idx = -1;
    this.palindromeBelowNode = [];
}


class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    addWord(word, index) { //adding in reverse
        var root = this.root;
        for (let i = word.length - 1; i >= 0 ; i--) {
            console.log("----char----: ", word[i]);
            let char = word[i]; 
            if (!root.keys.has(char)) {
                let val = new TrieNode();
                root.keys.set(char, val);
            }
            if (isPalindrome(word.slice(0, i - 1))) {
                root.palindromeBelowNode.push(index);    
            }
            console.log("this.root: ", this.root)
            root = root.keys.get(char);
            console.log("--traveresed root--: ", root);
            
        } 
        root.idx = index;
    }
}

function isPalindrome(word) {
    let start = 0;
    let end = word.length - 1;
    while (start < end) {
        if (word[start++] !== word[end--]) {
            return false;
        }
    }
    return true;
}

function search(word, trie, index) {
    let currentNode = trie;
    //console.log("currentNodeAbove", currentNode);
    let result = [];
    for (let i = 0; i < word.length; i++) {
        if (currentNode.idx >= 0) { //if we reach end of a word in a tree
            if (isPalindrome(word.slice(i + 1))) {
                result.push(currentNode.idx);    
                //console.log("result here: ", result);
            }    
        }    
        if (!currentNode.keys.has(word[i])) {
            //console.log("------no match------:", result);
            return result;
        }
        
        currentNode = currentNode.keys.get(word[i]);
        //console.log("currentNode here: ", currentNode)
    }

    if (currentNode.idx >= 0) { //if all characters in input wprds are check but there are still characters in trie's word
        result.push(currentNode.idx);   
    }
    //console.log("here: ", result);
    result = result.concat(currentNode.palindromeBelowNode);
    
    //console.log("here here: ", result);
    
    
    return result;
}

var palindromePairs = function(words) {
    let result = [];
    let trie = new Trie();
    for (let i = 0; i < words.length; i++) {
        console.log("word: ", words[i]);
        trie.addWord(words[i], i);
        //console.log("constrcuted trie: ", trie.root);
    }
    
    for (let j = 0; j < words.length; j++) {
        //console.log("word: ", words[j]);
        let candidates = search(words[j], trie.root, j);
        //console.log("candidates: ", candidates);
        for (let k of candidates) {
            if (k !== j) {
                result.push([j, k]);
            }
        }
    }
    
    return result;
};
//let test = ["a", "abc", "aba", ""];
//[[0, 3], [3, 0], [2, 3], [3, 2]];
let test = ["abcd","dcba","lls","s","sssll"];
//[[0,1], [1.0], [3, 2], [2, 4]];
// let trie = new Trie();
// for (let i = 0; i < test.length; i++) {
//     trie.addWord(test[i], i);
// }

// let testmap = new Map();
// let node = new TrieNode();
// testmap.set("", new TrieNode());
// console.log("testmap: ", testmap);

//console.log(palindromePairs(test));
//console.log(isPalindrome("civic"))
console.log(palindromePairs(test));

