function sortAsc(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                let min = array[j + 1];
                array[j + 1] = array[j];
                array[j] = min;
            }
        }
    }
    return array
}