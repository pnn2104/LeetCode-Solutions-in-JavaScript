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
    if (n === 0) {
        return 1;
    }
    if (n % 2 === 0) {
        let y = myPow(x, Math.abs(n)/2);
        return y * y;
    } else if (n % 2 !== 0) {
        return x * myPow(x, n - 1);
    }
}

console.log(myPow(34.00515, -3));