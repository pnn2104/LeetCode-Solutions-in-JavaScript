var spiralOrder = function(matrix) {
    let limitLeft = 0;
    let limitRight = matrix[0].length - 1;
    let limitUp = 0;
    let limitDown = matrix.length - 1;   
    let result = [];
    while (limitLeft <= limitRight && limitUp <= limitDown) {
        let fromLeftCounter = limitLeft;
        while (fromLeftCounter <= limitRight) {
            result.push(matrix[limitUp][fromLeftCounter++]);
        }
        limitUp++;

        let fromUpCounter = limitUp;
        while (fromUpCounter <= limitDown) {
            result.push(matrix[fromUpCounter++][limitRight])
        }
        limitRight--;

        if (limitUp <= limitDown) {
            let fromRightCounter = limitRight;
            while(fromRightCounter >= limitLeft) {
                result.push(matrix[limitDown][fromRightCounter--]);
            }
            limitDown--;
        }
        
        if (limitRight <= limitLeft) {
            let fromBottomCounter = limitDown;
            while(fromBottomCounter >= limitUp) {
                result.push(matrix[fromBottomCounter--][limitLeft]);
            }
            limitLeft++;
        }
    }
    return result;
};

let test = [[1,2,3,4],
            [5,6,7,8],
            [9,10,11,12]]
console.log(spiralOrder(test));
