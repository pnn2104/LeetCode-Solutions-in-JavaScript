var nextClosestTime = function(time) {
    let minutes = parseInt(time.substring(0, 3)) * 60 + parseInt(time.substring(3));
    let digits = {};
    let smallest = time[0];
    for (let i = 0; i < time.length; i++) {
        //console.log(time[i]);
        if (time[i] !== ":") {
            digits[time[i]] = true;
            smallest = Math.min(smallest, time[i]);
        }
    }
    //console.log(digits);
    while (minutes <= 24 * 60) {
        minutes++;
        let hr = (Math.floor(minutes / 60) + "").length === 2 ? Math.floor(minutes / 60) + "" : "0" + Math.floor(minutes / 60);
        let min = (minutes % 60 + "").length === 2 ? minutes % 60 + "" : "0" + minutes % 60 ;
        //console.log("here: ", hr, min)
        if (digits[hr[0]] && digits[hr[1]] && digits[min[0]] && digits[min[1]]) {
            return hr + ":" + min;
        }
    }
    return "".concat(smallest).concat(smallest).concat(":").concat(smallest).concat(smallest);
};

let test = "23:59";
console.log(nextClosestTime(test))


/*
12:34
last minute digit 4
    no other digit that's > 4 and make it <= 59
    first minute digit
        4 > 3 --> 12:44
*/