// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code her

const array = [
    { name: 'Apple', color: 'Red', pricePerKg: 220 },
    { name: 'Mango', color: 'Yellow', pricePerKg: 80 },
    { name: 'Grapes', color: 'Black', pricePerKg: 100 }];

const convert = (arrays) => {
    // converting array of objects to object
    let object = {};
	let i = 0;    
	for (i = 0; i < arrays.length; i += 1) {
        object[arrays[i].name] = arrays[i];
    }

    return object;
};

const getColorAndPrice = (fruit, arr) => {
    let object = convert(arr);
    let str = ('Color is ' + object[fruit].color +
    ' and Price per kg is Rs.' + object[fruit].pricePerKg);
    return str;
};

getColorAndPrice('Apple', array);
// console.log(x);
module.exports = getColorAndPrice;

