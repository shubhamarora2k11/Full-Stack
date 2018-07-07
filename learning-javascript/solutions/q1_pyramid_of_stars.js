// 
const buildPyramid = (totalNumberofRows) => {

    let i, j;
    let str = '';
    for (i = 1; i <= totalNumberofRows; i += 1) {
        let arr = [];
        for (j = totalNumberofRows; j >= i; j -= 1) {
            arr.push(' ');
        }
        for (j = 1; j <= i; j += 1) {
            arr.push('* ');
        }
        str += arr.join('') + ' \n';
    }
    // console.log(str);
    return str;
};

// buildPyramid(5);
module.exports = buildPyramid;
