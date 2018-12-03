var isAnagram = function(s, t) {
    if (t.length !== s.length) {
        return false;
    }    
    var hash = {};
    for (var i = 0; i < s.length; i++) {
        if (hash[s[i]] === undefined) {
            hash[s[i]] = 1;
        } else {
            hash[s[i]]++;
        }
    }
    
    for (var j = 0; j < t.length; j++) {
        if (hash[t[j]] === undefined || hash[t[j]] === 0) {
            return false;
        } else {
            hash[t[j]]--;
        }
    }
    return true
};