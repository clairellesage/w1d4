var countdownGenerator = (function() {
	var starting = 10;

	var countdown = function() {
		starting -= 1;
		return starting;
	}
})();


// var nextId = (function () {
//   var id = 0;

//   return function () {
//     id += 1;
//     return id;
//   }
// })();

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!