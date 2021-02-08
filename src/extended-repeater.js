module.exports = function repeater( str, options) {
    let { repeatTimes = 1, separator = '+', addition, additionRepeatTimes : aRT = 0, additionSeparator : aS = '' } = options;
    let arr = Array(repeatTimes).fill(String(str));
    
    return arr.map( el => {
        if (!aRT && addition === undefined) return el; 
        if (!aRT && addition) return el += String(addition);
        if (addition === undefined) addition = '|';
        
        let additionArr = Array(aRT).fill(String(addition)).join(aS);
        return el += additionArr;

    }).join(separator);
};