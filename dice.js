var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];	
  var result = 0;
  
  return function() {
  	result += 1
  	return list[result - 1]
  }
})();


// var outer = function() {
//   var x = 10;

//   var inner = function() {
//     console.log("Value of x is: " + x);
//   }
//   return inner;
// };

// var foo = outer();
// foo();


console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6

//random number from list


// var nextId = (function () {
//   var id = 0;

//   return function () {
//     id += 1;
//     return id;
//   }
// })();

// console.log(nextId()); // 1
// console.log(nextId()); // 2