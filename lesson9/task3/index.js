export function getCustomersList(obj) {
    let newObject = JSON.parse(JSON.stringify(obj))
    let arr = Object.entries(newObject);
    let mas = [];
    arr.map(i => {
        return i[1].id = i[0];
    });
    arr.forEach(i => {
        mas.push(i[1])
    });
    return mas.sort((elem1, elem2) => elem1.age - elem2.age);
};