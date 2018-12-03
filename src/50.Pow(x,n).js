/*//brute force
var myPow = function(x, n) {
    if (n === 0) {return 1;}
    let product = 1;
    let counter = 0;
    while (counter < Math.abs(n)) {
        product *= x;
        counter++;
    }
    
    if (n < 0) {
        return 1/product;
    } else {
        return product;
    }
};*/

//will work only for positive n

var myPow = function(x, n) {
    const helper = function(x, n) {
        if (x === 0) {
            return 0;
        }
        if (x === 1 || n === 0) {
            return 1
        }
        
        if (n % 2 === 0) {
            let y = helper(x, n / 2);
            return y * y;
        } else if (n % 2 !== 0) {
            return x * helper(x, n - 1);
        }
    }
    
    let product = helper(Math.abs(x), Math.abs(n));
    if (n < 0) {
        product = 1 / product;
    }
    
    if (x < 0 && n % 2 !== 0) {
        product *= -1;
    } 
    
    return product;
}


// var myPow = function(x, n) {
//     if (n === 0) {
//         return 1;
//     }
//     if (n % 2 === 0) {
//         let y = myPow(x, Math.abs(n)/2);
//         return y * y;
//     } else if (n % 2 !== 0) {
//         return x * myPow(x, n - 1);
//     }
// }

console.log(myPow(1,00001, 123456));