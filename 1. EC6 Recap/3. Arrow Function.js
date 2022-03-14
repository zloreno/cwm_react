// remove function keyword
// add fat arrow
// if it's asingle line, you can remove the return keyword

const square = function (number) {
	return number * number;
};

const anotherSquare = (number) => number * number;

const jobs = [
	{ id: 1, isActive: true },
	{ id: 2, isActive: true },
	{ id: 3, isActive: true },
	{ id: 4, isActive: false },
];

const activeJobs = jobs.filter(function (jobs) {
	return jobs.isActive;
});

const anotherActiveJobs = jobs.filter((jobs) => jobs.isActive);

console.log(anotherActiveJobs);

// The setTimeout is a callabck function which is not part of any object,
// it's a standalone function
const person = {
	talk() {
		setTimeout(function () {
			console.log(`this: `, this);
		}, 1000);
	},
};

person.talk(); // Window object

// Old solution
const oldPerson = {
	talk() {
		const self = this;
		setTimeout(function () {
			console.log(`self: `, self);
		}, 1000);
	},
};

oldPerson.talk(); // oldPerson object

// Arrow functions do not rebind "this" keyword
const newPerson = {
	talk() {
		setTimeout(() => console.log('this: ', this), 1000);
	},
};

newPerson.talk();
