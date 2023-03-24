function doMath (num) {
    num = Number(num);
    if(num) {
        // do stuff in here
        var newNumber = (num + 100) / 3;
        return newNumber;
    } else {
        // not a real number
        return false;
    }
}