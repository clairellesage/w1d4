const users_list_1 = [{
	name: 'Jane Doe',
	hobbies: ['soccer', 'boxing']
}, {
	name: 'John Doe',
	hobbies: ['basketball']
}]

// const users_list_2 = [
// {
// 	name: 'Joe Doe',
// 	hobbies: ['hockey']
// }, {
// 	name: 'Alex Doe',
// 	hobbies: ['soccer', 'hockey']
// }]

//make into a list of counts of hobbies
// ==> [2, 1]
//use map -- give it an array, and a callback function
//the array contains all of the items to map, and the callback function is called on the array 
//and whatever you get back is the new pos in the array

//in this case, convert the number of hobbies into the new array in the same position
//tell javascript to map this callback function into an array
//whatever is the returned value is the new array in that position ???
const countHobbies = function(user) {
	return user.hobbies.length;
}
//iterates over each element of the array
//iterator needs a set of data (array) and needs function (callback). invoke that function on each element. 
//return value of the callback function will be put into the array!!!!


//.map method does this behind the scenes:
// const customMap = function(array, callback) {
// 	const mappedValues = [];
// 	for (let i = 0; i < array.length; i++){
// 		const current = array[i];
// 		const result =callback(current);
// 		mappedValues.push(result)
// 	}
// 	return mappedValues;
// }
users_list_1.map(countHobbies);

//a callback is a function that is passed as an argument to another function
//the moment you pass a function into another function, it becomes a callback


//print number of hobbies of each person in each list
//in a way not to hard code the logic -- should work for any other list of users

//"jane"'s hobbies are: "..."

//loop over lists
//this does what forEach does
// const printUserHobbies = function(users, callback){
// 	var string = ''
// 	for (var i = 0; i < users.length; i++){
// 		//console.log(user.name + "\'s hobbies are:" + user.hobbies);
// 		callback()
// 	}
// }

// const printUserHobbies = function(user){
// 	console.log(user.name + "\'s hobbies are: " + user.hobbies);
// }

// //printUserHobbies(users-list-1;)
// //printUserHobbies(users-list-2;)

// //can be any action, as long as the for loop is repeated
// //"i'll call whatever callback you give me"
// //as we go through each user, this callback receives the user at [i]
// //foreach has a for loop
// users_list_1.forEach(printUserHobbies)
// users_list_2.forEach(printUserHobbies)