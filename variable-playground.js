var person = {
	name: 'Andrew',
	age: 21
};

function updatePerson(obj) {
	// obj = {
	// 	name: 'Andrew',
	// 	age: 24
	// };
	obj.age = 24;
}

updatePerson(person);
console.log(person);


var grades = [15, 22];
// function addGrade(newGrades) {
// 	newGrades.push(55);
// }
function addGrade(newGrades) {
	newGrades.push(33);
	debugger;
}

addGrade(grades);
console.log(grades);