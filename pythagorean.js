var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(currentValue){
	var z = (currentValue.x * currentValue.x) + (currentValue.y * currentValue.y)
	result = Math.sqrt(z)
	return result
})


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


/*
Complete the following code for the assertion to pass. 
The result should be an array of numbers 
corresponding to the x-y pairs provided in the input array 
(ie: calculate z given x and y).

(x^2 + y^2 = z^2)
*/

// var numbers = [1, 5, 10, 15];
// var roots = numbers.map(function(x){
//    return x * 2;
// });
// // roots is now [2, 10, 20, 30]
// // numbers is still [1, 5, 10, 15]

// var numbers = [1, 4, 9];
// var roots = numbers.map(Math.sqrt);
// // roots is now [1, 2, 3]
// // numbers is still [1, 4, 9]