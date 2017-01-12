//because functions are first-class objects, we can pass functions into another function as argument and receive it as a returned values.

//cannot be changed later as a whole, can only be changed in parts
//meaning we can push values
//what we can't do is name = something else
//if you want to reset, use let name = ''

//const person = {};

//this function is anonymous because it's referred to by the variable (expression)
var calculateTotal = function(prices){
	var total = 0;
	for (let i = 0; i < this.prices.length; i++) {
		total += prices[i];
	}
	return total
}
	

var calculateTotalTax = function(prices){
	var total = 0;
	for (let i = 0; i < this.prices.length; i++) {
		total += prices[i];
	}
	return total + (total * 0.13)
}
//calculate total without fully knowing how, doesn't explicitly say how to do this
//pass callback function as an argument, gets invoked later on
//passes logic of calculating the total
const cartTotal = function(callback) {
	const prices = [5, 12, 18];
	return callback(prices);
}
//doesn't have access to prices, but passes it as a callback
const withoutTax = cartTotal(calculateTotal);

const withTax = cartTotal(calculateTotalTax);