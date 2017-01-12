// The second argument/parameter is expected to be a function


function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
  	var index = arr.indexOf(arr[i]);
  	var name = arr[i]
    if (arr[i] === "Waldo") {
      found(name, index);   // execute callback
    }
  }
}


//this function is the callback
function actionWhenFound(name, index) {
  console.log("Found " + name + " at " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//index of where you found Waldo
//can only access arr[i] within function findWaldo
//pass results via callback function