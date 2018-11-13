var spiralOrder = function(matrix) {
    let limitLeft = 0;
    let limitRight = matrix[0].length - 1;
    let limitUp = 0;
    let limitDown = matrix.length - 1;   
    let result = [];
    while (limitLeft <= limitRight && limitUp <= limitDown) {
        let fromLeftCounter = limitLeft; //from left to right
        while (fromLeftCounter <= limitRight) {
            result.push(matrix[limitUp][fromLeftCounter++]);
        }
        limitUp++;

        let fromUpCounter = limitUp; //from top to bottom
        while (fromUpCounter <= limitDown) {
            result.push(matrix[fromUpCounter++][limitRight])
        }
        limitRight--;

        if (limitUp <= limitDown) { //from right to left
            let fromRightCounter = limitRight;
            while(fromRightCounter >= limitLeft) {
                result.push(matrix[limitDown][fromRightCounter--]);
            }
            limitDown--;
        }
        
        if (limitLeft <= limitRight) { //from bottom to top
            let fromBottomCounter = limitDown;
            while(fromBottomCounter >= limitUp) {
                result.push(matrix[fromBottomCounter--][limitLeft]);
            }
            limitLeft++;
        }
    }
    return result;
};

let test = [[7],[9],[6]]
console.log(spiralOrder(test));
