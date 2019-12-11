export function getLocalStorageDate () {
    return Object.entries(localStorage)
        .reduce((acc,[key,value]) => {
            let newValue;
            try {
                newValue = JSON.parse(value);
            } catch(e) {
                newValue = value;
            }
            return {
                ...acc,
                [key]:JSON.parse(value),
            }
        },{});
};