var judgeCircle = function(moves) {
    var startX = 0;
    var startY = 0;
    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === "U") {
            startY += 1;
        } else if (moves[i] === "D") {
            startY -= 1;
        } else if (moves[i] === "R") {
            startX += 1;
        } else if (moves[i] === "L") {
            startX -= 1;
        }
    }
    if (startX === 0 && startY === 0) {
        return true;
    }
    return false
};