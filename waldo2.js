// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
	arr.forEach(function(name, index){
		if (name === "Waldo") {
			found(name, index)
		}
	})	
}
//this function is the callback
function actionWhenFound(name, index) {
  console.log("Found him at" + " " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

/*
A very common implementation of callback functions is with forEach which uses callbacks 
to allow us to easily iterate through the elements of an array.

Read about iterating through elements of an array using JavaScript's Array.prototype.forEach() method.

Refactor the function findWaldo to use the forEach() method instead of a for loop.
*/

//arr.forEach(callback[, thisArg])