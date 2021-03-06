export const createArrayOfFunctions = (number) => {
    let arr = [];
    if (number === undefined) {
        return [];
    }
    if (typeof number !== 'number') {
        return null;
    }
    for (let i = 0; i < number; i++) {
        arr[i] = function() {
            return i
        }
    }
    return arr;
};