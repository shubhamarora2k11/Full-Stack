/* Write a Program to Flatten a given n-dimensional array */
let count = 0;
let combined = [];
const flattenInner = (array) => {
	let i = 0;
	for (i = 0; i < array.length; i = i + 1) {
		if (Array.isArray(array[i])) {
			//			console.log(i);
			flattenInner(array[i]);
		}
		else {
			combined[count] = array[i];
			//	console.log("1"+combined[count]);
			count += 1;
		}
	}
};

const flatten = (array) => {
	// Write your code here
	if (typeof array !== 'object') {
		//	 console.log(null);
		return null;
	}

	flattenInner(array);
	// console.log(combined);
	return combined;
};
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/
// console.log(typeof [1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]]);
// flatten([1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]]);
// flatten(arrays1);

module.exports = flatten;
