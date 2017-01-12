function myFilter(array, cb){
	//it's going to return an array bc of function prototype
	var output = []

input.Array.forEach(function(element){
	if (cb(element)){
		output.push(element);
		}
	})
	return output
}

var input = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(myFilter(myList, function(input){
	return (input % 2 === 0)
}).map(function(i) { return i * 2}))
