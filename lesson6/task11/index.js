function checker(arr) {
    let max = arr[0];
    let min = max;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < max) {
            min = arr[i];
        }
    };
    if (max + min > 1000) {
        return true;
    } else {
        return false;
    }
};