const getRomanFromNumber = (number) => {
    let num = Number(number);
    const romanArr = ['M', 'CM','D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    const intArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let i = 0;
    let res = '';
    while (num > 0) {
        if (num >= intArr[i]) {
            res += romanArr[i];
            num -= intArr[i];
        } else {
            i += 1
        };
    }
    return res;
};

module.exports = {getRomanFromNumber: getRomanFromNumber};