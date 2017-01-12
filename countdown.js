var countdownGenerator = function(startingVal) {
	console.log("T-minus " + startingVal)
	return function() {
		startingVal -= 1;
			if (startingVal >= 1){
				console.log("T-minus " + startingVal)
			} else if (startingVal === 0){
				console.log("Blast off!")
			} else {
				console.log("Rocket's already gone")
			}
			return startingVal;
	}
}

	
// var loadedDie = (function () {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];	
//   var result = 0;
  
//   return function() {
//   	result += 1
//   	return list[result - 1]
//   }
// })();

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


console.log(countdownGenerator());  // 5



