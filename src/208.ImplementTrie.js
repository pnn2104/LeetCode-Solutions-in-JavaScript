function TrieNode() {
    this.keys = {};
    this.end = false; //end of a word;
}

var Trie = function() {
    this.root = new TrieNode();
}

Trie.prototype.insert = function(word) {
    let current = this.root;
    let i = 0;
    while (i < word.length) {
        const char = word[i];
        if (current.keys[char] === undefined) {
            current.keys[char] = new TrieNode();
        }
        current = current.keys[char];
        if (i === word.length - 1) {
            current.end = true;
        }
        i++;
    }
};

Trie.prototype.search = function(word) {
    let i = 0;
    let current = this.root;
    while (i < word.length) {
        let char = word[i];
        if (current.keys[char] === undefined) {
            return false;
        } else if (i === word.length - 1 && !current.keys[char].end) {
            return false;
        }
        current = current.keys[char];
        i++;
    }
    return true;
};

Trie.prototype.startsWith = function(prefix) {
    let i = 0;
    let current = this.root;
    while (i < prefix.length) {
        let char = prefix[i];
        if (!current.keys[char]) {
            return false;
        }
        current = current.keys[char]
        i++
    }
    return true;
};


let test = new Trie();
test.insert("hello");
test.insert("help");
console.log("search: ", test.search("help"));
console.log("serach startsWith: ", test.startsWith("ho"))

console.log(JSON.stringify(test.root.keys["h"].keys["e"]));
