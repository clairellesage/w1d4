// The second argument/parameter is expected to be a function


function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
  	var index = arr.indexOf(arr[i])
    if (arr[i] === "Waldo") {
      found(index);   // execute callback
    }
  }
}

// function getIndex(array){
// 	for (var i = 0; i < arr.length; i++) {
//     	if (arr[i] === "Waldo") {
//     	var index = arr[i]
//     }
//     return index
//   }
// }

//this function is the callback
function actionWhenFound(index) {
  console.log("Found him at" + " " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//index of where you found Waldo
//can only access arr[i] within function findWaldo
//pass results via callback function