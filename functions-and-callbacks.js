

//it's called a function expression when you put it into a variable; when it's just a function, it's called a function declaration
//with function declarations can be called before they come up in the code-- function hoisting
//use function expressions usually, because they prevent from calling the method before it's created

//this function is anonymous because it's referred to by the variable (expression)
var calculateTotal = function(){
	var total = 0;
	for (var i = 0; i < this.prices.length; i++) {
		total += this.prices[i];
	}
	return total + (total * 0.13)
}
//calling the function
//calculateTotal()

var cart = {
	//passing values into a function that get copied for that function
	prices : [24, 125.12, 62],
	//won't run, just a reference pointing to the function
	//setting calculateTotal to the value of the function, without having the value or the function itself
	//called via key
	//can still be done if we had used a function declaration
	calculateTotal: calculateTotal
};
//problem here
var cart.calculate = calculateTotalWithTax;
//pointer to calculateTotal function
var total = cart.calculateTotal();
var totalWithTax = cart.calculate();
console.log(total, totalWithTax);

//const is used when a variable doesn't get reset; var can do that
//also let