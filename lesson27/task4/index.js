export const requestUserData = (userId, callback) =>{
    let random = Math.floor(getRandomArbitrary(1, 4));
    if (userId === 'broken') {
      callback('Failed to load user data');
    return;
    } else {
        setTimeout(() => {
            callback({ name: 'John', age: 17, userId: 'userid777', email: 'userid777@example.com' });
        }, random * 1000);
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const back = (value) => {
    return value;
}


console.log(requestUserData('broken',back))