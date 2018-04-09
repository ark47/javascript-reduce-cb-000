const app = "I don't do much."

function reduce(array, callback, initialValue) {
	
	let result = initialValue;
	
	array.forEach((item, index) => {
		result = callback(result, item, index, array);
	});

	return result;
}