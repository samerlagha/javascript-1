export const calc = string => {
    let [a, operator, b] = string.split(' ');
    let result;

    switch (operator) {
        case '+':
            result = Number(a) + Number(b);
            break;

        case '-':
            result = Number(a) - Number(b);
            break;

        case '*':
            result = Number(a) * Number(b);
            break;

        case '/':
            result = Number(a) / Number(b);
            break;


    };
    return '' + string + '' + ' = ' + '' + result + '';
}