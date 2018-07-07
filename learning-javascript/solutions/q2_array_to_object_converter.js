/* Write a Program to convert an array of objects to an object
	based on a given key */
let object = {};


const convert = (array, key) => {
	// console.log(arguments.length+"ss");
		if (((typeof array !== object) && (typeof key !== 'string')))
		 {
			 // console.log(null);
			 return null;
		 }
		
		// Write your code here
		// converting array of objects to object
		let k = key;
		let i = 0;
		//console.log(array.length+k);
		for (i = 0; i < array.length; i += 1) {
			//	console.log(array[i][k]);
			object[array[i][k]] = array[i];
		}

		// console.log(object);

		// console.log(typeof object);
		return object;

	
};


/* 
For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


		*/
//console.log(typeof testObj);


//console.log(typeof "id");
//convert(testObj,"id");
module.exports = convert;
