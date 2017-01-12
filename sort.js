// var array = [10, 2, 5, 1, 9];
// array.sort(function(a, b){
// 	return a - b
// });
// console.log(array)


var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



// var getName = students.map(function(name){
// 	getName = name.name
// 	return getName
// 	})


//sort by name
students.sort(function(a, b) {
 var nameA = a.name
 var nameB = b.name
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return b.age - a.age
});
console.log(students)


// // sort by value
// students.sort(function (a, b) {
//   return b.age - a.age;
// });
// console.log(students)
// 	