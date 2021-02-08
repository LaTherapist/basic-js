module.exports = function transform(arr) {   
    if (!Array.isArray(arr)) throw new Error('Incorrect type');
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                if (arr[i + 2] === '--discard-prev' 
                  || arr[i + 2] === '--double-prev') i++;
                i++; 
                break;
            case '--discard-prev':
                newArr.pop();
                break;
            case '--double-next':
                if (arr[i + 1] !== undefined) newArr.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (arr[i - 1] !== undefined) newArr.push(arr[i - 1]);
                break;
            default:
                newArr.push(arr[i]);
                break;
        }
    }
    return newArr;
};
