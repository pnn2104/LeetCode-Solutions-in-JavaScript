var solution = function(knows) {
    //console.log("knows: ", knows);
    /**
     * @param {integer} n Total people
     * @return {integer} The celebrity
     */
    return function(n) {
        let count = {};
        
        for (let i = 0; i < n; i++) {
            count[i] = 0;
            for (let j = 0; i < n; j++) {
                if (i !== j && knows(j, i)) {
                    count[i]++;    
                }
            }
        }
        
        for (var person in count) {
            if (count[person] === 0) {
                return parseInt(person)
            }
         }
        
         return -1;
    };
};